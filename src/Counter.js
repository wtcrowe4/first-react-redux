import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counterSlice'

function Counter() {
    const count = useSelector((state) => state.value)
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState(0)

    const inputValueSubmit = (e) => {
        e.preventDefault()
        dispatch(incrementByAmount(Number(inputValue)))
    }

    return (
        <div>
            <h1 style={{fontSize: "3rem", color: "#282c34"}}>
                {count}
            </h1>
            <button onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button onClick={() => dispatch(decrement())}>
                Decrement
            </button>
            <form onSubmit={e => inputValueSubmit(e)}>
                <input type="number" onChange={e => setInputValue(e.target.value)} />
                <button type="submit" 
                    style={{fontSize: "1rem", 
                        paddingTop: "4px", 
                        paddingBottom: "4px"}
                    }>Add Custom Amount</button>
            </form>
        </div>
    )
}

export default Counter
