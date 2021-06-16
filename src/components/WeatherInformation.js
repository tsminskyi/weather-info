import React, { useState, useEffect } from 'react';
import mappingRequestData from '../service/mappingRequestData';
import eventEditeFavorite from '../service/eventEditeFavorite';
import UnitsBlock from './UnitsBlock';
import * as constants from '../service/constants';
import Information404 from './Information404';
import LoadingBLock from './LoadingBLock';
import InformationErrorLocation from './InformationErrorLocation';

const WeatherInformation = (props) => {

    const {
        weatherInformation, favoriteСities, setFavoriteСities, isLoading
    } = props;

    const mapUnitTitles = {
        Kelvin: constants.UNIT_KELVIN,
        Celsius: constants.UNIT_CELSIUS
    };

    const [dataTemp, setDataTemp] = useState({
        temp: null,
        feelsLike: null,
        currentValue: ''
    });

    useEffect(() => {

        if (weatherInformation != null && weatherInformation.cod === 200) {

            setDataTemp({
                temp: weatherInformation.main.temp,
                feelsLike: weatherInformation.main.feels_like,
                currentValue: mapUnitTitles.Kelvin
            });

        }

    }, [weatherInformation]);

    const data = mappingRequestData(weatherInformation, favoriteСities);

    const handleEditFavoriteCity = async () => {

        const favoriteCityList = await eventEditeFavorite(data.city, data.favoriteIndex, favoriteСities);
        setFavoriteСities(favoriteCityList);

    };

    if (isLoading) {

        return <LoadingBLock />;

    }
    if (weatherInformation == null) {

        return <InformationErrorLocation />;

    }
    if (weatherInformation.cod === '404') {

        return <Information404 weatherInformation={weatherInformation} />;

    }
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
                        onChange={handleEditFavoriteCity} />
                </div>
                <div className='horizontalBlock'>Units:
                    <UnitsBlock setDataTemp={setDataTemp} dataTemp={dataTemp} units={mapUnitTitles} />
                </div>
            </div>
            <p><span>Temperature:</span> {dataTemp.temp}</p>
            <p><span>Feels like:</span> {dataTemp.feelsLike}</p>
            <p><span>Sunset:</span> {data.sunset}</p>
            <p><span>Weather:</span> {data.weather}</p>
            <p><span>Description:</span> {data.weatherDescription}</p>
            <p><span>Wind Speed:</span> {data.windSpeed}</p>
            <p><span>Wind Gust:</span> {data.windGust}</p>

        </div>
    );

};
export default WeatherInformation;
