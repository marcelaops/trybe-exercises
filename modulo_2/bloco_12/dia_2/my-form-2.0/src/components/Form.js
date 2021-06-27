import React, { Component } from 'react'
import PersonalFieldset from './PersonalFieldset';
import ProfessionalFieldset from './ProfessionalFieldset';


export default class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      estado: '',
      tipoDeMoradia: '',
    }
  }

  handleChange({ target }) {
    const { name, value } = target

    if(name === )
    this.setState({
      [name]: value
    })
  }
  
  render() {
    const { nome, emai, cpf, endereco, esatdo, tipoDeMoradia } = this.state;

    return(
      <fieldset>
        <h2>Dados Pessoais</h2>
        <PersonalFieldset />
      </fieldset>
    );
  }
}
