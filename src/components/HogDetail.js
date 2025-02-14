import React from 'react'

export default function HogDetail({ hog, closeHog }) {
    
    const { name, specialty, greased, weight, 'highest medal achieved': medal} = hog
    const filename = name.toLowerCase().split(' ').join('_')
    const pigImage = require(`../hog-imgs/${filename}.jpg`)

    return (
        <div className="ui pink centered card">
            <div className='image'>
                <img src={pigImage} alt="a cute pig" />
            </div>
            <div className="content">
                <div className="header">{name}</div>
                <div className="meta">
                    <p>Weight {weight}</p>
                    <p>{greased ? 'GREASY PIGGY' : 'Squeaky clean'}</p>
                    <p>Highest achievement: {medal}</p>
                </div>
                <div className="description">{specialty}</div>
            </div>
            <div onClick={ closeHog } className="ui bottom attached button">Back</div>
        </div>
    )
    
}