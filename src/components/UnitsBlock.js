import React from 'react';

const UnitsBlock = (props) => {

    const { setDataTemp, dataTemp, units } = props;

    const eventChangeUnits = (event) => {

        const differenceKelvinToCelsius = 273.15;
        const newObj = { ...dataTemp };
        if (event.target.value === units[1]) {

            newObj.temp = (Number.parseFloat(newObj.temp) - differenceKelvinToCelsius).toFixed(2);
            newObj.feelsLike = (Number.parseFloat(newObj.feelsLike) - differenceKelvinToCelsius).toFixed(2);
            newObj.currentValue = event.target.value;

        }
        if (event.target.value === units[0]) {

            newObj.temp = (Number.parseFloat(newObj.temp) + differenceKelvinToCelsius).toFixed(2);
            newObj.feelsLike = (Number.parseFloat(newObj.feelsLike) + differenceKelvinToCelsius).toFixed(2);
            newObj.currentValue = event.target.value;

        }
        setDataTemp(newObj);

    };
    return (
        <select className='' value={dataTemp.currentValue} onChange={eventChangeUnits}>
            <option value={units[0]}>{units[0]}</option>
            <option value={units[1]}>{units[1]}</option>
        </select>
    );

};
export default UnitsBlock;
