import { Button } from "react-bootstrap";
import React from "react"
import { 
    Card as CardBoostrap,
 } from "react-bootstrap";


const Card = ({ urlImages, title, subTitle, description, callback}) => (
            <CardBoostrap className="card" >
                <CardBoostrap.Img className="img" variant="top"  src={urlImages} />
                <CardBoostrap.Body>
                    <CardBoostrap.Title>{<h2>{title}</h2>}</CardBoostrap.Title>
                    <CardBoostrap.Subtitle>{<h5>{subTitle}</h5>}</CardBoostrap.Subtitle>
                    <CardBoostrap.Text>{<i>{description}</i>}</CardBoostrap.Text>
                    <Button  className="cardbtn" variants="primary" onClick={()=>callback()}>Explore</Button>
                </CardBoostrap.Body>
            </CardBoostrap>
          );


export default Card;
