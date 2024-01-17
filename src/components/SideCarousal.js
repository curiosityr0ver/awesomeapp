import React, { useContext } from 'react'
import { SideContext } from '../context/Sides';

function SideCarousal() {
    return (
        <div>
            <button data-testid="side1-inc" className='inc' onClick={() => { setSide1(side1 + 1) }}>
                Increment
            </button>
            <button data-testid="side1-dec" className='dec' onClick={() => { side1 > 0 ? setSide1(side1 - 1) : setSide1(side1) }}>
                Decrement
            </button>
            <button data-testid="side2-inc" className='inc' onClick={() => { setSide2(side2 + 1) }}>
                Increment
            </button>
            <button data-testid="side2-dec" className='dec' onClick={() => { side2 > 0 ? setSide2(side2 - 1) : setSide2(side2) }}>
                Decrement
            </button>
            <button data-testid="side3-inc" className='inc' onClick={() => { setSide3(side3 + 1) }}>
                Increment
            </button>
            <button data-testid="side3-dec" className='dec' onClick={() => { side3 > 0 ? setSide3(side3 - 1) : setSide3(side3) }}>
                Decrement
            </button>
        </div>
    )
}

export default SideCarousal