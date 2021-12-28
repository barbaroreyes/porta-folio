import React from 'react'
import style from 'styled-components';

const Container  =  style.div`
border : 1px solid black;
display:flex;
height:100vh;
margin:7px;
`
const Left = style.div`
display:flex;
justify-content:space-around;
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

const Home = () => {
  return (
    <Container>
      <Left>
     left
      </Left>
      <Right>
      Right
      </Right>
    </Container>
  )
}

export default Home
