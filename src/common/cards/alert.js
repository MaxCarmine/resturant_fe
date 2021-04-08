import React from "react";
import{
    Alert as AlertBootstrap,
    Button
} from "react-bootstrap";


const Alert = (props) =>{
    return(
        <AlertBootstrap variant={'danger'} className="alertstyle">
            <div>
                Error 500, Try Againg
            </div>
            <div>
                {props.retryCallback!==undefined?(
                <Button className="alertbtn" onClick={props.retryCallback}>Riprova</Button>
                ):null
                }
            </div>
        </AlertBootstrap>
    )
    
}

export default Alert;