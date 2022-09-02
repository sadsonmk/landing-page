import React, { useState } from 'react';
import Video from '../../videos/play.mp4';
import { CarouselContainer, CaroBg, VideoBg, CaroContent, CaroH1, CaroP, CaroBtnWrapper, ArrowForward, ArrowRight } from './CarouselElements';
import { Button } from '../ButtonElements'

const Carousel = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <CarouselContainer>
      <CaroBg>
        <VideoBg loop autoPlay muted src={Video} type="video/mp4" />
      </CaroBg>
      <CaroContent>
        <CaroH1>Website Development at your door...</CaroH1>
        <CaroP>
          Sign up for a new account today!
        </CaroP>
        <CaroBtnWrapper>
          <Button prim='true' dark='true' to='signup' onMouseEnter={onHover} onMouseLeave={onHover} >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </CaroBtnWrapper>
      </CaroContent>
    </CarouselContainer>
  )
}

export default Carousel