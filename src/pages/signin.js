import React from 'react'
import SignIn from '../components/Signin/Signin';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer/Footer';
const SignInPage = () => {
  return (
    <>
      <ScrollToTop />
      <SignIn />
      <Footer />
    </>
  )
}

export default SignInPage