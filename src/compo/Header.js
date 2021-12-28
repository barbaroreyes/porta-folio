import React from 'react' ;
import Navigation from './Navigation'
import ImageP from '../images/foto-perfil.jpeg'
import {mobile,table,medio} from './Responsive'
import style from 'styled-components';

const Container  =  style.div`
border : 1px solid black;
display:flex;
justify-content:space-around;
align-items:center;
height:130px;
${mobile({background:'red',justifyContent: 'center'})}
${table({background:'blue'})}
${medio({background:'grey'})}

`
const ImageContainer= style.div`
width : 20%;
border-radius : 50%;
margin-left:20px;
${mobile({width:'70%'})}
`
const Profile = style.div`
display: flex;
align-items:center;
width:70%;
`
const Name = style.p`
display: flex;
font-size : 25px;
margin-left:0px;
${mobile({width:'90%',fontSize:'15px',fontWeight:'bold'})}
`
const Image = style.img`
width:40%;
border-radius : 50%;
${mobile({width:'69%',height:'50px'})}
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
