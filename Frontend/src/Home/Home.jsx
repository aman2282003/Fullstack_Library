import React from 'react'
import Navbar from '../Components/Navbar';
import { Banner } from '../Components/Banner';
import { Avlbook } from '../Components/Avlbook';
import { Footer } from '../Components/Footer';
export const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Avlbook />
      <Footer />
    </>
  );
}
