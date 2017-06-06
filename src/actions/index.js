import axios from 'axios';

const API_KEY = '39e2bf50b3cf596db0ef380231a7d22d';

export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&units=imperial&appid=${API_KEY}`;

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);


    //console.log('Request:', request);

    //action creator always returns an object that ALWAYS has to have a TYPE!!
    return{
        type: FETCH_WEATHER,
        payload: request
    }
}