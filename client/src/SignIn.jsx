import SignInForm from "./SignInForm";
import Popup from "./Popup";
import React from "react";

class SignIn extends React.Component{
    render(){
        return (
            <div>
                {this.props.isOpen &&
                     <Popup handleClose={this.props.handleCloseSignin}>
                         <SignInForm handleSubmit={this.props.handleSubmit}/>
                         <p>Chua co tai khoan ? <a href="/createAccount">Tao tai khoan</a></p>
                     </Popup>
                }
            </div>
         );
    }
    
}

export default SignIn;