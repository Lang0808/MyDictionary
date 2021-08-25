import React from "react";
import "./CreateAccount.css";
import axios from "axios";
import SignupSuccess from "./SignupSuccess";

class CreateAccount extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            confirm:'',
            WrongMessage: '',
            successSignup: false,
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleSignupSuccess=this.handleSignupSuccess.bind(this);
        this.handleSignupUnsuccess=this.handleSignupUnsuccess.bind(this);
        this.handleCloseSuccessSignup=this.handleCloseSuccessSignup.bind(this);
    }
    handleSignupSuccess(){
        this.setState({
            successSignup: true,
        });
        localStorage.setItem('user', this.state.username);
        localStorage.setItem('password', this.state.password);
    }
    handleCloseSuccessSignup(){
        this.setState({
            successSignup: false,
        })
    }
    handleSignupUnsuccess(){
        var userName=document.getElementById("new_username");
        userName.style.border='1px solid red';
        var SomethingWrong=document.getElementById("SomethingWrong");
        SomethingWrong.style.display='block';
        this.setState({
            WrongMessage: 'Tên tài khoản đã tồn tại',
        });
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        this.reset();
        if(this.isValid()){
            const information={
                "username": this.state.username,
                "password": this.state.password
              };
              axios.post('/api/user/signup', information)
                .then((res)=>{
                  this.handleSignupSuccess();
              })
              .catch(error=>{
                this.handleSignupUnsuccess();
              });
        }
    }
    handleConfirmDifferentFromPassword(){
        console.log("handleConfirmDifferentFromPassword() called");
        var confirm=document.getElementById("SomethingWrong");
        confirm.style.display='block';
        var passwordBox=document.getElementById("new_password");
        var confirmBox=document.getElementById("confirm_password");
        passwordBox.style.border='1px solid red';
        confirmBox.style.border='1px solid red';
        this.setState({
            WrongMessage: 'Mật khẩu xác nhận lại không giống mật khẩu ban đầu',
        })
    }
    handleStringLengthTooShort(element){
        var box=document.getElementById(`new_${element}`);
        box.style.border='1px solid red';
        var message;
        if(element==='username'){
            message='Tên người dùng quá ngắn';
        }
        else if(element==='password'){
            message='Mật khẩu quá ngắn';
        }
        var SomeThingWrong=document.getElementById("SomethingWrong");
        SomeThingWrong.style.display='block';
        this.setState({
            WrongMessage: message
        });
    }
    reset(){
        var temp=document.getElementById("new_username");
        temp.style.border='1px solid black';
        temp=document.getElementById("new_password");
        temp.style.border='1px solid black';
        temp=document.getElementById("confirm_password");
        temp.style.border='1px solid black';
    }
    isValid(){
        if(this.state.confirm!=this.state.password){
            this.handleConfirmDifferentFromPassword();
            return false;
        }
        if(this.state.username.length<5){
            this.handleStringLengthTooShort('username');
            return false;
        }
        if(this.state.password.length<5){
            this.handleStringLengthTooShort('password');
            return false;
        }
        return true;
    }
    render(){
        console.log(this.props.handleSubmit);
        return (
            <div id="CreateAccountWrapper">
                <br/>
                <SignupSuccess 
                    handleClose={this.handleCloseSuccessSignup}
                    isOpen={this.state.successSignup}/>
                <h3>Tạo tài khoản mới</h3>
                <form onSubmit={this.handleSubmit} id="FormCreateAccount">
                    <label htmlFor="new_username" >Tên người dùng:</label>
                    <br/>
                    <input 
                        id="new_username" 
                        type="text" 
                        value={this.state.username}
                        name="username"
                        autoComplete="off"
                        onChange={this.handleChange}/>
                        <br/>
                    <label htmlFor="new_password">Mật khẩu:</label>
                    <br/>
                    <input 
                        id="new_password" 
                        type="password" 
                        value={this.state.password}
                        name="password"
                        autoComplete="off"
                        onChange={this.handleChange}/>
                    <br/>
                    <label htmlFor="confirm_password">Nhập lại mật khẩu:</label>
                    <br/>
                    <input 
                        id="confirm_password" 
                        type="password" 
                        value={this.state.confirm}
                        name="confirm"
                        onChange={this.handleChange}/>
                    <br/>
                    <div id="SomethingWrong">{this.state.WrongMessage}</div>
                    
                    <input type="submit" value="Submit" id="SubmitSignup"/>
                </form>
            </div>
            
        )
    }
}

export default CreateAccount;