import React from "react"
import '../App.scss'
import logo from './mcd.png'
import {
    Navbar,
    Form,
    FormControl,
    Button, 
    Nav

} from "react-bootstrap";
import{connect} from "react-redux"

const NavBar  = (props)=>{
    return(
        <Navbar className="navbar"  expand="lg">
            <Navbar.Brand >
                <img src={logo} height="70px" width="140px" alt=""/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav.Link className="van" href="">Home</Nav.Link>
            <Nav.Link className="van" href="">Panini</Nav.Link>
            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button className="btn-src"variant="outline-success" >Search</Button>
                </Form>
            </Navbar.Collapse>
            <Nav.Link className="van" href="">Numero elementi Carrello: {props.numberCart}</Nav.Link>
        </Navbar>
    );
}

const mapStateToProps = state =>({
    counter: state.counter,
    numberCart: state.basket.length
})
export default connect(
    mapStateToProps,
    null
)(NavBar);