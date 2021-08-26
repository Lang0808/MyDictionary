import UserLogin from "./UserLogin";
import "./Navbar.css";

function Navbar(props){
    return (
        <ul id="NavbarContainer">
            <li><a className="NavbarItem" href="/">Logo</a></li>
            <li><a className="NavbarItem" href="/YourDictionary">YourDictionary</a></li>
            
            <li id="Login">
                <UserLogin user={props.user}
                        handleSignin={props.handleSignin}
                        handleSignout={props.handleSignout}/>
            </li>
        </ul>
    )

}

export default Navbar;