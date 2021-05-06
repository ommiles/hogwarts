import React, { Component } from 'react'
import HogsList from './HogsList'
import HogDetail from './HogDetail'
import FilterSort from './FilterSort'

export default class HogsContainer extends Component {
    render() {
        return (
            <div>
                <h1>Hello! This is Hogs Container!</h1>
                <FilterSort />
                <HogsList />
                <HogDetail />
            </div>
        )
    }
}
