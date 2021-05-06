import React from 'react';

export default function Sort({ selectSort }) {

    return(
        <div>
            <select onChange={e => selectSort(e.target.value)}>
                <option vaue='none' >None</option>
                <option vaue='name' >Name</option>
                <option vaue='weight' >Weight</option>
            </select>
        </div>
    )
    
}