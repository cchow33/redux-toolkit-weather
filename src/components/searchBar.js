import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getWeather } from '../actions'
import './searchBar.css';

const searchBar = () => {
  const [city, setCity] = useState('')
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    console.log('button clicked')
    e.preventDefault();
    dispatch(getWeather(city));
  }

  return (
    <div className="searchbar">
      <p>Enter a city to search for the weather</p>
      
      <div className="input-field">
        <input 
          type="text" 
          className="search"
          placeholder="Enter a city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <table>
        <thead>
          <tr>
          <th scope="col">City</th>
          <th scope="col">Temp</th>
          <th scope="col">Press</th>
          <th scope="col">Hum</th>
          </tr>
        </thead>
      </table>
      
    </div>
  )
}

export default searchBar

// [eslint] Plugin "react" was conflicted between "package.json » eslint-config-react-app » C:\Users\carme\onedrive\desktop\redux-toolkit-weather\node_modules\eslint-config-react-app\base.js" and "BaseConfig » C:\Users\carme\OneDrive\Desktop\redux-toolkit-weather\node_modules\eslint-config-react-app\base.js".