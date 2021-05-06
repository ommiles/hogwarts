import React from 'react'
import HogTile from './HogTile'

export default function HogsList({ hogs, chooseHog, greaseFilter, sortType }) {

    const greasedState = greaseFilter === 'greased'
    const filteredHogs = greaseFilter === 'all' ? hogs : hogs.filter(hog => hog.greased === greasedState)

    const sortHogs = () => {
        switch (sortType) {
            case 'Weight': 
                return [...filteredHogs].sort((a, b) => a.weight - b.weight)
            case 'Name': 
                return [...filteredHogs].sort((a, b) => a.name < b.name ? -1 : 1)
            default: 
                return filteredHogs
        }
    }

    return (
        <div className='ui grid container' >
            {sortHogs().map(hog => <HogTile 
            key={hog.name + hog.weight} 
            hog={hog}
            chooseHog={chooseHog} />)}
        </div>
    )
}
