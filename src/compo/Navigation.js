import React from 'react'
import {Link} from 'react-router-dom'
import style from 'styled-components';
const Container = style.ul `
display:flex;
`
const Item = style.li`
list-style: none;
margin:10px;
`



const Navigation = () => {


  return (
    <Container>
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

