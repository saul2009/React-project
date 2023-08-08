import React from 'react';

import Header from './Components/Header'
import Hero from './Components/Hero';
import About from './Components/About';
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className='max-w-[1920px] mx-auto overflow-hidden bg-white'>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;