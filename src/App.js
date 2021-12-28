import {Routes, Route} from 'react-router-dom'
import Home from  './pages/Home'
import Portafolio from  './pages/Portafolio'
import AboutMe from  './pages/AboutMe';
import  ProjectDetails from  './compo/ProjectDetails'
import Header from  './compo/Header';
import Footer  from './compo/Footer';
import Contact from './pages/Contact';
import style from 'styled-components';
import './App.css';


const Container = style.div`
border: 3px solid black;

`

function App() {

  return (
    <Container>
     <Header/>
      <Routes>
        <Route path='/' 
         element={<Home/>}
         />
        <Route path='portafolio'
         element={<Portafolio/>
          }/>
            <Route path='aboutme'
         element={<AboutMe/>
          }/>
            <Route path='projectdetails'
         element={<ProjectDetails/>
          }/>
           <Route path='contact'
         element={<Contact/>
          }/>
        
      </Routes>
    <Footer/>
    </Container>
  );
}

export default App;
