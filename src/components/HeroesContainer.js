import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allHeroes, getHeroes } from '../redux/heroes/heroeSlice';
import HeroList from './HeroList';

const HeroesContainer = () => {
  const heroes = useSelector(allHeroes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (heroes.length === 0) dispatch(getHeroes());
  }, []);

  return <HeroList heroes={heroes} />;
};

export default HeroesContainer;
