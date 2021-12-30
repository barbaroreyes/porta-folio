import React from 'react'
import style from 'styled-components';
import {mobile} from '../compo/Responsive'
const Container  =  style.div`
display:flex;
height:77vh;
background:rgb(231,221,200)
`
const Left = style.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
width:50%;

`
const Right = style.div`
display:flex;
justify-content:space-around;
align-items:center;
width:50%;

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
font-size: 18px;
color:#864141;
${mobile({
  width:'100%',padding:'4px',fontSize:'22px'})}
`
const Text= style.p`
font-size: 16px;
padding:3px;
border-radius:10px 10px;
background:#864141;
color:#ffff;
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
        <BarSkill>
          <H2>Tools
          <Text>CSS3</Text>
          <Text>Styled-Components</Text>
          <Text>Tachyons</Text>
          <Text>Github</Text>
          <Text>Mocha and  Chai</Text>
          <Text>Jest</Text>
          </H2>
         </BarSkill>
       </Left>
      <Right>
     Lasts Works
      </Right>
    </Container>
  )
}

export default Home
