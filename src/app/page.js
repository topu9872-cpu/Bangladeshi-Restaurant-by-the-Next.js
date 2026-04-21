import FoodsOrderCards from '@/Components/FoodsOrder/FoodsOrderCards';
import Footer from '@/Components/FooterSection/Footer';
import Hero from '@/Components/HeroSection/Hero';
import ScrollCards from '@/Components/ScrollCards/ScrollCards';

import React from 'react';

const Mainpage = () => {
  return (
    <div>
      <Hero/>
      <ScrollCards/>
      <FoodsOrderCards/>
      <Footer/>
    </div>
  );
};

export default Mainpage;