import React from 'react'
import HogTile from './HogTile'

export default function HogsList({ hogs }) {

    return (
        <div className='ui grid container' >
            <h1>This is the HogsList!</h1>
            {hogs.map(hog => <HogTile key={hog.name + hog.weight} hog={hog} />)}
        </div>
    )
}
