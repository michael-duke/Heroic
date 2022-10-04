import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  currentHero, getHero, cleanupHero, currentHeroStatus,
} from '../redux/currentHero/currentHeroSlice';
import Loading from './Loading';

const HeroDetails = ({ hero }) => {
  const heroDetails = useSelector(currentHero);
  const dispatch = useDispatch();
  const status = useSelector(currentHeroStatus);

  const toTitleCase = (string) => string.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

  useEffect(() => {
    document.title = `Heroic | ${toTitleCase(hero.replace('-', ' '))}`;
    dispatch(cleanupHero({})); // prevents info leak
    dispatch(getHero(hero));
  }, [hero]);

  let heroInfo;
  if (Object.keys(heroDetails).length !== 0) {
    const {
      name, slug, images: { lg: image }, powerstats, biography, connections, work,
    } = heroDetails;

    const statColors = {
      intelligence: 'blue-500',
      strength: 'blue-gray-500',
      speed: 'amber-300',
      durability: 'green-500',
      power: 'red-500',
      combat: 'purple-500',
    };

    const highestStat = (object) => {
      const max = Math.max(...Object.values(object));
      return Object.keys(object).filter((key) => object[key] === max)[0];
    };

    heroInfo = (
      <div className="flex sm:flex-col gap-4 w-fit mx-auto">
        <img src={image} alt={`img-${slug}`} />
        <div className="hero-info w-96 text-left">
          <h2 className={`text-3xl underline text-${statColors[highestStat(powerstats)]}`}>{name}</h2>
          <h3 className="text-2xl">PowerStats:</h3>
          <div className="sm:inline-flex gap-3 flex-wrap">
            {Object.keys(powerstats).map((stat) => (
              <h4 className={`bg-${statColors[stat]} rounded p-0.5 text-white w-fit mb-2`} key={stat}>
                {stat}
                <span className="ml-3">{powerstats[`${stat}`]}</span>
              </h4>

            ))}
          </div>
          <div className="biography">
            <h3 className="text-2xl">Bio:</h3>
            <h4 className="text-xl capitalize underline">Fullname:</h4>
            <p>{biography.fullName}</p>
            <h4 className="text-xl capitalize underline">Aliases:</h4>
            <div className="inline-flex gap-2 flex-wrap">
              {biography.aliases.map((alias) => <span className="bg-gray-500 text-white p-0.5" key={alias}>{alias}</span>)}
            </div>
            <h4 className="text-xl capitalize underline">Place of Birth:</h4>
            <p>{biography.placeofBirth}</p>
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
  }
  return (
    <>

      {status === 'succeeded'
        ? (
          heroInfo
        ) : <Loading /> }

    </>
  );
};

HeroDetails.propTypes = {
  hero: PropTypes.string.isRequired,
};
export default HeroDetails;
