import React from "react";

export default class NotFound extends React.Component {
  render(){
    return(
      <div>
        <h1 className="error">Error NotFound 404 </h1>
        <img 
          className="image-notfound-404"
          src="https://pm1.narvii.com/6241/c4daa592fe4db39e706f3767e23dd73494f0f624_hq.jpg"
          alt="notFound" />
      </div>
    )
  }
}