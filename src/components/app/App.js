import React from 'react';
import './App.scss';
import '../title/title.component';
import Title from '../title/title.component';
import Detalis from '../detalis/detalis.component';
import Temp from '../temp/temp.component';
import Search from '../search/search.component';
import {RiWindyLine,RiSunFill,RiSunFoggyFill,RiCloudy2Fill, RiFoggyFill} from 'react-icons/ri';
import { useEffect, useState } from 'react';
import {VscLoading} from 'react-icons/vsc';
import Button from '../button/button.component';
import {FaRegSnowflake} from 'react-icons/fa';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function App() {

  const [weather, setWeather] = useState();
  const [loaded, setLoaded] = useState(false);
  let currentTime = new Date().toLocaleTimeString('en',{timeStyle: 'short'});
  const [city, setCity] = useState('Bucharest');

  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Duminica";
  weekday[1] = "Luni";
  weekday[2] = "Marti";
  weekday[3] = "Miercuri";
  weekday[4] = "Joi";
  weekday[5] = "Vineri";
  weekday[6] = "Sambata";
  var n = weekday[d.getDay()];
    
  //For switch weather icon
  function icon() {
    let det = weather.weather[0].description;
    switch (det) {
      case 'cer senin':
        return <RiSunFill/>;
        break;
      case 'nori împrăștiați':
        return <RiSunFoggyFill/>;
        break;
      case 'cer acoperit de nori':
        return <RiCloudy2Fill/>;
        break;
      case 'ceață':
        return <RiFoggyFill/>;
        break;
      case 'ninsoare ușoară':
        return <FaRegSnowflake/>;
        break;
      default:
        return <RiSunFill/>;
    }
  }
  /**
   * Return the API data in useEffect
   * 
   * @function {function} is a function to get API data Json
   * @dep {array} is state that gets update
   */
  useEffect(() => {
    async function getData(){
      const resp = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + 
                                city + 
                                '&appid=cfd855cd52eb23f661cb93ee10ddc8d8&units=metric&lang=ro');
      const jsonResp = await resp.json();
      setWeather(jsonResp);
      setLoaded(true);
      
    }
    getData();
  },[city]);

  /** 
   * Function to update the state of city
   * 
   * @e {event} synthetic event for button click
   */ 
  let switchCity = (e) => {
    setCity(e.currentTarget.textContent);
  } 

/** 
   * Function to update the state of city
   * 
   * @ take the input from user
   */ 

  let searchCity = () => {
    var rsp = document.querySelector('#searchTxt').value;
    rsp ?
      setCity(rsp)
      : alert('error')
    } 

  return (
    loaded ? 
    <div className='App'>
      <div className='container'>
        <div className='header'>
          <div className='city'>
            <Title text={weather.name}/>
          </div>
          <div className='date'>
            <Title text={n + ' ' + currentTime}/>
          </div>
        </div>
        <div className='howIs'> 
          <div className='logo'>
            {icon()}
          </div>
            <Detalis detalis={weather.weather[0].description}/>
        </div>
        <div className='middle'>
          <div className='left'>
            <Temp temp={Math.round(weather.main.temp)} isCeleus={false}/>
          </div>
          <div className='right'>
            <div className='b'>
              <Temp temp={Math.round(weather.main.temp_max)} isCeleus={true}/>
            </div>
            <Temp temp={Math.round(weather.main.temp_min)} isCeleus={true}/>
          </div>
        </div>
        <div className='how'>
          <Title text='Viteza vântului'/>
        </div>
        <div className='det'>
          <div className='logo'>
           <RiWindyLine/>
          </div>
          <Detalis detalis={weather.wind.speed + ' ms'}/>
        </div>
     </div> 
      <div className='btn'>
        <div className='btn1'>
          <Button city='Bucharest' clickChange={switchCity}/>
        </div>
        <div className='btn2'>
          <Button city='Sidney' clickChange={switchCity}/>
        </div>
      </div>
     <Search placeholder='Write in English' clickChange={searchCity}/>
   </div>
  : <div className='load'>
        <div className='l'>
          Loading 
        </div>
        <div className='icon'>
         <VscLoading/>
        </div>
      </div>
  );
}

export default App;