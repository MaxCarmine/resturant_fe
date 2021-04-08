import { ADD_PRODUCT, DECREMNET_COUNTER, INCREMENT_COUNTER, REMOVE_ALL, REMOVE_PRODUCT,SET_COUNTER } from "./actionType";

const initialState = {
    counter:0,
    basket:[]
}


export default function(state=initialState,action){
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            }
            
        case DECREMNET_COUNTER:
            return{
                ...state,
                counter: state.counter - 1
            }
        case SET_COUNTER:
            return{
                ...state,
                counter:action.payload
            }
    
        case ADD_PRODUCT:
            return{
                /*...state,
                basket:[...state.basket, action.payload]*/
                ...state,
                basket:state.basket.find(x=>x.product.id === action.payload.product.id)?
                    state.basket.reduce((acc,curr)=>{
                        console.warn(curr,action)
                        if(curr.product.id === action.payload.product.id){
                            curr.qnt = curr.qnt + action.payload.qnt
                        }
                        acc.push(curr)
                        return acc
                    },[]):[
                        ...state.basket,
                        action.payload
                    ]
            }
    
        case REMOVE_PRODUCT:
            return{
                /*...state,
                basket: state.basket.filter(x=>x.id!==action.payload)*/
                ...state,
                basket: state.basket.reduce((acc,curr)=>{
                    if(curr.product.id===action.payload.id){
                        if(curr.qnt>1){
                            curr.qnt=curr.qnt-1
                            acc.push(curr)
                        }
                    }
                    else
                        acc.push(curr)
                    return acc    
                },[])
            }

        case REMOVE_ALL:
            return{
                ...state,
                basket: []
            }
        default:
            return state;
    }
}