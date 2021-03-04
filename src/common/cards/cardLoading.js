import React from "react"
import {Card as CardBootstrap} from 'react-bootstrap'

const CardLoading = () => (
    <CardBootstrap style={{marginBottom: '3rem'}}>
        <CardBootstrap.Body>
            <CardBootstrap.Title className="placeholder-loader">__________________</CardBootstrap.Title>
            <CardBootstrap.Text className="placeholder-loader">
                __________________
            </CardBootstrap.Text>
        </CardBootstrap.Body>
    </CardBootstrap>
)

export default CardLoading