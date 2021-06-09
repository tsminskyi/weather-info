import React, { useEffect, useState } from 'react';
import SearchBlock from './components/SearchBlock';
import WeatherInformation from './components/WeatherInformation';
import FavoriteСities from './components/FavoriteСities';
import { handleLoadWeatherByCity, handleLoadWeatherByLocation } from './service/request';
import './App.css';

const App = () => {

  const [weatherInformation, setWeatherInformation] = useState(null);
  const [currentCity, setCurrentCity] = useState(null);
  const [favoriteСities, setFavoriteСities] = useState(JSON.parse(localStorage.getItem('weather-info')));
  const [isLoading, setIsLoading] = useState(false);
  const [isFirtsLoading, setFirtsLoading] = useState(true);

  const changeState = (respons) => {

    if (respons !== null && respons.status === 200) {

      setWeatherInformation(respons.data);
      setCurrentCity(respons.data.name);

    } else {

      setWeatherInformation(respons);

    }

  };

  useEffect(() => {

    setIsLoading(true);
    if (isFirtsLoading) {

      handleLoadWeatherByLocation().then((respons) => {

        if (respons == null) {

          handleLoadWeatherByCity(currentCity).then((value) => {

            changeState(value);

          });

        } else changeState(respons);

      }).finally(() => {

        setIsLoading(false);
        setFirtsLoading(false);

      });

    } else {

      handleLoadWeatherByCity(currentCity).then((respons) => {

        changeState(respons);

      }).finally(() => setIsLoading(false));

    }

  }, [currentCity]);

  return (

    <div className='container'>
      <div className='container__left'>
        <SearchBlock setCurrentCity={setCurrentCity} />
        <WeatherInformation isLoading={isLoading} weatherInformation={weatherInformation} setFavoriteСities={setFavoriteСities}
          favoriteСities={favoriteСities} />
      </div>
      <FavoriteСities favoriteСities={favoriteСities} setCurrentCity={setCurrentCity} />

    </div>

  );

};

export default App;
