import React, { Component } from 'react';

// a functional component to render each hog name and picture in a tile
// render each hog name and picture in a tile

class PiggyRender extends Component {
    
    renderImage = () => {
        let pigImage = require(`../hog-imgs/${this.props.piggy.name.toLowerCase().split(' ').join('_')}.jpg`)
        return pigImage
    }

    render() {
        console.log(this)
        return(
            <div>
                {/* changeName(name) */}
                <h1>{this.props.piggy.name}</h1>
                <img  src={this.renderImage()} alt=""/>
                <p>{this.props.piggy.greased}</p>
                <p>{this.props.piggy.weight}</p>
                <p>{this.props.piggy.specialty}</p>
            </div>
        )
    }
}

export default PiggyRender;