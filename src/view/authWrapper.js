import React from "react"
import {withRouter} from "react-router-dom"

class AuthWrapper extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const jwt = localStorage.getItem("jwt")
        if(!jwt){
            this.props.history.replace("/login")
        }
    }

    render(){
        return this.props.children

    }

}

export default withRouter(AuthWrapper)