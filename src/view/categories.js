import React from "react";
import Card from "../common/cards/card";
import Alert from "../common/cards/alert";
import CardLoadingSection from "../common/cards/cardLoadingSection"
import {fetchCategories} from "../functions/api"
import {Row,Col,CardDeck} from "react-bootstrap"
import {withRouter} from "react-router-dom"
import { addCounter, decCounter,setCounter } from "../redux/actions";
import { connect } from "react-redux";

class Categories extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loading: false,
            data:[],
            error: false
        }   
        //bind
        this.fetchData= this.fetchData.bind(this)
    }

    fetchData(){
        //settare lo state
        this.setState({loading: true, error:false})
        fetchCategories()
        .then(categories=>{
            this.setState({
                data: categories
            })
        })
        .catch(err =>{
            this.setState({
                error: true
            })
        })
        .finally(()=>{
            this.setState({
                loading:false
            })
        })

    }

    componentDidMount(){
        //quando un componente viene creato entra qua
        this.fetchData()
    }
    

    render(){
        return(
            <div>
                <p>il counter:{this.props.counter}</p>
                <button onClick={()=>this.props.addCounter()}>Increment</button>
                <button onClick={()=>this.props.decrementCounter()}>Decrement</button>
                {
                    this.state.loading ?(
                        <CardLoadingSection/>
                    )
                    :this.state.error ?(
                       <Alert
                        retryCallBack={()=>this.fetchData()}
                       />
                    )
                    :this.state.data ?(
                        <CardDeck className=".cards">
                            <Row>{
                            this.state.data.map((current,idx)=>{
                                return(
                                    <Col lg={3} key={`${idx}`}>
                                        <Card 
                                        callback={()=>this.props.history.push(`/categories/${current.id}`)}
                                        urlImages={current.images[0].uri}
                                        title={current.title}
                                        subTitle={current.subtitle}
                                        description={current.description}
                                        button={current.button}
                                        key={`${idx}_cardIndex`}
                                        /> 
                                    </Col>    
                                );
                            })
                            }</Row>
                    </CardDeck>
                    )

                    :null
                    //diversi risultati in base alla risposta
                }
            </div>
           
        );
    }
}

const mapActionToProps = {
    addCounter:()=>addCounter(),
    decrementCounter:()=>decCounter(),
    setCounter:(value)=>setCounter(value)
}

const mapStateToProps = state =>({
    counter: state.counter
})

export default connect(
    mapStateToProps,
    mapActionToProps
)(withRouter(Categories));