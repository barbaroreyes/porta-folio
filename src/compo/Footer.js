import React from 'react'
import style from 'styled-components';

const Container  =  style.div`
border : 1px solid black;
display:flex;
justify-content:space-around;
align-items:center;
height:50px;
`
const Footer = () => {
  return (
    <Container>
      <div>Footer</div>
      <div>info</div>
    </Container>
  )
}

export default Footer
