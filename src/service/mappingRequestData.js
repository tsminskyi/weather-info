const mappingRequestData = (weatherInformation, favoriteСities) => {

    if (weatherInformation !== null && weatherInformation.cod === 200) {

        const city = weatherInformation.name;
        const country = weatherInformation.sys.country;

        const temp = weatherInformation.main.temp;
        const feelsLike = weatherInformation.main.feels_like;

        const fullDataSunset = new Date(weatherInformation.sys.sunset);
        const sunset = `${fullDataSunset.getHours()} : ${fullDataSunset.getMinutes()}`;

        const weather = weatherInformation.weather[0].main;
        const weatherDescription = weatherInformation.weather[0].description;
        const weatherIcon = `https://openweathermap.org/img/w/${weatherInformation.weather[0].icon}.png`;

        const windSpeed = weatherInformation.wind.speed;
        const windGust = weatherInformation.wind.gust;

        let favoriteIndex = null;
        let isFavorite = false;
        if (favoriteСities != null) {

            favoriteIndex = favoriteСities.findIndex((el) => el.name === weatherInformation.name);
            isFavorite = favoriteIndex > -1;

        }

        // const dt = new Date(weatherInformation.dt).toDateString();
        const dt = new Date().toDateString();

        const weatherData = {

            city: city,
            country: country,
            temp: temp,
            feelsLike: feelsLike,
            sunset: sunset,
            weather: weather,
            weatherDescription: weatherDescription,
            weatherIcon: weatherIcon,
            windSpeed: windSpeed,
            windGust: windGust,
            isFavorite: isFavorite,
            favoriteIndex: favoriteIndex,
            dt: dt

        };
        return weatherData;

    }

    return null;

};
export default mappingRequestData;
