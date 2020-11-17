import './App.scss';
import '../title/title.component';
import Title from '../title/title.component';
import Detalis from '../detalis/detalis.component';
import Temp from '../temp/temp.component';
import {BiMoon} from 'react-icons/bi';
import {RiWindyLine} from 'react-icons/ri';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <div className='header'>
          <div className='city'>
            <Title text='Hong Kong'/>
          </div>
          <div className='date'>
            <Title text='Monday, 1:20 am'/>
          </div>
        </div>
        <div className='howIs'> 
          <div className='logo'>
            <BiMoon/>
          </div>
          <Detalis detalis='Clear'/>
        </div>
        <div className='middle'>
          <div className='left'>
            <Temp temp='23°' isCeleus={false}/>
          </div>
          <div className='right'>
            <Temp temp='18°' isCeleus={true}/>
            <Temp temp='20°' isCeleus={true}/>
          </div>
        </div>
        <div className='how'>
          <Title text='Wind Speed'/>
        </div>
        <div className='det'>
          <div className='logo'>
           <RiWindyLine/>
          </div>
          <Detalis detalis='32.4 ms'/>
        </div>
     </div> 
   </div>
  );
}

export default App;
