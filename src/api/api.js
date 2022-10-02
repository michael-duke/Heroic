const heroesURL = 'https://superhero-search.p.rapidapi.com/api/heroes';

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
    const heroes = await response.json();
    console.log(heroes);
  },
};

export default api;
