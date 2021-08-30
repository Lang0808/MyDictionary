import React from "react";
import "./SideDrawer.css";

const sideDrawer = (props) => {
    let userSection, signoutSection;
    if(props.user!=''){
        userSection=<li><a>{props.user}</a></li>
        signoutSection=<li><a onClick={props.handleSignout}>Đăng xuất</a></li>
    }
    else{
        userSection=<li><a onClick={props.handleSignin}>Đăng nhập</a></li>
    }
    let classes;
    if(props.show){
        classes="side-drawer open";
    }
    else{
        classes="side-drawer";
    }
    return (
        <nav className={classes}>
            <ul>
                <li><a href="/YourDictionary">Your dictionary</a></li>
                {userSection}
                {signoutSection}
            </ul>
        </nav>
    )
}

export default sideDrawer;