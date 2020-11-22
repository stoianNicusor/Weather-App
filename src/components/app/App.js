import './App.scss';
import '../title/title.component';
import Title from '../title/title.component';
import Detalis from '../detalis/detalis.component';
import Temp from '../temp/temp.component';
import {BiMoon} from 'react-icons/bi';
import {RiWindyLine} from 'react-icons/ri';
import { useEffect, useState } from 'react';
import {VscLoading} from 'react-icons/vsc';


function App() {

  const [weather, setWeather] = useState();
  const [loaded, setLoaded] = useState(false);
  const currentTime = new Date().toLocaleTimeString('en',{timeStyle: 'short'});

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

  useEffect(() =>{
    async function getData(){
      const resp = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Bucharest&appid=cfd855cd52eb23f661cb93ee10ddc8d8&units=metric&lang=ro');
      const jsonResp = await resp.json();
      setWeather(jsonResp);
      setLoaded(true);
    }
    getData();
  });
  

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
            <BiMoon/>
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
          <Title text='Wind Speed'/>
        </div>
        <div className='det'>
          <div className='logo'>
           <RiWindyLine/>
          </div>
          <Detalis detalis={weather.wind.speed + ' ms'}/>
        </div>
     </div> 
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
