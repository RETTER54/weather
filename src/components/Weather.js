import React, {useState} from 'react';
import {mockWeather} from '../mocks/mockWeather.js';



function Weather() {
    const [weather, setWeather] = useState(mockWeather);

    function kelvinToCelsius(tempKelvin){
        return Math.round(tempKelvin - 273.15);
    }

    function loadIconWeather(idIcon){
        return "http://openweathermap.org/img/wn/"+idIcon+"@2x.png"
    }


    return (
        <div>
           <h1>Météo : {weather.name} </h1> 
            <p>{weather.weather[0].description}</p>
            <p>{kelvinToCelsius(weather.main.temp)} C°</p>
            <img src={loadIconWeather(weather.weather[0].icon)} alt="icon"></img>
           
           
        </div>
    )
}

export default Weather

// 998f5c25bef5d9684d55e8e901f62ee8 => API KEYS