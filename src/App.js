import {Routes, Route} from 'react-router-dom'
import Home from  './pages/Home'
import Portafolio from  './pages/Portafolio'
import './App.css';

function App() {

  console.log('porta' , Portafolio)
  return (
    <div className="App">
      
     
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='portafolio' element={<Portafolio/> }/>
        
      </Routes>
     
    </div>
  );
}

export default App;
