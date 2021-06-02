import React, { useEffect, useState } from 'react';
import SearchBlock from './components/SearchBlock';
import WeatherInformation from './components/WeatherInformation';
import FavoriteСities from './components/FavoriteСities';
import handleLoadWeather from './service/request';
import './App.css';

const App = () => {

  const [weatherInformation, setWeatherInformation] = useState(null);
  const [currentCity, setCurrentCity] = useState(null);
  const [favoriteСities, setFavoriteСities] = useState(JSON.parse(localStorage.getItem('weather-info')));
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    setIsLoading(true);
    handleLoadWeather(currentCity).then((respons) => {

      if (respons !== null && respons.status === 200) {

        setWeatherInformation(respons.data);
        setCurrentCity(respons.data.name);

      } else {

        setWeatherInformation(respons);

      }

    }).finally(() => setIsLoading(false));

  }, [currentCity]);

  if (isLoading) {

    return (

      <div className='container'>
        <div className='container__left'>
          <SearchBlock setCurrentCity={setCurrentCity} />
          <h1>Loading...</h1>
        </div>
        <FavoriteСities favoriteСities={favoriteСities} setCurrentCity={setCurrentCity} />

      </div>

    );

  }
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
