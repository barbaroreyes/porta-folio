import React from 'react' ;
import Navigation from './Navigation'
import style from 'styled-components';

const Container  =  style.div`
border : 1px solid black;
display:flex;
justify-content:space-around;
align-items:center;
height:50px;

`


const Header = () => {
  return (
    <Container>
     <div>Barbaro Reyes</div>
     <Navigation/>
    </Container>
  )
}

export default Header
