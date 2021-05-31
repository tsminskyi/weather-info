import React from 'react';
import mappingRequestData from '../service/mappingRequestData';

const WeatherInformation = (props) => {

    const { weatherInformation, favoriteСities, setFavoriteСities } = props;
    if (weatherInformation == null) {

        return (
            <div>
                <p>We don`t know where you are.Please enter the city name in the search bar.</p>
                <p>Possible reasons:</p>
                <p>You have chosen not to provide your location data</p>
                <p>There is a network problem or the location service cannot
                be contacted for any other reason.
                </p>
                <p>Failed to determine the location within the specified time.</p>
            </div>
        );

    }
    if (weatherInformation.cod === '404') {

        return (
            <div>
                <p>{weatherInformation.cod}</p>
                <p>{weatherInformation.message}</p>
            </div>
        );

    }

    const editeFavorite = (value, favoriteIndex) => {

        if (favoriteСities != null && favoriteСities.length > 0) {

            // const index = favoriteСities.findIndex((el) => el.name === value);
            if (favoriteIndex >= 0) {

                const newList = favoriteСities.filter((el) => el.name !== value);
                setFavoriteСities(newList);
                localStorage.setItem('weather-info', JSON.stringify(newList));

            } else {

                const newList = favoriteСities.slice();
                newList.push({ name: value });
                setFavoriteСities(newList);
                console.dir(newList);
                localStorage.setItem('weather-info', JSON.stringify(newList));

            }

        } else {

            const newList = new Array({ name: value });
            setFavoriteСities(newList);
            localStorage.setItem('weather-info', JSON.stringify(newList));

        }

    };
    const data = mappingRequestData(weatherInformation, favoriteСities);
    return (
        <div className='container__info'>
            <div>
                <p>{data.city},{data.country}</p>
                <img src={data.weatherIcon} alt='' />
                <input type='checkbox' checked={data.isFavorite}
                    onChange={() => editeFavorite(data.city, data.favoriteIndex)} />
            </div>
            <p>Temperature: {data.temp}</p>
            <p>Feels like: {data.feelsLike}</p>
            <p>Sunrise: {data.sunrise}</p>
            <p>Weather: {data.weather}</p>
            <p>Description: {data.weatherDescription}</p>
            <p>Wind Speed: {data.windSpeed}</p>
            <p>Wind Gust: {data.windGust}</p>

        </div>
    );

};
export default WeatherInformation;
