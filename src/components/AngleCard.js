import React from 'react'
import { useContext } from 'react';
import { area, perimeter, angles } from '../math/math'


function AngleCard() {

    return (
        <div className='card'>
            Angle
            <h3 data-testid="triangle-angles">
                {angles(side1, side2, side3)[0]}°,
                {angles(side1, side2, side3)[1]}°,
                {angles(side1, side2, side3)[2]}°
            </h3>
        </div>
    )
}

export default AngleCard