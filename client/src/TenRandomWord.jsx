import React from 'react';
import ButtonRoll from './ButtonRoll';
import Card from "./Card";
import "./TenRandomWord.css";

class TenRandomWord  extends React.Component{
    constructor(props){
        super(props);
        this.state={
            activeRoll: true,
            textOnRoll: 'ROLL !'
        }
    }
    render(){
        return (
            <div>
                <p className="explaination-roll">Giải thích: Mỗi lần click nút roll, chúng tôi sẽ lấy ra 10 từ bất kỳ trong từ điển của bạn, và 30s sau bạn mới được roll tiếp</p>
                <ButtonRoll handleClick={this.props.handleRoll}/>
                <div className="CardWrapper">
                    <div className="CardGrid">
                        {this.props.data.map(item=>{
                            var FrontSide=<div  className="textInCard"><h4>{item.ngon_ngu_1} to {item.ngon_ngu_2}</h4><h4>{item.tu_1}</h4></div>
                            var BackSide=<div className="textInCard"><h4 >{item.tu_2}</h4></div>
                            return (
                                <Card className="Card" FrontSide={FrontSide} BackSide={BackSide}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
    
}

export default TenRandomWord;