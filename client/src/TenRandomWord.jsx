import React from 'react';
import ButtonRoll from './ButtonRoll';

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
                <p>Giải thích: Mỗi lần click nút roll, chúng tôi sẽ lấy ra 10 từ bất kỳ trong từ điển của bạn, và 30s sau bạn mới được roll tiếp</p>
                <ButtonRoll handleClick={this.props.handleRoll}/>
                <div>
                    {this.props.data.map(item=>{
                        return (
                            <div>
                                Ngôn ngữ 1: {item.ngon_ngu_1}, Ngôn ngữ 2: {item.ngon_ngu_2}<br/>
                                Từ 1: {item.tu_1}, Từ 2: {item.tu_2}<br/>
                                <br/>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
    
}

export default TenRandomWord;