import React from 'react'
import style from 'styled-components';
import Slide from '../compo/Slider'
import {mobile} from '../compo/Responsive';

const Container  =  style.div`
display:flex;
height:120vh;
${mobile({height:'85vh'})}

`
const Left = style.div`
display:flex;
justify-content:center;
flex-direction:row;
align-items:center;
width:100%;background:rgb(231,221,200);
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
justify-content:center;
align-item:center;
width:80%;
margin:2px;
height:60vh;
${mobile({
  width:'80%',
  padding:'7px'
})}
`
const H2 = style.h4`
font-size: 28px;
color:#864141;
font-family: 'Island Moments', cursive;
${mobile({
  width:'50%',
  padding:'1px',
  fontSize:'45px'
})}
`
const Text= style.p`
font-size: 15px;
padding:3px;
border-radius:10px 10px;
background:#864141;
color:#ffff;
font-family: 'Island Moments', cursive;

`

const Home = () => {
  return (
    <Container>
      <Left>
        <BarSkill>
           <H2>
           Technologies
            <Text>React</Text>
            <Text>JavaScript</Text>
            <Text>Typescript</Text>
            <Text>NextJS</Text>
            <Text>Mongo DB</Text>
            <Text>NodeJs</Text>
            <Text>AWS</Text>
          </H2>
         </BarSkill>
         <Right>
      <Slide/>
      </Right>
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
