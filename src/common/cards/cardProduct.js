
import React from "react"
import { 
    Card as CardBoostrap,
 } from "react-bootstrap";


const CardProduct = ({ urlImages, title, subTitle, description, callback,buttonText}) => (
            <CardBoostrap className="card" >
                <CardBoostrap.Img className="img" variant="top"  src={urlImages} />
                <CardBoostrap.Body>
                    <CardBoostrap.Title>{<h2>{title}</h2>}</CardBoostrap.Title>
                    <CardBoostrap.Subtitle>{<h5>{subTitle}</h5>}</CardBoostrap.Subtitle>
                    <CardBoostrap.Text>{<i>{description}</i>}</CardBoostrap.Text>
                    <button  className="cardbtn" variants="primary" onClick={()=>callback()}>{buttonText}</button>
                </CardBoostrap.Body>
            </CardBoostrap>
          );


export default CardProduct;