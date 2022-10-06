import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Select, Option } from '@material-tailwind/react';
import { filterHeroes, load20Heroes } from '../redux/heroes/heroesSlice';

const HeroForm = ({ publishers }) => {
  const [publisher, setPublisher] = useState('');
  const dispatch = useDispatch();
  const handleSelect = (filter) => {
    setPublisher(filter);
  };

  const handleSubmitPublisher = (e) => {
    e.preventDefault();
    dispatch(filterHeroes(publisher));
  };

  const handleDefault20 = () => {
    setPublisher('');
    dispatch(load20Heroes([]));
  };
  return (
    <div className="flex justify-center mb-12">
      <form className="flex flex-col gap-4" onSubmit={handleSubmitPublisher}>
        <Select
          name="publisher"
          label="Filter Heroes"
          onChange={handleSelect}
          value={publisher}
        >
          {publishers.map((publisher) => (
            <Option value={publisher} key={publisher}>
              {publisher}
            </Option>
          ))}
        </Select>

        <div className="hero-action self-center space-x-3">
          <button
            className="bg-herored uppercase rounded-md border border-herored px-3 py-1.5 text-white hover:text-herored hover:bg-white tracking-wider"
            type="button"
            onClick={handleDefault20}
          >
            Default 20
          </button>
          <button
            className="bg-heroblue uppercase rounded-md border border-heroblue px-3 py-1.5 text-white hover:text-heroblue hover:bg-white self-center tracking-wider"
            type="submit"
          >
            Filter
          </button>
        </div>
      </form>
    </div>
  );
};

HeroForm.propTypes = {
  publishers: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default HeroForm;
