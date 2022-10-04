import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const HeroCard = ({
  slug, name, image, firstAppearance, publisher,
}) => (
  <>
    <div className="hero-card flex">
      <div className="rounded-lg shadow-lg bg-white max-w-sm flex flex-col justify-between">
        <div data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img className="rounded-t-lg" src={image} alt={`img-${slug}`} />
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
          <NavLink to={`/heroes/${slug}`}>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              know more
            </button>
          </NavLink>
        </div>
        <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
          {publisher || (
            <span className="text-red-400 p-1 bg-gray-100">No Publisher</span>
          )}
        </div>
      </div>
    </div>
  </>
);
HeroCard.propTypes = {
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  firstAppearance: PropTypes.string.isRequired,
  publisher: PropTypes.string,
};
HeroCard.defaultProps = {
  publisher: 'No publisher',
};
export default HeroCard;
