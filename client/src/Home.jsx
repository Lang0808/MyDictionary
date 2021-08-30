import AddWord from "./AddWord";
import React from "react";
import SeeSomeWord from "./SeeSomeWord";
import "./Home.css";

class Home extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div id="HomeWrapper">
                <br/>
                <AddWord user={this.props.user}/>
                <SeeSomeWord user={this.props.user}/>
            </div>
        );
    }
    
}

export default Home;