import{Button} from "react-bootstrap"
import React from "react"
import { 
    Card as CardBoostrap,
 } from "react-bootstrap";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faPlusCircle,faMinusCircle,faEuroSign } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from "react-router";


const CardProduct = ({ urlImages, title, subTitle, description,qnt, addProduct,remProduct,price,id,button,history}) => (
            <CardBoostrap className="card" >
                <CardBoostrap.Img className="img" variant="top"  src={urlImages} />
                <CardBoostrap.Body>
                    <CardBoostrap.Title>{<h2>{title}</h2>}</CardBoostrap.Title>
                    <CardBoostrap.Subtitle>{<h5>{subTitle}</h5>}</CardBoostrap.Subtitle>
                    <CardBoostrap.Text>{<i>{description}</i>}</CardBoostrap.Text>
                    <CardBoostrap.Text>{price}<FontAwesomeIcon icon={faEuroSign}/></CardBoostrap.Text>
                    <Button onClick={()=>{history.push(`/deteils/${id}`)}}>{button}Dettagli</Button>
                </CardBoostrap.Body>
                <CardBoostrap.Footer className="cardsBtns">
                    <FontAwesomeIcon onClick={()=>addProduct()} icon={faPlusCircle}/>
                        <span>{qnt}</span>
                    <FontAwesomeIcon onClick={()=>remProduct()} icon={faMinusCircle}/>
                </CardBoostrap.Footer>
            </CardBoostrap>
          );


export default withRouter(CardProduct);