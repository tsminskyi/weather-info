import React, { useEffect, useState } from 'react';
import SearchBlock from './components/SearchBlock';
import WeatherInformation from './components/WeatherInformation';
import FavoriteСities from './components/FavoriteСities';
import requestOpenweathermap from './service/request';
import './App.css';

const App = () => {

  const [weatherInformation, setWeatherInformation] = useState(null);
  const [currentCity, setCurrentCity] = useState(null);
  const [favoriteСities, setFavoriteСities] = useState(JSON.parse(localStorage.getItem('weather-info')));

  useEffect(() => {

    requestOpenweathermap(setWeatherInformation, setCurrentCity, currentCity);

  }, [currentCity, favoriteСities]);

  return (

    <div className='container'>
      <div className='container__left'>
        <SearchBlock setCurrentCity={setCurrentCity} />
        <WeatherInformation weatherInformation={weatherInformation} setFavoriteСities={setFavoriteСities}
          favoriteСities={favoriteСities} />
      </div>
      <FavoriteСities favoriteСities={favoriteСities} setCurrentCity={setCurrentCity} />

    </div>

  );

};

export default App;
