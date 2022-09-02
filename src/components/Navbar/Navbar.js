import React, { useState } from 'react';
import { useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll/modules';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>VIBRANCY DEVELOPERS</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>ABOUT</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='team'>TEAM</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='services'>OUR SERVICES</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='work'>OUR WORK</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='contact'>CONTACT</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='signin'>
                SIGN IN
              </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar