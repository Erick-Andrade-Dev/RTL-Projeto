import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render(){
    return(
      <div className="container-home">
        <Link to='/form'>Concorra a uma viagem ao RJ!</Link>
        <Link to='/pokeapi'>Se voce é um jogador de Pokemon Go, olha quem vôce irá encontrar no RJ!</Link>
      </div>
    )
  }
}