import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  allHeroes, allFilteredHeroes, getHeroes, allStatus,
} from '../redux/heroes/heroesSlice';
import { cleanupHero } from '../redux/currentHero/currentHeroSlice';
import HeroList from './HeroList';
import Loading from './Loading';
import RefreshHeroes from './RefreshHeroes';
import HeroForm from './HeroForm';

const HeroesContainer = () => {
  const heroes = useSelector(allHeroes);
  const filteredHeroes = useSelector(allFilteredHeroes);
  const status = useSelector(allStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'Heroic';
    if (heroes.length === 0) dispatch(getHeroes());
    dispatch(cleanupHero()); // prevents info leak
  }, [dispatch]);

  const getPublishers = () => [...new Set(heroes.map(({ publisher }) => publisher))];

  const getHeroesToRender = () => (filteredHeroes.length === 0 ? heroes : filteredHeroes);
  return (
    <>

      <RefreshHeroes />
      {status === 'loading' ? <Loading />

        : (
          <>
            <HeroForm publishers={getPublishers()} />
            <HeroList heroes={getHeroesToRender()} />
          </>
        )}
    </>
  );
};

export default HeroesContainer;
