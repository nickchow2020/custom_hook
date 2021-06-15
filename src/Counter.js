import React from "react"
import useLocalStore from "./hooks/useLocalStore"


const Counter = ()=>{
    const [count,setCount] = useLocalStore("count",0)

    const handleCounter = ()=>{
        setCount(counter => counter + 1)
    }

    return(
        <>
            <h1>{count}</h1>
            <button onClick={handleCounter}>Add Counter</button>
        </>
    )
}


export default Counter