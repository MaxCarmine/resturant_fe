import React from "react"
import Alert from "../common/cards/alert"
import { withRouter } from "react-router-dom";
import {FetchData} from "../hooks/fetchDataHooks"
import {fetchOrdini} from "../functions/api"
import CardLoadingSection from "../common/cards/cardLoadingSection";
import "../App.scss"


const Ordini =(props)=>{
    const{loading, error, data,retryFetch}=FetchData(()=>fetchOrdini());
    return(
        <div className="box">
            {loading?(<CardLoadingSection/>)
            :error?(<Alert retryCallback={()=>retryFetch()}/>)
            :data?(
                <div>
                {data.map((current, idx) => {
                    return (
                    <div key={`orders_${idx}`} className="ordine" >
                        <table className="table">
                            <thead>
                            <tr>
                                <th><h4>id ordine: {current.id}</h4></th>
                                <th><h4>prezzo: €{current.price.toFixed(2)}</h4></th>
                                 <th><h3>addition:{current.additions}</h3></th>

                            </tr>
                            </thead>
                                
                                    {current.data.map((curr,idx)=>{
                                        return(
                                            <tbody key={`order_${idx}`}>
                                                <tr>
                                                    <td><h2>{curr.product.title}</h2></td>
                                                    <td><p>quantita: {curr.qnt}</p></td>
                                                    
                                                </tr>
                                            </tbody>
                                        )
                                    })
                                    }
                                    <tfoot>
                                        <tr>
                                            <td><h4>data ordine: {current.creation_date}</h4>
                                            </td>
                                        </tr>
                                    </tfoot>
                            </table>
                        </div>
                    );
                    })}
                
                </div>
            )  
            
            :null
            }
        </div>
    )
}

export default withRouter(Ordini);
