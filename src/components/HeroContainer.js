import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  currentHero,
  getHero,
  currentHeroStatus,
} from '../redux/currentHero/currentHeroSlice';
import HeroDetail from './HeroDetail';
import Loading from './Loading';

const HeroContainer = ({ hero }) => {
  const heroDetails = useSelector(currentHero);
  const dispatch = useDispatch();
  const status = useSelector(currentHeroStatus);

  const toTitleCase = (string) => string.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
  );

  useEffect(() => {
    document.title = `Heroic | ${toTitleCase(hero.replace('-', ' '))}`;
    dispatch(getHero(hero));
  }, [hero]);

  const renderHeroDetail = () => {
    const {
      name,
      slug,
      images: { lg: image },
      powerstats,
      biography: { fullName, aliases, placeOfBirth },
      connections,
      work,
    } = heroDetails;

    return (
      <HeroDetail
        name={name}
        slug={slug}
        image={image}
        powerstats={powerstats}
        fullName={fullName}
        aliases={aliases}
        placeOfBirth={placeOfBirth}
        connections={connections}
        work={work}
      />
    );
  };
  return (
    <>
      {status === 'succeeded' ? renderHeroDetail() : (
        <Loading />
      )}
    </>
  );
};

HeroContainer.propTypes = {
  hero: PropTypes.string.isRequired,
};

export default HeroContainer;
