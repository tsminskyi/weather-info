import axios from 'axios';

const requestOpenweathermap = (setWeatherInformation, setCurrentCity, currentCity) => {

    const apikey = '5e8f83d77ff6cdbe5f0c8f33ad9ce665';
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather';

    if (currentCity == null) {

        navigator.geolocation.getCurrentPosition(
            (position) => {

                const currentPosition = { latitude: position.coords.latitude, longitude: position.coords.longitude };

                axios.get(`${baseURL}?lat=${currentPosition.latitude}&lon=${currentPosition.longitude}&appid=${apikey}`)
                    .then((respons) => {

                        setWeatherInformation(respons.data);
                        setCurrentCity(respons.data.name);

                    });

            }

        );

    }

    if (currentCity == null) {

        const storage = JSON.parse(localStorage.getItem('weather-info'));
        if (storage !== null && storage.length !== 0) {

            setCurrentCity(storage[0].name);

        }

    }
    if (currentCity !== null) {

        axios.get(`${baseURL}?q=${currentCity}&appid=${apikey}`)
            .then((respons) => {

                setWeatherInformation(respons.data);

            }).catch((error) => {

                setWeatherInformation(error.response.data);

            });

    }

};
export default requestOpenweathermap;
