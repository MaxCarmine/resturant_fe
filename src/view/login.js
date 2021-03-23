import React from "react"
import { Container, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import { postLogin } from "../functions/api";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:""
        }
        this.handlerChangeInput=this.handlerChangeInput.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    handlerChangeInput(event){
        const {name,value}= event.target;
        this.setState({
            [name]:value
        })
    }
    onSubmit(event){
        event.preventDefault();
        postLogin(this.state)
        //.then.(console.warn)
        .then((response)=>{
            this.props.history.push("/categories")
        })
        .catch((error)=> console.warn(error))
    }

   render(){
       return(
          <Container fluid="sm">
              <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={this.handlerChangeInput} name="email" required/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={this.handlerChangeInput} name="password" placeholder="Password" required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
          </Container> 
       )
   }
}



export default withRouter(Login);