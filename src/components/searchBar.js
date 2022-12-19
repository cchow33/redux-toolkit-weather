import React from 'react'
import { useState } from 'react'
import './searchBar.css';

const searchBar = () => {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState('')

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



  return (
    <div className="searchbar">
      Enter a city to search for the weather
      
      <div className="input-field">
        <input 
          type="text" 
          className="search"
          placeholder="Enter a city"
        />
        <button>Submit</button>
      </div>    
      
      
      
      
      
      
      
      
      
      
      </div>
  
  
  
  
  
  
  
  
  
  
  
  )
}

export default searchBar



// [eslint] Plugin "react" was conflicted between "package.json » eslint-config-react-app » C:\Users\carme\onedrive\desktop\redux-toolkit-weather\node_modules\eslint-config-react-app\base.js" and "BaseConfig » C:\Users\carme\OneDrive\Desktop\redux-toolkit-weather\node_modules\eslint-config-react-app\base.js".