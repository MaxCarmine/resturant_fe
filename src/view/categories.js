import React from "react";
import Card from "../common/cards/card";
import Alert from "../common/cards/alert";
import CardLoadingSection from "../common/cards/cardLoadingSection"
import {fetchCategories} from "../functions/api"
import {Row,Col, CardDeck, CardColumns} from "react-bootstrap"

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
        this.setState({loading: true})
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
                {
                    this.state.loading ?(
                        <CardLoadingSection/>
                    )
                    :this.state.error ?(
                       <Alert/>
                    )
                    :this.state.data ?(
                        this.state.data.map((current,idx)=>{
                            return(
                                    <Row  md={4}  key={`card_loading_${idx}`}>
                                        <Card
                                        title={current.title}
                                        subTitle={current.subtitle}
                                        description={current.description}
                                        key={`${idx}_cardIndex`}
                                        /> 
                                    </Row>
                                    
                            );
                        })
                    )
                    :null
                    //diversi risultati in base alla risposta
                }
            </div>
           
        );
    }
}

export default Categories;