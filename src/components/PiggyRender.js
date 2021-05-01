import React, { Component } from 'react';

// a functional component to render each hog name and picture in a tile
// render each hog name and picture in a tile

class PiggyRender extends Component {
    
    renderImage = () => {
        let pigImage = require(`../hog-imgs/${this.props.piggy.name.toLowerCase().split(' ').join('_')}.jpg`)
        return pigImage
    }

    cardReveal = (e) => {
        console.log(e.target)
        console.log(this.props.piggy)
    }

    render() {
        console.log(this.props)
        return(
            <div>
                {/* changeName(name) */}
                <h1>{this.props.piggy.name}</h1>
                <img  src={this.renderImage()} alt=""/>
                <p>{this.props.piggy.greased}</p>
                <p>My Weight: {this.props.piggy.weight}</p>
                <p>My Specialty: {this.props.piggy.specialty}</p>
                <a onClick={e => this.cardReveal(e)}>Click My Photo to Learn More</a>
            </div>
        )
    }
}

export default PiggyRender;