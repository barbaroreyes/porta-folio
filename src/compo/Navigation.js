import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import style from 'styled-components';
import {mobile , table} from './Responsive';

const Container = style.ul `
display:flex;
`
const Item = style.li`

list-style: none;
margin:10px;
${mobile({
  display:'none'
})}
`
const SandLink = style.div `
width: 30px;
padding:2px;
display:flex;
justify-content:space-between;
flex-direction:column;
align-items:center;
cursor:pointer;
margin-right: -11px;

${table({display:'none'})}
`

const  Line = style.div `
border :1px solid #ffff;
width:100%;
margin:2px;
`
const MenuItems = style.div`
width:55vw;
position:fixed;
display:flex;
justify-content:space-around;
flex-direction:column;
height:calc(100vh - 130px)
margin:0;
top:10px;
padding:0;
font-weight:bold;
z-index:999;
transition: all 1s ease;
${table({display:'none'})}
`
const ItemL = style.li`
color:#ffff;
list-style: none;
margin:4px;
${table({display:'none'})}
`
const StyleLink = style(Link)`;
font-size:52px;
 color:#ffff;
 text-decoration: none;
 font-family: 'Island Moments', cursive;
 margin:20px;
 ${mobile({
   color:'#ffff',
   padding: '5px',
   fontSize:'28px',
   margin: '0px'
  })}
`
const Navigation = () => {

  const [open ,setOpen] = useState(false)
  return (
    <Container>
      <SandLink onClick={() => setOpen(!open)}>
                 <Line></Line>
                 <Line></Line>
                 <Line></Line>
                </SandLink>
        <Item>
        <StyleLink to='/'>Home</StyleLink>
        </Item>
        <Item>
        <StyleLink to='/portafolio'>Potafolio</StyleLink>
        </Item>
        <Item>
            <StyleLink to='/aboutme'>AboutMe</StyleLink></Item>
        <Item>
            <StyleLink to='/contact'>Contact</StyleLink>
        </Item>
        <MenuItems 
       onClick={() =>setOpen(false)}
       style={{left:open ? 
       '0px':'-50vw'}}>
         <ItemL ItemL>
           <StyleLink to="/">Home</StyleLink>
           </ItemL>
      <ItemL>
        <StyleLink  to="/portafolio">Projects</StyleLink>
        </ItemL>
      <ItemL>
        <StyleLink  to="/aboutme">AboutMe</StyleLink>
        </ItemL>
      <ItemL>
        <StyleLink  to="/contact">Contact</StyleLink>
      </ItemL>
        
      </MenuItems>
     
      
      
      
    </Container>
  )
}

export default Navigation

