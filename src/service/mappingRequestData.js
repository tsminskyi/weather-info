const mappingRequestData = (weatherInformation, favoriteСities) => {

    const city = weatherInformation.name;
    const country = weatherInformation.sys.country;

    const temp = weatherInformation.main.temp;
    const feelsLike = weatherInformation.main.feels_like;

    const fullDataSunrise = new Date(weatherInformation.sys.sunrise);
    const sunrise = `${fullDataSunrise.getHours()} : ${fullDataSunrise.getMinutes()}`;

    const weather = weatherInformation.weather[0].main;
    const weatherDescription = weatherInformation.weather[0].description;
    const weatherIcon = `https://openweathermap.org/img/w/${weatherInformation.weather[0].icon}.png`;

    const windSpeed = weatherInformation.wind.speed;
    const windGust = weatherInformation.wind.gust;

    const favoriteIndex = favoriteСities.findIndex((el) => el.name === weatherInformation.name);
    const isFavorite = favoriteIndex > -1;

    const weatherData = {

        city: city,
        country: country,
        temp: temp,
        feelsLike: feelsLike,
        sunrise: sunrise,
        weather: weather,
        weatherDescription: weatherDescription,
        weatherIcon: weatherIcon,
        windSpeed: windSpeed,
        windGust: windGust,
        isFavorite: isFavorite,
        favoriteIndex: favoriteIndex

    };
    return weatherData;
    
};
export default mappingRequestData;
