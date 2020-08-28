import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

import RoomsContainer from '../components/RoomsContainer';

const Rooms = () => {
  return (
    <React.Fragment>
    <Hero hero="roomsHero">
      <Banner title="our room">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </Banner>
    </Hero>
    <RoomsContainer />
      <Footer />
    </React.Fragment>

  );
};

export default Rooms;
