import {useState,useEffect} from "react"

const useLocalStore = (key,defaultValue)=>{
    const [state,setState] = useState(()=>{
        let localValue = JSON.parse(window.localStorage.getItem(key) || defaultValue);
        return localValue;
    })

    useEffect(()=>{
        window.localStorage.setItem(key,state)
    },[state,key])

    return [state,setState]
}

export default useLocalStore