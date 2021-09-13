import React, { Component } from 'react'
import PersonalFieldset from './PersonalFieldset';
import ProfessionalFieldset from './ProfessionalFieldset';


export default class Form extends Component {
  render() {
    const { name, email, cpf, address, state, typeHousing, formularioComErros } = this.state;

    return(
      <div>
        <form>
        <PersonalFieldset 
          nameValue = { name }
          emailValue= { email }
          cpfValue={ cpf }
          adressValue={ address }
          stateValue={ state }
          typeHousingValue={ typeHousing }
          handleChange={ this.handleChange }
        />

        {/* <ProfessionalFieldset /> */}

        </form>

        { formularioComErros
          ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
          : <span style={ { color: 'green' } }>Todos campos foram preenchidos</span> }

      </div>
    );
  }
}
