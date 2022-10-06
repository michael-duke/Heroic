import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import HeroesContainer from '../components/HeroesContainer';

test('HeroesContainer component renders correctly', async () => {
  const heroes = render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <HeroesContainer />
        </Router>
      </Provider>
    </React.StrictMode>,
  );
  expect(heroes).toMatchSnapshot();
});
