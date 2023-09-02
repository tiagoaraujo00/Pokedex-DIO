export const getPokemonTypes = (pokemon) => {
  return pokemon.types.map((pokemon) => `<li class="type ${pokemon.type.name}">${ pokemon.type.name }</li>`
  )
}

export const renderPokemon = (pokemon) => {
  const { front_default } = pokemon.sprites.other.dream_world
  const pokemonOl = document.querySelector('.pokemons');
  const pokemonItem = document.createElement('li');
  pokemonItem.classList.add(`pokemon`, `${pokemon.types[0].type.name}`);
  pokemonItem.innerHTML = `
    <span class="number">#${pokemon.order}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
      <ol class="types">
        ${getPokemonTypes(pokemon).join('')}
      </ol>
      <img
        src=${front_default}
        alt="${pokemon.name}"
      />
    </div>
  `;

  pokemonOl.appendChild(pokemonItem);
};
