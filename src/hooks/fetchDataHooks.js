import {useState, useEffect} from "react"


export const FetchData=(fetchFunctions)=>{
    const[loading, setIsLoading]= useState(false);
    const[error, setIsError]= useState(false);
    const[data, setData]= useState(null)
    const [numbCalls,setNumberOfCall]=useState(1)

    useEffect(()=>{
        setIsLoading(true)
        setIsError(false)
        fetchFunctions()
        .then(response=>{
            setData(response)
        })
        .catch((err)=>{
            setIsError(true)
        })
        .finally(()=>
        setIsLoading(false))
    },[numbCalls])

    return{loading, error, data,
        retryFetch:()=>setNumberOfCall(numbCalls+1)
    }
}

