import { renderPokemon, getPokemonTypes } from './pokemonRender.js';

const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10';
const urlArray = [];

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
    return response.json();
  })
  .then(data => {
    data.results.forEach(pokemon => {
      urlArray.push(pokemon.url);
    });
    const requests = urlArray.map(url => fetch(url));
    return Promise.all(requests);
  })
  .then(responses => {
    return Promise.all(responses.map(response => response.json()));
  })
  .then(details => {
    details.forEach(pokemon => {
      getPokemonTypes(pokemon)
      renderPokemon(pokemon);
    })
  })
  .catch(error => {
    console.error('Erro:', error);
  });
