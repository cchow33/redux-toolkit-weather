import axios from 'axios';

export const GET_WEATHER = 'GET_WEATHER'

export function getWeather(city){
  return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=75e7ccabdef5725374998f0c3f3798b2&units=imperial`)
  .then(response => {
    console.log(response)
      return {
        type: 'GET_WEATHER',
        payload: response
      }
    })
    .catch(err => {
      alert('Enter a city');
    });
};



