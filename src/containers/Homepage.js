import React from 'react';
import Header from '../components/Header/Header';
import Featured from '../components/Featured/Featured';
import Cuisines from '../components/Cuisine/Cuisines';
import About from '../components/About/About';

const Homepage = () => {
  return (
    <section>
      <Header />
      <Featured />
      <Cuisines />
      <About />
    </section>
  );
};

export default Homepage;
