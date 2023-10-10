import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Client from '../Components/Client'
import Manage from '../Components/Manage'
import Years from '../Components/Years'
import Count from '../Components/Count'
import Design from '../Components/Design'
import Review from '../Components/Review'
import Caring from '../Components/Caring'
import Demo from '../Components/Demo'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Client/>
    <Manage/>
    <Years/>
    <Count/>
    <Design/>
    <Review/>
    <Caring/>
    <Demo/>
    <Footer/>
    </>
  )
}

export default Home