import React from 'react'
import style from 'styled-components';
import Slide from '../compo/Slider'
import {mobile} from '../compo/Responsive';

const Container  =  style.div`
display:flex;
height:80vh;
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
  margin:'1px'
})}
`
const Right = style.div`
display:flex;
justify-content:space-around;
align-items:center;
width:60%;
background:rgb(231,221,200);


`
const BarSkill = style.div`
text-align:center;
display:flex;
flex-wrap:wrap;
justify-content:center;
align-item:center;
margin:2px;
height:60vh;
${mobile({
  width:'80%',
  height:'75vh'
})}
`

const Text= style.span`
display:flex;
justify-content:center;
align-items:center;
font-size: 15px;
padding:3px;
border-radius:10px 10px;
background:#864141;
color:#ffff;
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
  return (
    <Container>
      <Left>
        <BarSkill>
            <Text>React</Text>
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
      
        {/* <BarSkill>
          <H2>Tools
          <Text>CSS3</Text>
          <Text>Styled-Components</Text>
          <Text>Tachyons</Text>
          <Text>Github</Text>
          <Text>Mocha and  Chai</Text>
          <Text>Jest</Text>
          </H2>
         </BarSkill> */}
       </Left>
    
    </Container>
  )
}

export default Home
