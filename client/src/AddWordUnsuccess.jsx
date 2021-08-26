import Popup from "./Popup";
import React from "react";
import axios from "axios";

class AddWordUnSuccess extends React.Component{
    constructor(props){
        super(props);
        this.state={
            changedValue: ''
        }
        this.handleChangeValue=this.handleChangeValue.bind(this);
        this.changeWord=this.changeWord.bind(this);
    }
    changeWord(){
        const information={
            'user': this.props.user,
            'language1': this.props.language1,
            'language2': this.props.language2,
            'word1': this.props.word1,
            'word2': this.state.changedValue
        };
        axios.post('/api/word/changeWord', information)
            .then(res=>alert("Success"))
            .catch(err=>alert("Failed"));
    }
    handleChangeValue(e){
        this.setState({
            changedValue: e.target.value
        });
    }
    render(){
        return (
            <div>
                {
                    this.props.isOpen &&
                    <Popup handleClose={this.props.handleClose}>
                        <h3>Bạn đã định nghĩa về từ này rồi !</h3>
                        <p>{this.props.language1} to {this.props.language2}</p>
                        <p>{this.props.word1}</p>
                        <p>Định nghĩa của bạn:</p>
                        <p>{this.props.prevDef}</p>
                        <p>Định nghĩa bạn đang muốn thêm vào:</p>
                        <p>{this.props.word2}</p>
                        <h3>Bạn có muốn đổi định nghĩa của từ hay không ?</h3>
                        <p>Đổi thành:</p>
                        <form onSubmit={this.changeWord}>
                            <input type="text" value={this.changedValue} onChange={this.handleChangeValue}/>
                            <input type="submit" value="Submit"/>
                        </form>
                    </Popup>
                }
            </div>
        )
    }
          
}

export default AddWordUnSuccess;