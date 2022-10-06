import React from 'react';
import ProptTypes from 'prop-types';
import HeroContainer from '../components/HeroContainer';

const Details = ({ slug }) => {
  const [,, heroSlug] = slug.split('/'); // prop => /heroes/149-captain-america

  const name = heroSlug.slice(heroSlug.indexOf('-') + 1);

  return (
    <>
      <div>
        <HeroContainer hero={name} />
      </div>
    </>
  );
};

Details.propTypes = {
  slug: ProptTypes.string.isRequired,
};
export default Details;
