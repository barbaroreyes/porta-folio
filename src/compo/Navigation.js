import React from 'react'
import {Link} from 'react-router-dom'
import style from 'styled-components';
import {mobile , table} from './Responsive'
const Container = style.ul `
display:flex;
`
const Item = style.li`
list-style: none;
margin:10px;
${mobile({display:'none'})}
`
const SandLink = style.div `
width: 30px;
padding:2px;
display:flex;
justify-content:space-between;
flex-direction:column;
align-items:center;
cursor:pointer;
${table({display:'none'})}
`

const  Line = style.div `
border :1px solid #ffff;
width:100%;
margin:2px;
`

const Navigation = () => {


  return (
    <Container>
      <SandLink>
       <Line></Line>
       <Line></Line>
       <Line></Line>
      </SandLink>
        <Item>
        <Link to='/'>Home</Link>
        </Item>
        <Item>
        <Link to='/portafolio'>Potafolio</Link>
        </Item>
        <Item>
            <Link to='/aboutme'>AboutMe</Link></Item>
        <Item>
            <Link to='/contact'>Contact</Link>
        </Item>
     
      
      
      
    </Container>
  )
}

export default Navigation

