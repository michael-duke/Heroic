import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allHeroes, getHeroes, allStatus } from '../redux/heroes/heroeSlice';
import { cleanupHero } from '../redux/currentHero/currentHeroSlice';
import HeroList from './HeroList';
import Loading from './Loading';
import RefreshHeroes from './RefreshHeroes';

const HeroesContainer = () => {
  const heroes = useSelector(allHeroes);
  const status = useSelector(allStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'Heroic';
    if (heroes.length === 0) dispatch(getHeroes());
    dispatch(cleanupHero({})); // prevents info leak
  }, [dispatch]);

  return (
    <>
      <RefreshHeroes />
      {status === 'loading' ? <Loading />

        : <HeroList heroes={heroes} />}
    </>
  );
};

export default HeroesContainer;
