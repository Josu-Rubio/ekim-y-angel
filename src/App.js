import './App.css';
import Header from './components/Header/Header';
import Location from './components/Location/Location';
import Confirm from './components/Confirm/Confirm';
import Story from './components/Story/Story';
import Music from './components/Music/Music';
import Gifts from './components/Gifts/Gifts';

function App() {
  return (
    <div className='App'>
      <Header />
      <Location />
      <Confirm />
      {/* <Story />
      <Music />
      <Gifts /> */}
    </div>
  );
}

export default App;
