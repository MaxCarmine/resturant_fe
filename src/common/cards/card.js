import React from "react"
import { 
    Card as CardBoostrap,
 } from "react-bootstrap";

const Card = ({ title, subTitle, description}) => (
            <CardBoostrap style={{ width: '18rem' }}>
                <CardBoostrap.Body>
                <CardBoostrap.Title>{title}</CardBoostrap.Title>
                <CardBoostrap.Subtitle>{subTitle}</CardBoostrap.Subtitle>
                <CardBoostrap.Text>{description}</CardBoostrap.Text>
                </CardBoostrap.Body>
            </CardBoostrap>
          );


export default Card;
