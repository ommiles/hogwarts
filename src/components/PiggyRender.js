import React, { Component } from 'react';
import PiggyDetails from './PiggyDetails'

class PiggyRender extends Component {

    state = {
        details: false
    }
    
    cardReveal = (e) => {
        console.log(e.target)
        console.log(this.props.piggy)
        this.setState({
            details: !this.state.details
        })
    }

    renderImage = () => {
        let filename = require(`../hog-imgs/${this.props.piggy.name.toLowerCase().split(' ').join('_')}.jpg`)
        return filename
    }

    render() {
        console.log(this.props)
        return(
            <div>
                <h1>{this.props.piggy.name}</h1>
                <img  src={this.renderImage()} alt=""/>
                <p>{this.props.piggy.greased}</p>
                <a onClick={this.cardReveal}>Click Here to Learn More</a>
                {this.state.details ? <PiggyDetails piggy={this.props.piggy} /> : null}
            </div>
        )
    }
}

export default PiggyRender;