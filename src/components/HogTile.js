import React, { Component } from 'react'

export default class HogTile extends Component {

    state = {
        show: true
    }

    render() {

        const { hog, chooseHog } = this.props
        const filename = hog.name.toLowerCase().split(' ').join('_')
        const pigImage = require(`../hog-imgs/${filename}.jpg`)
        
        return (
            <div className="ui pink card" style={this.state.show ? {} : {display: 'none'}} >
                <div className='image'>
                    <img onClick={() => chooseHog(hog)} src={pigImage} alt="a cute pig" />
                </div>
                <div className="content">
                    <div className="header">{hog.name}</div>
                </div>
                <div onClick={()=> this.setState({show: false})} className="ui bottom attached button">
                    Hide Hog
                </div>
            </div>
        )
    }
    
}
