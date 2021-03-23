import { DECREMNET_COUNTER, INCREMENT_COUNTER,ADD_PRODUCT,REMOVE_PRODUCT,SET_COUNTER } from "./actionType";

export const addCounter =()=>({
    type: INCREMENT_COUNTER
})

export const decCounter =()=>({
    type: DECREMNET_COUNTER
})
export const setCounter = (value)=> ({
    type: SET_COUNTER,
    payload: value
})


export const addProduct =(product)=>({
    type: ADD_PRODUCT,
    payload: product
})

export const remProduct =(id)=>({
    type: REMOVE_PRODUCT,
    payload: id
})

