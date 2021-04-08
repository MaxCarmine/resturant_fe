import { DECREMNET_COUNTER, INCREMENT_COUNTER,ADD_PRODUCT,REMOVE_PRODUCT,SET_COUNTER,REMOVE_ALL } from "./actionType";

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


export const addProduct =(qnt,product)=>({
    type: ADD_PRODUCT,
    payload: {qnt,product}
})

export const remProduct =(qnt,id)=>({
    type: REMOVE_PRODUCT,
    payload: {qnt,id}
})

export const removeAll=()=>({
    type:REMOVE_ALL
})
