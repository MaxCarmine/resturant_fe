import React from "react";
import{
    Alert as AlertBootstrap,
} from "react-bootstrap";

const Alert = () =>{
    return(
        <AlertBootstrap variant={'danger'}>
        Error 500, Try Againg
        </AlertBootstrap>
    )
    
}

export default Alert;