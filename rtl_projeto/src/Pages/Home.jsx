import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render(){
    return(
      <div className="container-home">
        <h1 className="title-homepage">Deseja concorrer a uma viagem dos sonhos?</h1>
        <section className="home-section" data-testid = 'carrossel'> 
          <div className="container-image"> 
            <div className="galery-wrap">
              <div className="galery"> 
                  <img src="https://source.unsplash.com/random/753x350/?riodejaneiro" alt="riodejaneiro" className="item"/>   
                  <img src="https://source.unsplash.com/random/753x350/?saquarema" alt="riodejaneiro" className="item"/>
                  <img src="https://source.unsplash.com/random/753x350/?cristoredentor" alt="riodejaneiro" className="item"/>
                  <img src="https://source.unsplash.com/random/753x350/?bondinho" alt="riodejaneiro" className="item"/>
                  <img src="https://source.unsplash.com/random/753x350/?pãodeaçucar" alt="riodejaneiro" className="item"/>
                  <img src="https://source.unsplash.com/random/753x350/?rocinha" alt="riodejaneiro" className="item"/>
                  <img src="https://source.unsplash.com/random/753x350/?praia" alt="riodejaneiro" className="item"/>
                  <img src="https://source.unsplash.com/random/753x350/?lapa" alt="riodejaneiro" className="item"/>
                  <img src="https://source.unsplash.com/random/753x350/?escadaria" alt="riodejaneiro" className="item"/>
                  <img src="https://source.unsplash.com/random/753x350/?leblon" alt="riodejaneiro" className="item"/>
                  <img src="https://source.unsplash.com/random/753x350/?ipanema" alt="riodejaneiro" className="item"/>
                  <img src="https://source.unsplash.com/random/753x350/?copacabana" alt="riodejaneiro" className="item"/> 
              </div>
            </div>
          </div>
        </section>  
        <div className="container-links-home">
        <Link 
          to='/form' 
          className="link-home-viagem"
        >
          Concorra a uma viagem ao RJ!
        </Link>
        <Link 
          to='/pokeapi' 
          className="link-home-pokeapi"
        >
          Se voce é um jogador de Pokemon Go, olha quem vôce irá encontrar no RJ!
        </Link>  
        </div>              
       
      </div>
    )
  }
}