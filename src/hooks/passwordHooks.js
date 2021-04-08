import {useState, useEffect} from "react"


export const FetchPassword=(fetchPassword)=>{
    const[show, setIsShowing]= useState(false);
    const[hide, setIsHidden]= useState(false);
    const[password, setPassword]= useState(null)
    
    useEffect(()=>{
        setIsShwoing(true)
        setIsHidden(false)
        fetchPassword()
        .then(response=>{
            setPassword(response)
        })
        .catch((err)=>{
            setIsHidden(true)
        })
        .finally(()=>
        setIsShowing(false))
    },[numbCalls])

    return{show, hide, password
    }
}
