import React, { Component } from 'react'

export default class PersonalData extends Component {
  render() {
    const { nameValue, emailValue, cpfValue, addressValue, stateValue, typeHousingValue, handleChange } = this.props;

    return(
      <fieldset>
        <legend>Informações Pessoais</legend>

        <label htmlFor="name">
          Nome:
          <input 
            id="name"
            name="name"
            type="text"
            onChange={ handleChange }
            value={ nameValue }
          />
          { !nameValue.length ? ' -nome inválido- ' : ' -ok- '}
        </label>

        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            type="email"
            onChange={ handleChange }
            value={ emailValue }
          />
          { !emailValue.match(/^\S+@\S+$/i)
            ? ' -email inválido- ' : ' -ok- ' }
        </label>


      </fieldset>
    );
  }
}
