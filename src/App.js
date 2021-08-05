import './App.css';
import './index.js'
import './Fruit.css'
import Pdp from './Fruit';

function App() {
  return (
    <div className="App">
      <div className='container'>
          <div className='main'>
            <div className='border'></div>
            <div className='item'>Fruits:</div>
            <button className='btn' onClick='subs'>subscribe</button>
            
          </div>
      </div>

<Pdp />
      
    </div>
  );
}

export default App;

