import React from 'react'
import style from 'styled-components';
import Slide from '../compo/Slider'
import {mobile} from '../compo/Responsive';
import {useNavigate} from 'react-router-dom'
import Typewriter from 'typewriter-effect'
const Container  =  style.div`
width:100%;


${mobile({height:'89vh'})}

`
const Left = style.div`
display:flex;
justify-content:center;
flex-direction:row;
align-items:center;
width:100%;
background:rgb(231,221,200);
${mobile({
  flexDirection:'column',
})}
`
const Right = style.div`
display:flex;
width:38%;
background:rgb(231,221,200);


`
const BarSkill = style.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
align-item:center;
margin:2px;
padding:60px;
height:75.5vh;
${mobile({
  width:'80%',
  height:'87vh',
  padding:'10px',
})}
`

const Text= style.span`
width: 10%;
display:flex;
justify-content:center;
align-items:center;
font-size: 80px;
padding:5px;
border-radius:10px 10px;
color:#864141;
font-weight:bold;
font-family: 'Island Moments', cursive;
${mobile({
  width:'30%',
  margin:'25px',
  fontSize:'39px',
  background:'none',
  color:'#864141',
  fontWeight:'bold'
})}

`

const Home = () => {
  const history = useNavigate()
  return (
    <Container>
      
      <Left>
      <Typewriter 
      options={{autoStart:true,loop:true,delay:60}}
      onInit={(typewriter)=>{
        typewriter
      
        .typeString('Full Stack')
        .pauseFor(2500)
        .deleteAll()
        .typeString('Software   Developer')
        .pauseFor(3500)
        .start()
      }}
      />
        
        <BarSkill>
            <Text onClick={()=> history('/portafolio')}>React</Text>
            <Text>JavaScript</Text>
            <Text>Typescript</Text>
            <Right>
          <Slide/>
          </Right>
            <Text>NextJS</Text>
            <Text>Mongo DB</Text>
            <Text>NodeJs</Text>
            <Text>AWS</Text>
         </BarSkill>
      
      
       </Left>
       
       
    </Container>
  )
}

export default Home
