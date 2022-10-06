import React from "react";

export default class Input extends React.Component {
  render(){
    const { type, name, value,  onChange, placeholder, id } = this.props
    return(
      <div className="input-container">
        <input 
          type={ type } 
          name= { name }
          value= { value }
          onChange= { onChange }
          placeholder = { placeholder }
          id = { id }
        />
      </div>
    )
  }
}