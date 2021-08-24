import "./UserLogin.css";
import "./Navbar.css";

function UserLogin(props){
    if(props.user===""){
        return (
            <div>
                <a className="ButtonUser" onClick={props.handleSignin}>Sign in</a>
            </div>
        );
    }
    else{
        return (
            <div>
                <a className="ButtonUser">{props.user}</a>
                <a className="ButtonUser" onClick={props.handleSignout}>Sign out</a>
            </div>
        )
    }
}

export default UserLogin;