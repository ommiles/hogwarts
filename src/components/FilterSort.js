import React from 'react'
import Filter from './Filter'
import Sort from './Sort'

export default function FilterSort({ selectFilter, selectSort }) {

    return (
        <div>
            <h2>FilterSort</h2>
            <Filter selectFilter={selectFilter} />
            <Sort selectSort={selectSort} />
        </div>
    )
    
}
