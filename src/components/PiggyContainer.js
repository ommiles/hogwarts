import React, { Component } from 'react';
import PiggyRender from './PiggyRender.js';
import FilterSort from './FilterSort';

class PiggyContainer extends Component {

  state={
    greaseFilter: 'all',
  }

  someFunc = (val) => {
    this.setState({
      greaseFilter: val
    })
  }

  allPiggies = () => {
    const greasedBoolean = this.state.greaseFilter === 'greased'
    return this.state.greaseFilter === 'all' ? this.props.hogs : this.props.hogs.filter(hog => hog.greased === greasedBoolean)
  }

  render() {
    return (
      <div id='piggy-container'>
        <div className='filterWrapper'>
          <FilterSort someFunc={this.someFunc} />
        </div>
        {this.allPiggies().map(piggy => (
          <PiggyRender key={piggy.name} piggy={piggy}/>
        ))}
      </div>
    );
  }
}

export default PiggyContainer;