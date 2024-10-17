import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    return(
        <>
            <h1>Counter</h1>
            <p data-testid="count-value">Counter Actual: {counter}</p>
            <button data-testid="btn-increment" onClick={increment}>Incrementar</button>
            <button data-testid="btn-decrement" onClick={decrement}>Decrementar</button>
        </>
    )
}

export default Counter;