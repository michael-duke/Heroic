import React from 'react';
import { useDispatch } from 'react-redux';
import { Tooltip } from '@material-tailwind/react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { getHeroes } from '../redux/heroes/heroesSlice';

const RefreshHeroes = () => {
  const dispatch = useDispatch();

  const handleRefresh = () => {
    dispatch(getHeroes());
  };

  return (
    <>
      <Tooltip
        content="Refresh Heroes"
      >
        <button
          onClick={handleRefresh}
          type="button"
          className="bg-gray-200 border border-gray-400 p-1 rounded-full fixed top-1/2 left-4 z-50 active:rotate-180"
        >
          <ArrowPathIcon className="w-6 h-6 stroke-heroblue stroke-2" />
        </button>
      </Tooltip>
    </>
  );
};

export default RefreshHeroes;
