import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>
            ABOUT
          </SidebarLink>
          <SidebarLink to='team' onClick={toggle}>
            TEAM
          </SidebarLink>
          <SidebarLink to='services' onClick={toggle}>
            OUR SERVICES
          </SidebarLink>
          <SidebarLink to='work' onClick={toggle}>
            OUR WORK
          </SidebarLink>
          <SidebarLink to='contact' onClick={toggle}>
            CONTACT US
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/signin'>
            SIGN IN
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar