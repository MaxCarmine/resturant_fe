import  Alert  from "../common/cards/alert";
import CardProduct from "../common/cards/cardProduct"
import { withRouter } from "react-router-dom";
import CardLoadingSection from "../common/cards/cardLoadingSection";
import { fetchCategory } from "../functions/api";
import {Row, Col} from "react-bootstrap";
import { connect } from "react-redux";
import {addProduct,remProduct} from "../redux/actions"
import {FetchData} from "../hooks/fetchDataHooks"


const Category =(props)=>{
    const {loading, error, data,retryFetch}=FetchData(()=>fetchCategory(props.match.params.id))
    return(
        <div className="box">
            {   loading ?(<CardLoadingSection/>)
                :error ?(<Alert retryCallback={()=>retryFetch()}/>)
                :data ?(
                    <Row>
                        {
                        data.products.map((current,idx)=>{
                        const quantity = props.basket.find(x=>x.product.id===current.id)
                        return(
                            <Col lg={3} xs={3} key={`${idx}`}>
                                <CardProduct
                                urlImages={current.images[0].uri}
                                title={current.title}
                                subTitle={current.subtitle}
                                description={current.description}
                                price={current.price}
                                qnt={(quantity!==undefined)? quantity.qnt:0}
                                addProduct={()=>{props.addProduct(1,current)}}
                                remProduct={()=>{props.removeProduct(1,current.id)}}
                                id={current.id}
                                key={`${idx}_cardIndex`}
                                /> 
                            </Col>    
                            );
                        })
                        }
                    </Row>
                )
                :null
            }
        </div>
    );


}

const mapActionToProps={
    addProduct: (qnt,product)=>addProduct(qnt,product),
    removeProduct:(qnt, id)=>remProduct(qnt,id)

}
const mapStateToProps=state=>({
    basket: state.basket
})
export default connect(mapStateToProps,mapActionToProps)(withRouter(Category));  