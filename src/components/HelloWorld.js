import React, { Component } from "react";
import PiggyRender from './PiggyRender.js';

// filter the hogs that are greased
// sort the hogs based on name
// sort the hogs based on weight

// handleClick function for PiggyRender
// BONUS: handeDelete function from PiggyRender

class HelloWorld extends Component {

  state = {
        
  }
  
  render() {
    return (
      <div id="piggy-container">
        {this.props.hogs.map(piggy => (
          <PiggyRender key={piggy.name} piggy={piggy}/>
          ))}
      </div>
    );
  }
}

export default HelloWorld;