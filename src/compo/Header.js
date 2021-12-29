import Navigation from './Navigation';
import ImageP from '../images/foto-perfil.jpeg'
import {mobile,table,medio} from './Responsive'
import style from 'styled-components';

const Container  =  style.div`
display:flex;
justify-content:center;
align-items:center;
height:130px;
${mobile({
    background:' #864141',
    padding:'20px',
})}
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
justify-content:center;
align-items:center;
width:70%;
${mobile({
    width:'50%',
    flexDirection:'column'
    ,alignItems:'center',
    marginTop:'28px',
   
   
    
    
})}
`
const Name = style.p`
display: flex;
font-size : 25px;
color:black;
${mobile({
    width:'71%',
    fontSize:'18.7px',
    fontWeight:'bold',
    color:'#ffff',
})}
`
const Image = style.img`
width:40%;
border-radius : 50%;
${mobile({
    width:'65.5%'
})}
`


const Header = () => {
  return (
    <Container>
     <Profile>
     <ImageContainer>
    <Image src ={ImageP} alt="" />
    </ImageContainer>
    <Name>Barbaro Reyes</Name>
    </Profile>
     <Navigation/>
    </Container>
  )
}

export default Header
