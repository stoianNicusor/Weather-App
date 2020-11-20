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

  useEffect(() =>{
    async function getData(){
      const resp = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Bucharest&appid=2a07c6b1ab39b87ff1638fe206646d06&units=metric&lang=ro');
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
            <Title text='Monday, 1:20 am'/>
          </div>
        </div>
        <div className='howIs'> 
          <div className='logo'>
            <BiMoon/>
          </div>
          <Detalis detalis={weather.weather[0].main}/>
        </div>
        <div className='middle'>
          <div className='left'>
            <Temp temp={weather.main.temp} isCeleus={false}/>
          </div>
          <div className='right'>
            <Temp temp={weather.main.temp_max} isCeleus={true}/>
            <Temp temp={weather.main.temp_min} isCeleus={true}/>
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
