import React from 'react'
import {Card as CardBootstrap, Button} from 'react-bootstrap'


export const CardEveryItem = ({title,subtitle,description,img, id,goTo,category}) => {
    return(
        <CardBootstrap key={id} className='mb-5'>
        <CardBootstrap.Img variant="top" src={img}></CardBootstrap.Img>
        <CardBootstrap.Body>
        <CardBootstrap.Title>{title}</CardBootstrap.Title>
        <CardBootstrap.Subtitle>{subtitle}</CardBootstrap.Subtitle>
        <CardBootstrap.Text>{description}</CardBootstrap.Text>
        <Button onClick={()=>goTo()}>{category}</Button>
        </CardBootstrap.Body>
        </CardBootstrap>
    )
  
}



export default CardEveryItem