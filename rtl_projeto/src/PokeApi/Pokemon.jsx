import React from "react";
import { Link  } from "react-router-dom";

export default class Pokemon extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      poke:'',
      name: '',
      type:'',
      image:'',
    }
    this.featchPokeApi = this.featchPokeApi.bind(this)   
  }
 

  componentDidMount() {
    this.featchPokeApi()
  }

  featchPokeApi(){    

    const API_URL = 'https://pokeapi.co/api/v2/pokemon/mewtwo';   
    fetch(API_URL)
      .then((response) => response.json())
      .then(({types, name : poke, sprites: { front_default }}) => this.setState({ 
        name: poke,        
        image: front_default,  
        type: types.map(item => item.type.name)      
      }));    
  }

  render(){
    const { name, type, image} = this.state
    return(
      <div className="container-pokeApi">         
        <h1 className="title-pokeapi">{`Nome: ${name}`}</h1>
        <h2 className="subtitle-pokeapi">{`Tipo: ${type}`}</h2>
        <img 
          className="img-pokeapi"
          src={image} 
          alt= 'pokemon' 
        />
        <Link 
         className="link-pokeapi"
         to='/'
        >
          Voltar
        </Link>
      </div>   
    )
  }
}