// 1.Pokemon : como o próprio nome diz, esse componente representa um pokemon. Esse componente recebe como entrada um objeto que contém informações referentes a um pokemon específico. Esse componente precisa retornar as seguintes informações obrigatórias para serem mostradas para quem usar a aplicação, essas informações devem ser validadas utilizando PropTypes:

import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component{
    render() {
        const { name, type, averageWeight, image } = this.props.pokemon;
        // console.log(this.props.pokemon);
        return ( 
            <div className='pokemon'>
                <p>{name}</p>
                <p>{type}</p>
                <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p> 
                <img src={image} alt='Figura do pokemon'/>
            </div> 
        );
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
            value: PropTypes.number,
            measurementUnit: PropTypes.string,
        }),
        image: PropTypes.string
    }).isRequired
}

export default Pokemon;