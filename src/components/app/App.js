import './App.scss';
import '../title/title.component';
import Title from '../title/title.component';
import Detalis from '../detalis/detalis.component';
import Temp from '../temp/temp.component';
import {FaPowerOff} from 'react-icons/fa';

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <Title text='Hong Kong'/>
        <Title text='Monday, 1:20 am'/>
      </div>
      <Detalis detalis='Clear'/>
      <div className='temp'>
        <div className='left'>
          <Temp temp='23°' isCeleus={false}/>
        </div>
        <div className='right'>
          <Temp temp='18°' isCeleus={true}/>
          <Temp temp='20°' isCeleus={true}/>
        </div>
      </div>
      <Title text='Wind Speed'/>
      <Detalis detalis='32.4 ms'/>
    </div>
  );
}

export default App;
