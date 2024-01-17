import React, { useContext } from 'react'
import { CounterContext } from '../context/Counter'

function Counter() {
    const { count, setCount } = useContext(CounterContext);
    return (
        <div>
            <button onClick={() => { setCount(count + 1) }}>
                Increment
            </button>
            <button onClick={() => { setCount(count - 1) }}>
                Decrement
            </button>
        </div>
    )
}

export default Counter