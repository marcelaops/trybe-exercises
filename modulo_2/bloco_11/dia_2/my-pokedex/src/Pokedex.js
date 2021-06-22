// 2.Pokedex : esse componente representa a enciclopédia de pokemons. Esse componente recebe como entrada uma lista de pokemons para serem mostrados na tela. Para cada um desses pokemons recebidos, Pokedex chama o componente Pokemon .

import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component{
    render() {
        return (
            <div className='pokedex'>
                {this.props.pokemons.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.id} />)}
            </div>
        )
    }
}

export default Pokedex;