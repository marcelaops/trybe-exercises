import React from 'react';
import Pokemon from './Pokemon';
import './App.css';
import pokemons from './data';

function App() {
  return (
    <div>
      {pokemons.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.id} />)}
    </div>
  );
}

export default App;
