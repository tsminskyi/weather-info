import React from 'react';

const UnitsBlock = (props) => {

    const { setDataTemp, dataTemp, units } = props;

    const eventChangeUnits = (event) => {

        const differenceKelvinToCelsius = 273.15;
        const newObj = { ...dataTemp };
        if (event.target.value === units.Celsius) {

            newObj.temp = (Number.parseFloat(newObj.temp) - differenceKelvinToCelsius).toFixed(2);
            newObj.feelsLike = (Number.parseFloat(newObj.feelsLike) - differenceKelvinToCelsius).toFixed(2);
            newObj.currentValue = event.target.value;

        }
        if (event.target.value === units.Kelvin) {

            newObj.temp = (Number.parseFloat(newObj.temp) + differenceKelvinToCelsius).toFixed(2);
            newObj.feelsLike = (Number.parseFloat(newObj.feelsLike) + differenceKelvinToCelsius).toFixed(2);
            newObj.currentValue = event.target.value;

        }
        setDataTemp(newObj);

    };
    return (
        <select value={dataTemp.currentValue} onChange={eventChangeUnits}>
            <option value={units.Kelvin}>{units.Kelvin}</option>
            <option value={units.Celsius}>{units.Celsius}</option>
        </select>
    );

};
export default UnitsBlock;
