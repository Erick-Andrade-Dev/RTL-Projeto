import React, { Component } from "react";

export default class Textarea extends Component {
  render() {
    const { name , id , cols , rows, placeholder, className } = this.props
    return(
      <div>
        <textarea 
          className={className}
          name={name} 
          id={id} 
          cols={cols} 
          rows={rows} 
          placeholder={placeholder}
        >          
        </textarea>
      </div>
    )
  }
}