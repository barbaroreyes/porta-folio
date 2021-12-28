import React from 'react' ;
import Navigation from './Navigation'
import ImageP from '../images/foto-perfil.jpeg'
import style from 'styled-components';

const Container  =  style.div`
border : 1px solid black;
display:flex;
justify-content:space-between;
align-items:center;
height:50px;
padding:20px;

`
const ImageContainer= style.div`
width : 20%;
height:50px;
`
const Profile = style.div`
display: flex;

align-items:center
`
const Name = style.h3`
`
const Image = style.img`
width:59%;
`

const Header = () => {
  return (
    <Container>
     <Profile>
     <ImageContainer>
    <Image src ={ImageP} alt="" />
    </ImageContainer><Name>Barbaro Reyes</Name>
    </Profile>
     <Navigation/>
    </Container>
  )
}

export default Header
