import React from "react"
import useLocalStore from "./hooks/useLocalStore"


const ColorPicker = ()=>{
    const [color,setColor] = useLocalStore("color","teal")
    return (
        <>
            <h1>I'm the headline,and will change color sooner</h1>
        </>
    )
}   

export default ColorPicker