import React, { Component } from 'react'
import HogsList from './HogsList'
import HogDetail from './HogDetail'
import FilterSort from './FilterSort'
import hogs from '../porkers_data'

export default class HogsContainer extends Component {

    state = {
        greaseFilter: 'all',
        sortType: 'none',
        chosenHog: null
    }

    chooseHog = chosenHog => {
        this.setState({ chosenHog })
    }

    closeHog = () => {
        this.setState({ chosenHog: null })
    }

    selectFilter = greaseFilter => {
        this.setState({ greaseFilter })
    }

    selectSort = sortType => {
        this.setState({ sortType })
    }

    render() {
        return (
            <div>
                <h1>Hello! This is Hogs Container!</h1>
                <FilterSort selectFilter={this.selectFilter} selectSort={this.selectSort} />
                {this.state.chosenHog ? <HogDetail hog={this.state.chosenHog} closeHog={this.closeHog} /> : <HogsList 
                hogs={hogs}
                chooseHog={this.chooseHog}
                greaseFilter={this.state.greaseFilter}
                sortType={this.state.sortType} />}
            </div>
        )
    }
    
}
