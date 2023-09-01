export const getPokemonTypes = (pokemon) => {
  return pokemon.types.map((pokemon) => `<li class="type">${ pokemon.type.name }</li>`
  )
}

export const renderPokemon = (pokemon) => {
  const pokemonOl = document.querySelector('.pokemons');
  const pokemonItem = document.createElement('li');
  pokemonItem.classList.add('pokemon');
  pokemonItem.innerHTML = `
    <span class="number">#${pokemon.order}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
      <ol class="types">
        ${getPokemonTypes(pokemon).join('')}
      </ol>
      <img
        src="https://i.pinimg.com/564x/cc/19/65/cc1965add483ed1d6791c68723784e55.jpg"
        alt="${pokemon.name}"
      />
    </div>
  `;

  pokemonOl.appendChild(pokemonItem);
};
