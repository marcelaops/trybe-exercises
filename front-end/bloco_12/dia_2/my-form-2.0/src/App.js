import React, { Component } from 'react'
import Form from './components/Form';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  state: '',
  typeHousing: '',
}

export default class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)
    this.state = INITIAL_STATE;
  }

  
  handleError() {
    const { name, email, cpf, address, state, typeHousing } = this.state;
    
    const errorCases = [
      !name.length,
      !email.match(/^\S+@\S+$/i),
      !cpf.length,
      !address.length,
      !state,
      !typeHousing,
    ];
    
    const formularioPreenchido = errorCases.every((error) => error !== true);
    
    this.setState({
      formularioComErros: !formularioPreenchido,
    });
  }
  
  handleChange({ target }) {
    let { name, value } = target

    if(name === 'name') value = value.toUpperCase();

    this.setState({
      [name]: value
    })
  }

  // onBlurChange({ target }) {
  //   let { value } = target;
  //   const checkValue = value.match(/^\d/);
  // }


  render() {
    return (
      <main>
        <Form />

        {/* <FormError /> */}

        {/* <FormDataDisplay /> */}
      </main>
    );
  }
}

