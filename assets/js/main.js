const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10'


const pokemonData = (pokemon) => {
  return `
    <li class="pokemon">
      <span class="number">#001</span>
      <span class="name">${pokemon.name}</span>
      <div class="detail">
        <ol class="types">
          <li class="type">
            grass
          </li>
          <li class="type">
            poison
          </li>
        </ol>
        <img
          src="https://i.pinimg.com/564x/cc/19/65/cc1965add483ed1d6791c68723784e55.jpg"
          alt="${pokemon.name}"
        />
      </div>
    </li>`;
};

const pokemonOl = document.querySelector('.pokemons')

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
    return response.json();
  })
  .then(data => {
    data.results.map((pokemon) => {
      console.log(pokemon);
      return pokemonOl.innerHTML += pokemonData(pokemon)
    })
  })
  .catch(error => {
    console.error('Erro:', error);
  })
  .finally(() => {
    console.log('Requisição concluída!');
  });
