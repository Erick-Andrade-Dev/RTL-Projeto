import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Button from './Button';
import Input from './Input';

export default class Form extends Component {
  constructor(props){
    super(props);

    this.state = {
      fullName:'',
      email:'',
      password:'',
      checkbox:false,
    }
  }

  handleChange = ({target}) => {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({
      [name]: value
    })
  }

  handleClick = () => {
    this.setState({
      fullName:'',
      email:'',
      password:'',
      checkbox:false,
    })
  }

  render(){
    const { fullName, email, password, checkbox } = this.state
    return(
      <form action="">
        <h1>Concorra a uma viagem para o Rio de Janeiro, coração do meu Brasil!!</h1>
        <label htmlFor="input-fullname"> 
          <p>Digite seu nome</p>
          <Input
            type ='text'
            name = 'fullName' 
            value = { fullName }
            onChange = { this.handleChange }
            id = 'input-fullname'
            placeholder = 'Digite seu nome completo'
          />
        </label>
        <label htmlFor='input-email'>
          <p>Digite seu e-mail</p>
          <Input
            type ='email'
            name = 'email' 
            value = { email }
            onChange = { this.handleChange }
            id = 'input-email'
            placeholder= 'Digite seu e-mail'
          />
        </label>
        <label htmlFor='input-password'>
          <p>Digite sua senha</p>
          <Input
            type ='password'
            name = 'password' 
            value = { password }
            onChange = { this.handleChange }
            id = 'input-password'
            placeholder = 'Digite sua senha'
          />
        </label>        
        <label htmlFor="input-checkbox">
          <>Deseja receber emails para concorrer a outras viagens?</>
          <Input
          type ='checkbox'
          name = 'checkbox' 
          value = { checkbox }
          onChange = { this.handleChange }
          id = 'input-checkbox'
        />
        </label>    
        <Button 
          type = 'button'
          onClick = {this.handleClick}          
        />   
        <Link to='/'>Voltar</Link>  
      </form>
    )
  }
}