import React from 'react';

const PiggyDetails = ({piggy}) => {
    console.log(piggy)
    return (
        <div>
            <p>My Weight: { piggy.weight } </p>
            <p>My Specialty: { piggy.specialty }</p>
            <p>Highest Medal Achievement: {piggy['highest medal achieved']}</p>
            <p>Greased: { piggy.greased ? 'Greased Piggy' : 'Ungreased Piggy :(' }</p>
        </div>
    )
}

export default PiggyDetails;