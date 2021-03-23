import  Alert  from "../common/cards/alert";
import CardProduct from "../common/cards/cardProduct"
import React from "react";
import { withRouter } from "react-router-dom";
import CardLoadingSection from "../common/cards/cardLoadingSection";
import { fetchCategory } from "../functions/api";
import {Row, Col} from "react-bootstrap";
import { connect } from "react-redux";
import {addProduct,remProduct} from "../redux/actions"

class Category extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loading: false,
            data:null,
            error:false
        }
        this.fetchData=this.fetchData.bind(this)
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData(){
        this.setState({loading:true, error:false})
        fetchCategory(this.props.match.params.id)
        .then(response=>{
            this.setState({
                data:response
            })
        })
        .catch(error =>{
            this.setState({
                error:true
            })
            
        })
        .finally(()=>{
            this.setState({
                loading:false
            })
        })
    }

    render(){
        console.warn(this.state.data)
        return(
            <div>
                {
                    this.state.loading ?(
                        <CardLoadingSection></CardLoadingSection>
                    )
                    :this.state.error ?(
                        <Alert
                        retryCallBack={()=>this.fetchData()}/>
                    )
                    :this.state.data ?(
                        <Row>{
                            this.state.data.products.map((current,idx)=>{
                                return(
                                    <Col lg={3}>
                                        <CardProduct
                                        urlImages={current.images[0].uri}
                                        title={current.title}
                                        subTitle={current.subtitle}
                                        description={current.description}
                                        buttonText={this.props.basket.find(x=>x.id===current.id)?"Remove From Cart":"Add To Cart"}
                                        callback={()=>{
                                            if(this.props.basket.find(x=>x.id===current.id)){
                                                this.props.removeProduct(current.id)
                                            }else{
                                                this.props.addProduct(current);
                                            }   
                                        }}
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
}

const mapActionToProps={
    addProduct: product=>addProduct(product),
    removeProduct: product=>remProduct(product)
}
const mapStateToProps=state=>({
    basket: state.basket
})
export default connect(mapStateToProps,mapActionToProps)(withRouter(Category));  