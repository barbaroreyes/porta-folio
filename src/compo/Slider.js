import React from 'react';
import style from 'styled-components';
import {mobile} from '../compo/Responsive'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel'

const Container = style.div`
width:100%;


`
const BoxImage = style.div`
 width:80%;
 height:100vh;
border-radius: 20px 20px;
`
const Image = style.img`
width: auto;
border-radius: 20px 20px;
`

const Slider = () => {
  return (
    <Container>
        <Carousel infiniteLoop autoPlay>
    
        
          <Image src='https://images.unsplash.com/photo-1542634093-e0198d4d1e46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt='pict' />
          <Image src='https://images.unsplash.com/photo-1438557068880-c5f474830377?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80' alt='pict' />
          <Image src='https://images.unsplash.com/photo-1625923359032-41feba792010?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1458&q=80' alt='pict' />
       
             
        
     
     </Carousel>
    </Container>
  )
}

export default Slider
