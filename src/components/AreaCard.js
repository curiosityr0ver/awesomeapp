import React from 'react'
import { useContext } from 'react';
import { SideContext } from '../context/Sides';
import { area, perimeter, angles } from '../math/math'

function AreaCard() {
    const { side1, side2, side3 } = useContext(SideContext);

    return (
        <div className='card'>
            Area
            <h3 data-testid="triangle-area">
                {area(side1, side2, side3)}
            </h3>
        </div>
    )
}

export default AreaCard