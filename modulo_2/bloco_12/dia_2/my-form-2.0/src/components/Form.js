import React, { Component } from 'react'
import PersonalFieldset from './PersonalFieldset';
import ProfessionalFieldset from './ProfessionalFieldset';


export default class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      name: '',
      email: '',
      cpf: '',
      adress: '',
      state: '',
      typeHousing: '',
    }
  }

  handleChange({ target }) {
    const { name, value } = target

    if(name === 'name') 
    this.setState({
      [name]: value
    })
  }
  
  render() {
    const { name, emai, cpf, adress, state, typeHousing } = this.state;

    return(
      <div>
        <form>
        <PersonalFieldset 
          nameValue = { name }
        />

        <ProfessionalFieldset />

        </form>
      </div>
    );
  }
}
