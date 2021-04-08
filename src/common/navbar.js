import React from "react"
import '../App.scss'

import {
    Navbar,
    Form,
    FormControl,
    Button, 
} from "react-bootstrap";
import{connect} from "react-redux"
import { withRouter } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faHamburger,faArrowAltCircleRight,faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
 


    


const NavBar  = (props)=>{
    return(
        <Navbar className="navbar"  expand="lg">
            <Navbar.Brand >
               <FontAwesomeIcon icon={faHamburger} size="3x" className="burger"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Button className="btnCart" onClick={()=>props.history.goBack()}><FontAwesomeIcon icon={faArrowAltCircleLeft}/></Button>
            <Button className="van" className="btn-src" onClick={()=>{props.history.push("/categories")}}>Home</Button>
            <Navbar.Collapse id="basic-navbar-nav">
            
            <Button className="btnCart" onClick={()=>props.history.goForward()}><FontAwesomeIcon icon={faArrowAltCircleRight}/></Button>
            </Navbar.Collapse>
            
            <Button className="btnCart" onClick={()=>{props.history.push("/ordini")}}>Order</Button>
            <Button className="btnCart" onClick={()=>{props.history.push("/cart")}}>
                Cart: {props.numberCart}<FontAwesomeIcon icon={faShoppingCart}/></Button>
                
        </Navbar>
    );
}



const mapStateToProps = state =>({
    counter: state.counter,
    numberCart: state.basket && state.basket.length? state.basket.reduce((somma,corrente)=>somma+corrente.qnt,0):0
    
})
export default connect(
    mapStateToProps,
    null
)(withRouter(NavBar));