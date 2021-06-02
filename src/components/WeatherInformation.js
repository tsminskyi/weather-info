import React, { useState, useEffect } from 'react';
import mappingRequestData from '../service/mappingRequestData';
import eventEditeFavorite from '../service/eventEditeFavorite';
import UnitsBlock from './UnitsBlock';

const WeatherInformation = (props) => {

    const { weatherInformation, favoriteСities, setFavoriteСities } = props;
    if (weatherInformation == null) {

        return (
            <div className='container__info'>
                <h1>We don`t know where you are.Please enter the city name in the search bar.</h1>
                <h4>Possible reasons:</h4>
                <h5>You have chosen not to provide your location data</h5>
                <h5>There is a network problem or the location service cannot
                be contacted for any other reason.
                </h5>
                <h5>Failed to determine the location within the specified time.</h5>
            </div>
        );

    }
    if (weatherInformation.cod === '404') {

        return (
            <div className='container__info'>
                <h1>{weatherInformation.cod}</h1>
                <p>{weatherInformation.message}</p>
            </div>
        );

    }

    const [dataTemp, setDataTemp] = useState({
        temp: weatherInformation.main.temp,
        feelsLike: weatherInformation.main.feels_like,
        units: ['K', 'C'],
        currentValue: 'K'
    });
    const data = mappingRequestData(weatherInformation, favoriteСities);

    const handleEditeFavoriteCity = async () => {

        await eventEditeFavorite(data.city, data.favoriteIndex, favoriteСities)
            .then((newList) => {

                setFavoriteСities(newList);

            });

    };
    useEffect(() => {

        setDataTemp({
            temp: weatherInformation.main.temp,
            feelsLike: weatherInformation.main.feels_like,
            units: ['K', 'C'],
            currentValue: 'K'
        });

    }, [weatherInformation]);

    return (
        <div className='container__info'>
            <div className='horizontalBlock'>
                <p>{data.city}, {data.country} - {data.dt}</p>
                <img src={data.weatherIcon} alt='' />
            </div>
            <div className='horizontalBlock settingsBlock'>
                <div>
                    <label htmlFor='fvCity'>Favorite city</label>
                    <input type='checkbox' id='fvCity' checked={data.isFavorite}
                        onChange={handleEditeFavoriteCity} />
                </div>
                <div className='horizontalBlock'>Units:
                    <UnitsBlock setDataTemp={setDataTemp} dataTemp={dataTemp} />
                </div>
            </div>
            <p><span>Temperature:</span> {dataTemp.temp}</p>
            <p><span>Feels like:</span> {dataTemp.feelsLike}</p>
            <p><span>Sunrise:</span> {data.sunrise}</p>
            <p><span>Weather:</span> {data.weather}</p>
            <p><span>Description:</span> {data.weatherDescription}</p>
            <p><span>Wind Speed:</span> {data.windSpeed}</p>
            <p><span>Wind Gust:</span> {data.windGust}</p>

        </div>
    );

};
export default WeatherInformation;
