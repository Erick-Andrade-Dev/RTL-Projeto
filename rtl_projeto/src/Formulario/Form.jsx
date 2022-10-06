import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Button from './Button';
import Input from './Input';
import Textarea from './Textarea';

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
      <form action="" className='container-form'>
        <h1 className='title-form'>Concorra a uma viagem para o Rio de Janeiro, coração do meu Brasil!!</h1>
        <label htmlFor="input-fullname" className='label-input'> 
          <p className='text-input'>Digite seu nome</p>
          <Input
            type ='text'
            name = 'fullName' 
            value = { fullName }
            onChange = { this.handleChange }
            id = 'input-fullname'
            placeholder = 'Digite seu nome completo'
          />
        </label>
        <label htmlFor='input-email' className='label-input'>
          <p className='text-input'>Digite seu e-mail</p>
          <Input
            type ='email'
            name = 'email' 
            value = { email }
            onChange = { this.handleChange }
            id = 'input-email'
            placeholder= 'Digite seu e-mail'
          />
        </label>
        <label htmlFor='input-password' className='label-input'>
          <p className='text-input'>Digite sua senha</p>
          <Input
            type ='password'
            name = 'password' 
            value = { password }
            onChange = { this.handleChange }
            id = 'input-password'
            placeholder = 'Digite sua senha'
          />
        </label>        
        <label htmlFor="input-checkbox" className='label-input'>
          <>Deseja receber emails para concorrer a outras viagens?</>
          <Input
          type ='checkbox'
          name = 'checkbox' 
          value = { checkbox }
          onChange = { this.handleChange }
          id = 'input-checkbox'
        />
        </label>    
        <label htmlFor="textarea" className='label-textarea'>
          <p>O que você faria se estivesse no Rio de Janeiro?</p>
          <Textarea 
          name="textarea"
          id="textarea"
          cols='50'
          rows='5'
          placeholder='Digite aqui!'
          className='textarea-form'
          />
        </label>
        <Button 
          className = 'button-form'
          type = 'button'
          onClick = {this.handleClick}          
        />   
        <Link to='/' className='link-form'>Voltar</Link>  
      </form>
    )
  }
}