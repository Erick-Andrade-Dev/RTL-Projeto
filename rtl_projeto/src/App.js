import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Form from './Formulario/Form';
import Home from './Pages/Home';


//types.type.name // sprites.front_shiny
export default class App extends Component {    
  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' component= { Home } />
          <Route path='/form' component= { Form } />          
        </Switch>
      </div>
    )
  }
}

