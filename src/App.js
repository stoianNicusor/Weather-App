import './App.css';
import './components/title/title.component';
import Title from './components/title/title.component';
import Detalis from './components/detalis/detalis.component';
import Temp from './components/temp/temp.component';
import {FaPowerOff} from 'react-icons/fa';

function App() {
  return (
    <div className="App">
        <FaPowerOff/>
        <Title />
        <Detalis/>
        <Temp/>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
