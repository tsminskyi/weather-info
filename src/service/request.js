import axios from 'axios';

const requestOpenweathermap = async (currentCity, pos) => {

    const axiosMain = axios.create({
        baseURL: 'https://api.openweathermap.org/data/2.5/',
        params: {
            appid: process.env.REACT_APP_APIKEY_OPENWEATHERMAP
        }
    });
    let result = null;
    let city = currentCity;
    if (pos !== null) {

        result = await axiosMain
            .get(`weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`)
            .catch((error) => {

                return error.response.data;

            });

    }

    if (city == null && pos == null) {

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

const handleLoadWeather = async (city) => {

    try {

        const curPosition = await currentPosition();
        const response = await requestOpenweathermap(city, curPosition);
        return response;

    } catch (err) {

        console.log(err);
        return null;

    }

};
export default handleLoadWeather;
