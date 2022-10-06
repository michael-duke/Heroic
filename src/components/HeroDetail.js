import React from 'react';
import PropTypes from 'prop-types';

const HeroDetail = ({
  name,
  slug,
  image,
  powerstats,
  fullName,
  aliases,
  placeOfBirth,
  connections,
  work,
}) => {
  const statColors = {
    intelligence: 'blue-500',
    strength: 'blue-gray-500',
    speed: 'amber-800',
    durability: 'green-500',
    power: 'red-500',
    combat: 'purple-500',
  };

  const highestStat = (object) => {
    const max = Math.max(...Object.values(object));
    return Object.keys(object).filter((key) => object[key] === max)[0];
  };

  return (
    <div className="flex sm:flex-col gap-4 w-fit mx-auto">
      <img src={image} alt={`img-${slug}`} />
      <div className="hero-info w-96 text-left">
        <h2
          className={`text-3xl underline text-${
            statColors[highestStat(powerstats)]
          }`}
        >
          {name}
        </h2>
        <h3 className="text-2xl">PowerStats:</h3>
        <div className="sm:inline-flex gap-3 flex-wrap">
          {Object.keys(powerstats).map((stat) => (
            <h4
              data-testid="powerstats"
              className={`bg-${statColors[stat]} rounded p-0.5 text-white w-fit mb-2`}
              key={stat}
            >
              {stat}
              <span className="ml-3">{powerstats[`${stat}`]}</span>
            </h4>
          ))}
        </div>
        <div className="biography">
          <h3 className="text-2xl">Bio:</h3>
          <h4 className="text-xl capitalize underline">Fullname:</h4>
          <p>{fullName}</p>
          <h4 className="text-xl capitalize underline">Aliases:</h4>
          <div className="inline-flex gap-2 flex-wrap">
            {aliases.map((alias) => (
              <span className="bg-gray-500 text-white p-0.5" key={alias}>
                {alias}
              </span>
            ))}
          </div>
          <h4 className="text-xl capitalize underline">Place of Birth:</h4>
          <p>{placeOfBirth}</p>
        </div>
        <div className="connections">
          <h3 className="text-2xl">Connections:</h3>
          <h4 className="text-xl capitalize underline">affiliation:</h4>
          <p>{connections.groupAffiliation}</p>
          <h4 className="text-xl capitalize underline">relatives</h4>
          <p>{connections.relatives}</p>
        </div>
        <div className="work">
          <h3 className="text-2xl">Work:</h3>
          <h4 className="text-xl capitalize underline">occupation:</h4>
          <p>{work.ocuupation}</p>
          <h4 className="text-xl capitalize underline">base</h4>
          <p>{work.base}</p>
        </div>
      </div>
    </div>
  );
};

HeroDetail.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  powerstats: PropTypes.shape({
    intelligence: PropTypes.number,
    strength: PropTypes.number,
    speed: PropTypes.number,
    durability: PropTypes.number,
    power: PropTypes.number,
    combat: PropTypes.number,
  }).isRequired,
  fullName: PropTypes.string.isRequired,
  aliases: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeOfBirth: PropTypes.string.isRequired,
  connections: PropTypes.shape({
    groupAffiliation: PropTypes.string,
    relatives: PropTypes.string,
  }).isRequired,
  work: PropTypes.shape({
    ocuupation: PropTypes.string,
    base: PropTypes.string,
  }).isRequired,
};

export default HeroDetail;
