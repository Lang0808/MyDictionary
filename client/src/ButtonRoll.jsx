import React from "react";
import "./ButtonRoll.css";

class ButtonRoll extends React.Component{
    constructor(props){
        super(props);
        this.state={
            time: 30,
            textOnRoll: 'ROLL !',
            activeRoll: true,
        }
        this.handleRoll=this.handleRoll.bind(this);
        this.handleClock=this.handleClock.bind(this);
    }
    handleClock(){
        if(this.state.time==1){
            this.setState({
                time: 30,
                textOnRoll: 'ROLL !!',
                activeRoll: true
            })
            return;
        }
        else{
            this.setState({
                textOnRoll: this.state.time,
                time: this.state.time-1,
            })
            setTimeout(this.handleClock,1000);
        }
    }
    handleRoll(){
        this.setState({
            textOnRoll: this.state.time,
            time: this.state.time-1,
            activeRoll: false,
        });
        this.props.handleClick();
        this.handleClock();
    }
    render(){
        return (
            <button onClick={this.handleRoll} disabled={!this.state.activeRoll} id="Button">{this.state.textOnRoll}</button>
        )
    }
    
}

export default ButtonRoll;