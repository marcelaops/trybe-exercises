import React, { Component } from 'react'

export default class PersonalData extends Component {
  render() {
    const { nameValue, emailValue, ageValue, handleChange } = this.props;

    return(
      <fieldset>
        <legend>Informações Pessoais</legend>

        <label htmlFor="name">
          Nome:
          <input 
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            value={nameValue}
          />
          { !nameValue.length ? ' -nome inválido- ' : ' -ok- '}

        </label>

      </fieldset>
    );
  }
}
