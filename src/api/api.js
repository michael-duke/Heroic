const baseURL = 'https://superhero-search.p.rapidapi.com/api/';
const heroesURL = `${baseURL}heroes`;
const heroURL = `${baseURL}?hero=`;

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '453f81df11mshba8fa41bb162304p159da5jsn21e417a6277a',
    'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
  },
};

const api = {
  fetchHeroes: async () => {
    const response = await fetch(heroesURL, options);
    const data = await response.json();
    const heroes = data.map(
      ({
        id,
        name,
        slug,
        images: { lg: image },
        biography: { firstAppearance, publisher },
      }) => ({
        id,
        name,
        slug,
        image,
        firstAppearance,
        publisher,
      }),
    );
    return heroes;
  },
  fetchCurrentHero: async (name) => {
    const response = await fetch(heroURL + name, options);
    const hero = await response.json();
    return hero;
  },
};

export default api;
