import React from 'react';
import PropTypes from 'prop-types';
import HeroCard from './HeroCard';

const HeroList = ({ heroes }) => (
  <div className="Hero-Grid grid gap-4">
    {heroes.map(
      ({
        id, slug, name, image, firstAppearance, publisher,
      }) => (
        <HeroCard
          key={id}
          id={id}
          name={name}
          image={image}
          slug={slug}
          firstAppearance={firstAppearance}
          publisher={publisher}
        />
      ),
    )}
  </div>
);

HeroList.propTypes = {
  heroes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      slug: PropTypes.string,
      image: PropTypes.string,
      firstAppearance: PropTypes.string,
      publisher: PropTypes.string,
    }),
  ).isRequired,
};
export default HeroList;
