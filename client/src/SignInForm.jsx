import React from "react";
import "./SignInForm.css";

class SignInForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userName: '',
            passWord: '',
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleWrongPassword(){
        console.log("Wrong password");
        const inputBox=document.getElementsByClassName('inputText');
        inputBox[0].style.border='1px solid red';
        inputBox[1].style.border='1px solid red';
        const wrongPassword=document.getElementById('WrongPassword');
        wrongPassword.style.display='block';
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.handleSubmit(this.state.userName, this.state.passWord, this.handleWrongPassword);
    }
    
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="userName">
                    User name:    
                </label>
                <input type="text"
                        value={this.state.userName}
                        id="userName"
                        name="userName"
                        onChange={this.handleChange}
                        autoComplete="off"
                        className="inputText"/>
                <br/>
                <label htmlFor="password">
                    Password:   
                </label>
                <input type="text"
                        value={this.state.passWord}
                        id="password"
                        name="passWord"
                        onChange={this.handleChange}
                        autoComplete="off"
                        className="inputText"/>
                <div id="WrongPassword">Sai tên tài khoản hoặc mật khẩu</div>
                <input type="submit" id="SubmitButton"/>
                
            </form>
        );
    }
    
}

export default SignInForm;