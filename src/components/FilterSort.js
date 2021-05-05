import React from 'react'

const FilterSort = (props) => {

    const handleChange = (e) => {
        props.someFunc(e.target.value)
    }

    return (
        <div>
            <div>
                <input type="radio" name="greased" id="greased" value="greased" onChange={handleChange}/>
                <label htmlFor="greased">Greased</label>
                <input type="radio" name="greased" id="ungreased" value="ungreased" onChange={handleChange}/>
                <label htmlFor="ungreased">Ungreased</label>
                <input type="radio" name="greased" id="all" value="all" onChange={handleChange}/>
                <label htmlFor="all">All</label>
            </div>
        </div>
    )
}

export default FilterSort;
