import React from 'react';
import style from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel'
import {mobile} from '../compo/Responsive'
const Container = style.div`
width:100%;
`

const Image = style.img`
width: auto;
border-radius: 20px 20px;
${mobile({width: '400px'})}
`

const Slider = () => {
  return (
    <Container>
        <Carousel infiniteLoop autoPlay>
        <Image src='https://finalappchinchorro0029dd132ee54bd4b414de81bee3b82034-dev.s3.amazonaws.com/public/images/app-store-beers+2.png' alt='pict' />
        <Image src='https://finalappchinchorro0029dd132ee54bd4b414de81bee3b82034-dev.s3.amazonaws.com/public/images/elchinchorro-picture.png' alt='pict' />
        <Image src='https://finalappchinchorro0029dd132ee54bd4b414de81bee3b82034-dev.s3.amazonaws.com/public/images/pets-pictures.png' alt='pict' />
    <Image src='https://finalappchinchorro0029dd132ee54bd4b414de81bee3b82034-dev.s3.amazonaws.com/public/images/app-movie.png' alt='pict'/>
    <Image src='https://finalappchinchorro0029dd132ee54bd4b414de81bee3b82034-dev.s3.amazonaws.com/public/images/jewlery.png' alt='pict'/>
       </Carousel>
    </Container>
  )
}

export default Slider
