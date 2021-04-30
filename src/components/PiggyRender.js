import React, { Component } from 'react';

// a functional component to render each hog name and picture in a tile
// render each hog name and picture in a tile

class PiggyRender extends Component {
    
    changeName = (name) => {
        let newName = name.replace(/\s/g, '_')
        return newName
    }

    render() {
        return(
            <div>
                {/* changeName(name) */}
                <h1>{this.props.name}</h1>
                <img src={require(`../hog-imgs/${this.changeName(this.props.name)}.jpg`)} alt=""/>
                <p>{this.props.greased}</p>
                <p>{this.props.weight}</p>
                <p>{this.props.specialty}</p>
            </div>
        )
    }
}

export default PiggyRender