import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Test for Navbar component', () => {
  test('Renders Navbar correctly', () => {
    const navbar = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(navbar).toMatchSnapshot();
  });

  test('Check for heading in the navbar \'Back\' is in the document', () => {
    const slug = '/heroes/212-michael-duke';
    render(
      <Router>
        <Navbar slug={slug} />
      </Router>,
    );
    expect(
      screen.getByRole('heading', { name: /back/i }),
    ).toBeInTheDocument();
  });
  test('Check for heading in the navbar \'Home\' is in the document', () => {
    const slug = '/';
    render(
      <Router>
        <Navbar slug={slug} />
      </Router>,
    );
    expect(
      screen.getByRole('heading', { name: /home/i }),
    ).toBeInTheDocument();
  });
});
