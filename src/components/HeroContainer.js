import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  currentHero,
  getHero,
  allStatus as currentHeroStatus,
} from '../redux/heroes/heroesSlice';
import HeroDetail from './HeroDetail';
import Loading from './Loading';

const HeroContainer = () => {
  const { hero } = useParams();
  const heroDetails = useSelector(currentHero);
  const dispatch = useDispatch();
  const status = useSelector(currentHeroStatus);

  const toTitleCase = (string) => string.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
  );

  useEffect(() => {
    document.title = `Heroic | ${toTitleCase(hero)}`;
    dispatch(getHero(hero));
  }, []);

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
  return <>{status === 'succeeded' ? renderHeroDetail() : <Loading />}</>;
};

export default HeroContainer;
