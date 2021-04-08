import Card from "../common/cards/card";
import Alert from "../common/cards/alert";
import CardLoadingSection from "../common/cards/cardLoadingSection"
import {fetchCategories} from "../functions/api"
import {Row,Col,CardDeck} from "react-bootstrap"
import {withRouter} from "react-router-dom"
import {FetchData} from "../hooks/fetchDataHooks"




const Categories =(props) =>{
    
    const {loading, error, data, retryFetch}=FetchData(()=>fetchCategories());
    return(
        <div className="box">
            {loading ?(<CardLoadingSection/>)
            :error ?(<Alert retryCallback={()=>retryFetch()}/>)
            :data ?(
                <CardDeck className=".cards">
                    <Row>{
                    data.map((current,idx)=>{
                        return(
                            <Col lg={3} key={`${idx}`}>
                                <Card 
                                callback={()=>props.history.push(`/categories/${current.id}`)}
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

export default (withRouter(Categories));