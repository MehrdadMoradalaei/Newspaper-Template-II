import { useEffect, useState } from 'react';
import './MiniContainer'
const Weather = () => {
    const [WeatherData, setWeatherData] =useState("Berlin Weather");
    useEffect(()=>{getData();})
    const getData = ()=>{
const WeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=a5fc9d497ec4afe7c4c36feae2f9affa&units=metric";
    fetch(WeatherURL)
    .then(Response=>Response.json())
    .then(data=>{setWeatherData( 'Current '+data.name+' Tempreture: '+data.main.temp+'C');})
    .catch(err=> console.log(err))
}

    return(
        <div  className='Weather'>{WeatherData}</div>
    )
}
export default Weather;
