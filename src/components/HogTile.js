import React from 'react'

export default function HogTile({ hog }) {

    const filename = hog.name.toLowerCase().split(' ').join('_')
    const pigImage = require(`../hog-imgs/${filename}.jpg`)
    return (
        <div className='ui eight wide column pigTile' >
            <h3>{hog.name}</h3>
            <img src={pigImage} className='' />
        </div>
    )
}
