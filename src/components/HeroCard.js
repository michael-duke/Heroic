import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const HeroCard = ({
  id, slug, name, image, firstAppearance, publisher,
}) => (
  <>
    <NavLink to={`/hero-details/${name}`}>
      <div data-mdb-ripple="true" data-mdb-ripple-color="light" className="hero-card flex hover:scale-105">
        <div className="rounded-lg shadow-lg bg-white max-w-sm flex flex-col justify-between">
          <div className="relative">
            <img className="rounded-t-lg" src={image} alt={`img-${slug}`} />
            <span className="absolute top-4 right-4 rounded p-2 bg-blue-gray-50">
              ID:
              {id}
            </span>
          </div>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
            <p className="text-gray-700 text-base mb-4">
              <span className="block mb-1">First Appearance:</span>
              {firstAppearance === '-' ? (
                <span className="text-blue-gray-400 p-1 bg-gray-300">
                  Not Found
                </span>
              ) : (
                firstAppearance
              )}
            </p>
          </div>
          <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
            {publisher || (
            <span className="text-red-400 p-1 bg-gray-100">No Publisher</span>
            )}
          </div>
        </div>
      </div>
    </NavLink>
  </>
);
HeroCard.propTypes = {
  id: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  firstAppearance: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
};
export default HeroCard;
