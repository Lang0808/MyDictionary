import React from "react";
import "./NavigationBar.css";
import DrawerToggleButton from "./DrawerToggleButton";

class NavigationBar extends React.Component{
    render(){
        let userSection, signOutSection;
        if(this.props.user==''){
            userSection=<li><a onClick={this.props.handleSignin}>Đăng nhập</a></li>
        }
        else{
            userSection=<li><a>{this.props.user}</a></li>
            signOutSection=<li><a onClick={this.props.handleSignout}>Đăng xuất</a></li>
        }
        return (
            <header className="toolbar">
                <nav className="toolbar__navigation">
                    <div className="toolbar__toggle-button"><DrawerToggleButton click={this.props.handleOpenSideDrawer}/></div>
                    <div className="toolbar__logo"><a href="/">THE LOGO</a></div>
                    <div className="spacer"></div>
                    <div className="toolbar__navigation-items">
                        <ul>
                            <li><a href="/YourDictionary">Your dictionary</a></li>
                            {userSection}
                            {signOutSection}
                        </ul>
                    </div>
                    <div>{this.props.user}</div>
                </nav>
            </header>
        )
    }
    

}

export default NavigationBar;