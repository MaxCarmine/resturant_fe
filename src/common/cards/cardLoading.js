import React from "react"
import {Card as CardBootstrap} from 'react-bootstrap'

const CardLoading = () => (
    <CardBootstrap style={{marginBottom: '3rem'}}>
        <CardBootstrap.Body>
            <CardBootstrap.Title className="placeholder-loader">_________________</CardBootstrap.Title>
            <CardBootstrap.Text className="placeholder-loader">_________________</CardBootstrap.Text>
            <CardBootstrap.Title className="placeholder-loader">_________________</CardBootstrap.Title>
            <CardBootstrap.Text className="placeholder-loader"> _________________</CardBootstrap.Text>
        </CardBootstrap.Body>
    </CardBootstrap>
)

export default CardLoading