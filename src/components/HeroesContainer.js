import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  allHeroes,
  allFilteredHeroes,
  getHeroes,
  allStatus,
  cleanupHero,
} from '../redux/heroes/heroesSlice';
import HeroList from './HeroList';
import Loading from './Loading';
import RefreshHeroes from './RefreshHeroes';
import HeroForm from './HeroForm';

const HeroesContainer = () => {
  const heroes = useSelector(allHeroes);
  const filteredHeroes = useSelector(allFilteredHeroes);
  const status = useSelector(allStatus);
  const dispatch = useDispatch();

  const cleanup = () => {
    if (heroes.length > 0 || filteredHeroes.length > 0) dispatch(cleanupHero());
    // prevents info leak
  };
  useEffect(() => {
    document.title = 'Heroic';
    if (heroes.length === 0) dispatch(getHeroes());
    cleanup();
  }, [heroes, filteredHeroes]);

  const getPublishers = () => [
    ...new Set(heroes.map(({ publisher }) => publisher)),
  ];

  const getHeroesToRender = () => (filteredHeroes.length === 0 ? heroes : filteredHeroes);
  return (
    <>
      <RefreshHeroes />
      {status === 'loading' ? (
        <Loading />
      ) : (
        <>
          <HeroForm publishers={getPublishers()} />
          <HeroList heroes={getHeroesToRender()} />
        </>
      )}
    </>
  );
};

export default HeroesContainer;
