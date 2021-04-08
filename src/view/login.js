import React from "react"
import { Container, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import { postLogin } from "../functions/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            hidden:true
        }
        this.handlerChangeInput=this.handlerChangeInput.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.toggleShow=this.toggleShow.bind(this);
    }

    toggleShow(){
        this.setState({hidden:!this.state.hidden});
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
           <div className="box">
          <Container fluid="sm">
              <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" onChange={this.handlerChangeInput} name="username" required/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={this.state.hidden ? 'password':'text'} onChange={this.handlerChangeInput} name="password" placeholder="Password" required/>
                     <FontAwesomeIcon onClick={this.toggleShow} icon={faEye}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
          </Container>
          </div> 
       )
   }
}



export default withRouter(Login);