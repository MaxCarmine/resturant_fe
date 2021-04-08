import React, { useState } from "react"
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {addProduct,removeAll,remProduct} from "../redux/actions"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle,faMinusCircle,faEuroSign } from '@fortawesome/free-solid-svg-icons'
import {postOrdini} from "../functions/api"
import "../App.scss"


 const Carello =(props)=>{
    const[additions,setAddition]=useState([])

    const onSubmit=(event)=>{
        event.preventDefault();
        const order=[]
        props.basket.forEach(curr=>{
        //if(curr.product.id==additions.product_id){
            order.push({
                'product_id':curr.product.id,
                'qnt':curr.qnt,
                'additions':[additions.addition]
                })
            //}
        })
        postOrdini(order)
        .then((response)=>{
            console.warn("Forse funziona");
            props.history.push("/ordini")

        })
        .catch((error)=> console.warn(error))
        console.log(order)

        props.basket.forEach(curr =>{
            props.removeAll()
        })
        
    }    
 

    return(
    <form onSubmit={onSubmit} className="lol">
        <div className="box" >
            <table className="table" >
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Single Price</th>
                        <th scope="col">Notes</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {props.basket.map((current,idx)=>(
                        <tr key={`${idx}`}>
                            <td>{current.product.title}</td>
                            <td>
                                <FontAwesomeIcon onClick={()=>{
                                    props.removeProduct(1,current.product.id)}} icon={faMinusCircle}/>
                                {current.qnt}
                                <FontAwesomeIcon onClick={()=>{
                                    props.addProduct(1,current.product)}} icon={faPlusCircle}/>
                            </td>
                            <td>{current.product.price}</td>
                            <td>
                            <input type="text"  
                                onChange={(event)=>setAddition({
                                'product_id':current.product.id,
                                'addition':event.target.value})}
                                className="form-control" 
                                placeholder="MORE BACON" 
                            />
                            </td>
                        </tr>
                    ))}
                </tbody>

                <tfoot>
                    <tr className="table-dark">
                        <td>
                            Total:<FontAwesomeIcon icon={faEuroSign}/>{props.basket.reduce((acc,curr)=>acc+(curr.qnt*curr.product.price),0).toFixed(2)}
                        </td>
                    </tr>
                </tfoot>
            </table>   
        </div>
        <Button type="submit">Order</Button>
    </form>
    )
 }
 
  



const mapActionToProps={
    addProduct: (qnt,product)=>addProduct(qnt,product),
    removeProduct:(qnt,product)=>remProduct(qnt,product),
    removeAll:()=>removeAll()

}
const mapStateToProps=state=>({
    basket: state.basket
})
export default connect(mapStateToProps,mapActionToProps)(withRouter(Carello));
