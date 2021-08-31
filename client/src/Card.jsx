import "./Card.css";
import React from "react";

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state={
            classes: 'flip-card-inner',
            isFlip: false,
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        console.log("Handle click called");
        if(!this.state.isFlip){
            this.setState({
                isFlip: true,
                classes: 'flip-card-inner is-fliped',
            });
        }
        else{
            this.setState({
                isFlip: false,
                classes: 'flip-card-inner',
            })
        }
    }
    render(){
        return (
            <div className="flip-card">
                <div className={this.state.classes} onClick={this.handleClick}>
                    <div className="flip-card-front">
                        {this.props.FrontSide}
                    </div>
                    <div className="flip-card-back">
                        {this.props.BackSide}
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Card;