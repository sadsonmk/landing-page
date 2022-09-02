// eslint-disable-next-line
import React, { useState } from 'react';
import Carousel from '../components/Carousel/Carousel';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/DataSection/Data';
import DataSection from '../components/DataSection/DataSection';
import Footer from '../components/Footer/Footer';

import Navbar from '../components/Navbar/Navbar'
import Services from '../components/Services/Services';
import Sidebar from '../components/Sidebar/Sidebar'

const Home = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Carousel />
      <DataSection {...homeObjOne} />
      <DataSection {...homeObjTwo} />
      <Services />
      <DataSection {...homeObjThree} />
      <Footer />

    </>
  )
}

export default Home