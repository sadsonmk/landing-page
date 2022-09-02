import React from 'react';
import { animateScroll as scroll } from 'react-scroll/modules';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksWrapper, FooterLinksContainer, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>ABOUT US
              </FooterLinkTitle>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>PRODUCTS
              </FooterLinkTitle>
              <FooterLink to="/signin">Web Development</FooterLink>
              <FooterLink to="/signin">Graphic Design</FooterLink>
              <FooterLink to="/signin">Web Hosting</FooterLink>
              <FooterLink to="/signin">Online Lessons</FooterLink>
              <FooterLink to="/signin">Technical Assistance</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>PARTNERS
              </FooterLinkTitle>
              <FooterLink to="/signin">Youtube</FooterLink>
              <FooterLink to="/signin">W3Schools</FooterLink>
              <FooterLink to="/signin">The 7 Developers</FooterLink>
              <FooterLink to="/signin">Donhodzo</FooterLink>
              <FooterLink to="/signin">Bluehost</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>OTHERS
              </FooterLinkTitle>
              <FooterLink to="/signin">Materials</FooterLink>
              <FooterLink to="/signin">Videos</FooterLink>
              <FooterLink to="/signin">Opportunities</FooterLink>
              <FooterLink to="/signin">Other Resources</FooterLink>
              <FooterLink to="/signin">Learn</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              VIBRANCY
            </SocialLogo>
            <WebsiteRights>Vibrancy &copy; {new Date().getFullYear()} All rights reserved</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>

    </FooterContainer>
  )
}

export default Footer