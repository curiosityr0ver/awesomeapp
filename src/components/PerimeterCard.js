import React from 'react'
import { useContext } from 'react';
import { area, perimeter, angles } from '../math/math'


function PerimeterCard() {

    return (
        <div className='card'>
            Perimeter
            <h3 data-testid="triangle-perimeter">
                {perimeter(side1, side2, side3)}
            </h3>
        </div>
    )
}

export default PerimeterCard