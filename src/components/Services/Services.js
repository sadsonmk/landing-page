import React from 'react'
import Icon1 from '../../images/img-1.png'
import Icon2 from '../../images/img-1.png'
import Icon3 from '../../images/img-1.png'
import { ServicesContainer, ServicesCard, ServicesH2, ServicesH1, ServicesWrapper, ServicesIcon, ServicesP } from './ServicesElements'
const Services = () => {
  return (
    <ServicesContainer>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Web Development</ServicesH2>
          <ServicesP>We can build a website that communicates your business to your target customers</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Graphic Design</ServicesH2>
          <ServicesP>Best Designs from our talented graphic designers who follow latest Industry standards.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Web Hosting</ServicesH2>
          <ServicesP>We help you to get your website go live, and we can also help you maintain it, try us.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services