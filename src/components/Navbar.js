import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import HeroicLogo from '../assets/heroic-logo.png';

const Navbar = ({ slug }) => (
  <nav className="fixed-top w-1/2 mx-auto sm:w-full flex justify-between items-center border px-4 sl:px-2 border-gray-500 mb-8 bg-white">
    <NavLink end to="/">
      <h2 className="uppercase text-4xl sl:text-3xl tracking-widest">
        {slug.includes('hero-details') ? 'back' : 'home'}
      </h2>
    </NavLink>
    <div>
      <img className="w-64 sl:w-52" src={HeroicLogo} alt="heroic-logo" />
    </div>
  </nav>
);

Navbar.propTypes = {
  slug: PropTypes.string,
};

Navbar.defaultProps = {
  slug: '',
};

export default Navbar;
