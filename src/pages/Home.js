import React from 'react'
import style from 'styled-components';
import {mobile} from '../compo/Responsive'
const Container  =  style.div`
border : 1px solid black;
display:flex;
height:100vh;
margin:2px;
`
const Left = style.div`
display:flex;
justify-content : center;
flex-direction: column;
align-items:center;
width:50%;
border : 1px solid black;
`
const Right = style.div`
display:flex;
justify-content:space-around;
align-items:center;
width:50%;
border : 1px solid black;
`
const BarSkill = style.div`
text-align:center;
display:flex;
justify-content:center;
align-item:center;
width:80%;
margin:5px;
height:45vh;
${mobile({width:'90%',padding:'7px'})}
`
const H2 = style.h4`
font-size: 18px;
border: 1px solid black;
${mobile({
  width:'100%',padding:'3px',fontSize:'20px'})}
`
const Text= style.p`
font-size: 15px;
padding:1px;
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
