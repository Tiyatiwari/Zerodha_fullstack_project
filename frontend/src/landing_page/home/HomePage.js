import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing'; // Fixed capitalization
import Education from './Education';
import OpenAccount from '../OpenAccount';

function Home() {
  return ( 
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </> 
  );
}

export default Home;