import axios from 'axios';

const axiosMain = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    params: {
        appid: process.env.REACT_APP_APIKEY_OPENWEATHERMAP
    }
});

const requestByCity = async (currentCity) => {

    let result = null;
    let city = currentCity;

    if (city == null) {

        const storage = JSON.parse(localStorage.getItem('weather-info'));
        if (storage !== null && storage.length !== 0) {

            city = storage[0].name;

        }

    }
    if (city !== null) {

        result = await axiosMain.get(`weather?q=${city}`).catch((error) => {

            return error.response.data;

        });

    }
    return result;

};

const currentPosition = () => {

    return new Promise((resolve) => {

        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition((pos) => {

                resolve(pos);

            }, () => {

                resolve(null);

            });

        } else resolve(null);

    });

};

export const handleLoadWeatherByLocation = async () => {

    try {

        const curPosition = await currentPosition();

        if (curPosition !== null) {

            const result = await axiosMain
                .get(`weather?lat=${curPosition.coords.latitude}&lon=${curPosition.coords.longitude}`)
                .catch((error) => {

                    return error.response.data;

                });
            return result;

        }
        return null;

    } catch (err) {

        console.log(err);
        return null;

    }

};

export const handleLoadWeatherByCity = async (city) => {

    try {

        return await requestByCity(city);

    } catch (err) {

        console.log(err);
        return null;

    }

};
