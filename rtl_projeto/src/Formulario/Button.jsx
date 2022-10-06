import React from "react";

export default class Button extends React.Component {
  render(){
    const { type, onClick } = this.props
    return(
      <div className="button-container">
        <button 
          type={type} 
          onClick={onClick} 
          className= 'button-form'
        >Concorrer!         
        </button>       
      </div>
    )
  }
}