import Popup from "./Popup";
import React from "react";
import axios from "axios";
import "./AddWordUnsuccess.css";
import ChangeWordDefinition from "./ChangeWordDefinition";

class AddWordUnSuccess extends React.Component{
    constructor(props){
        super(props);
        this.state={
            changedValue: '',
            isOpenChange: false,
        }
        this.handleChangeValue=this.handleChangeValue.bind(this);
        this.changeWord=this.changeWord.bind(this);
        this.handleClickChange=this.handleClickChange.bind(this);
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
    handleClickChange(){
        this.setState({
            isOpenChange: true,
        })
    }
    render(){
        return (
            <div>
                {
                    this.props.isOpen &&
                    <Popup handleClose={this.props.handleClose}>
                        <h3>Bạn đã định nghĩa về từ này rồi !</h3>
                        <p>Định nghĩa của bạn:</p>
                        <table>
                            <tr>
                                <th>Ngôn ngữ 1</th>
                                <th>Ngôn ngữ 2</th>
                            </tr>
                            <tr>
                                <td>{this.props.language1}</td>
                                <td>{this.props.language2}</td>
                            </tr>
                            <tr>
                                <th>Nghĩa 1</th>
                                <th>Nghĩa 2</th>
                            </tr>
                            <tr>
                                <td>{this.props.word1}</td>
                                <td>{this.props.prevDef}</td>
                            </tr>
                            <tr>
                                <td colSpan="2">Định nghĩa bạn muốn thêm vào</td>
                            </tr>
                            <tr>
                                <th>Ngôn ngữ 1</th>
                                <th>Ngôn ngữ 2</th>
                            </tr>
                            <tr>
                                <td>{this.props.language1}</td>
                                <td>{this.props.language2}</td>
                            </tr>
                            <tr>
                                <th>Nghĩa 1</th>
                                <th>Nghĩa 2</th>
                            </tr>
                            <tr>
                                <td>{this.props.word1}</td>
                                <td>{this.props.word2}</td>
                            </tr>
                        </table>
                        <h3>Bạn có muốn đổi định nghĩa của từ hay không ?</h3>
                        <div>
                            <button className="ButtonChangeDefinition" onClick={this.handleClickChange}>Đổi</button>
                            <button className="ButtonChangeDefinition">Không đổi</button>
                        </div>
                        <ChangeWordDefinition  isOpen={this.state.isOpenChange}
                                                handleSubmit={this.changeWord}
                                                handleChange={this.handleChangeValue}
                                                value={this.state.changedValue}/>
                    </Popup>
                }
            </div>
        )
    }
          
}

export default AddWordUnSuccess;