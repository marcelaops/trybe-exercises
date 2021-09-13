import React from 'react';
// import Pokemon from './Pokemon';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className='App'>
      <h2 className='titulo'>Pokedex</h2>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
