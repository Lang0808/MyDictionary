import SignInForm from "./SignInForm";
import Popup from "./Popup";

function SignIn(props){
    return (
       <div>
           {props.isOpen &&
                <Popup handleClose={props.handleCloseSignin}>
                    <SignInForm handleSubmit={props.handleSubmit}/>
                    <p>Chua co tai khoan ? <a href="/createAccount">Tao tai khoan</a></p>
                </Popup>
           }
       </div>
    );
}

export default SignIn;