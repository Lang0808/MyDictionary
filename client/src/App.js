
import './App.css';
import React from "react";
import Navbar from "./Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Home";
import YourWord from "./YourWord";
import SignIn from "./SignIn";
import axios from 'axios';
import CreateAccount from "./CreateAccount";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      user: '',
      signinOn: false,
    }
    this.handleSignin=this.handleSignin.bind(this);
    this.handleSignout=this.handleSignout.bind(this);
    this.handleCloseSignin=this.handleCloseSignin.bind(this);
    this.handleSubmitSignin=this.handleSubmitSignin.bind(this);
  }
  componentDidMount(){
    const user=localStorage.getItem('user');
    const password=localStorage.getItem('password');
    if(user!=null && password!=null) this.handleSubmitSignin(user, password, null);
  }
  
  handleSignin(){
    this.setState({
      signinOn: true,
    });

  }
  handleSignout(){
    localStorage.removeItem("user");
    localStorage.removeItem("password");
    this.setState({
      user:'',
    });

  }
  handleSubmitSignin(userName, passWord, handleWrongPassword){
    const information={
      user_name: userName,
      password: passWord
    };
    axios.post('/api/user/login', information).then(res=>{
      if(res.data.length!=0){
        this.setState({
          user: res.data[0].ten_nguoi_dung,
        });
        localStorage.setItem('user', this.state.user);
        localStorage.setItem('password', res.data[0].mat_khau);
        this.handleCloseSignin();

      }
      else{
        if(handleWrongPassword!=null){
          handleWrongPassword();
        }
      }
    })
  }
  
  handleCloseSignin(){
    this.setState({
      signinOn: false,
    })
  }
  render(){
    return (
      <Router>
      <div className="App">
        <div>
          <Navbar user={this.state.user} 
              handleSignin={this.handleSignin}
              handleSignout={this.handleSignout}/>
        </div>
        <SignIn isOpen={this.state.signinOn}
                handleCloseSignin={this.handleCloseSignin}
                handleSubmit={this.handleSubmitSignin}/>
        <Switch>
          <Route exact path="/">
            <Home
              user={this.state.user}/>
          </Route>
          <Route exact path="/YourDictionary">
            <YourWord user={this.state.user}/>
          </Route>
          <Route exact path="/createAccount">
            <CreateAccount
              handleSubmit={this.handleSubmitSignup}/>
          </Route>
        </Switch>
      </div>
      </Router>
    );
  }
  
}

export default App;
