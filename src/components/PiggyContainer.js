import React, { Component } from 'react';
import PiggyRender from './PiggyRender.js';

class PiggyContainer extends Component {

  render() {
    return (
      <div id='piggy-container'>
        {this.props.hogs.map(piggy => (
          <PiggyRender key={piggy.name} piggy={piggy}/>
          ))}
      </div>
    );
  }
}

export default PiggyContainer;