import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroDetail from '../components/HeroDetail';

const MockHeroDetail = () => (
  <Router>
    <HeroDetail
      name="Spider-Man"
      slug="620-spider-man"
      image="https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/620-spider-man.jpg"
      powerstats={{
        intelligence: 90,
        strength: 55,
        speed: 67,
        durability: 75,
        power: 74,
        combat: 85,
      }}
      fullName="Peter Parker"
      aliases={[
        'Spiderman',
        'Bag-Man',
        'Black Marvel',
        'Captain Universe',
        'Dusk',
        'Green Hood',
        'Hornet',
        'Mad Dog 336',
        'Peter Palmer',
        'Prodigy',
        'Ricochet',
        'Scarlet Spider',
        'Spider-Boy',
        'Spider-Hulk',
        'Spider-Morphosis',
      ]}
      placeOfBirth="New York, New York"
      connections={{
        groupAffiliation:
          'Member of the Avengers, formerly member of Outlaws, alternate Fantastic Four',
        relatives:
          'Richard Parker (father, deceased), Mary Parker(mother, deceased), Benjamin Parker (uncle, deceased), May Parker (aunt), Mary Jane Watson-Parker (wife), May Parker (daughter, allegedly deceased)',
      }}
      work={{
        occupation: 'Freelance photographer, teacher',
        base: 'New York, New York',
      }}
    />
  </Router>
);

describe('HeroDetail tests', () => {
  const heroDetail = render(<MockHeroDetail />);
  test('HeroDetail component renders correctly', () => {
    expect(heroDetail).toMatchSnapshot();
  });

  test('HeroDetail has a heading Spider-Man ', () => {
    render(<MockHeroDetail />);
    expect(
      screen.getByRole('heading', { name: /spider-man/i }),
    ).toBeInTheDocument();
  });
  test('HeroDetail component has 6 powerstats', () => {
    render(<MockHeroDetail />);
    expect(
      screen.getAllByTestId('powerstats'),
    ).toHaveLength(6);
  });
});
