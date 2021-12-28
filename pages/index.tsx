import type { NextPage } from 'next'
import Head from 'next/head'
import Card from '../components/Card'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Footer from '../components/Footer'
import Image from 'next/image'
import HeroImage from '../public/images/hero-image.png'
import Spacer from '../components/Spacer'

const Home: NextPage = () => {
  return (
      <div className="bg-default-400 text-white font-poppins">
        <Nav/>
        <div className="max-w-5xl mx-auto">
          <Hero/>

          <Spacer/>

          <Section/>

          <Spacer/>
        </div>
        <Footer/>
      </div>
  )
}

export default Home
