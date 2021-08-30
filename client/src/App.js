
import './App.css';
import React from "react";
import NavigationBar from "./NavigationBar";
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
import SideDrawer from './SideDrawer';
import BackDrop from "./Backdrop";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      user: '',
      signinOn: false,
      sideDrawerOn: false,
    }
    this.handleSignin=this.handleSignin.bind(this);
    this.handleSignout=this.handleSignout.bind(this);
    this.handleCloseSignin=this.handleCloseSignin.bind(this);
    this.handleSubmitSignin=this.handleSubmitSignin.bind(this);
    this.handleCloseSideDrawer=this.handleCloseSideDrawer.bind(this);
    this.handleOpenSideDrawer=this.handleOpenSideDrawer.bind(this);
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
  handleCloseSideDrawer(){
    this.setState({
      sideDrawerOn: false,
    })
  }
  handleCloseSignin(){
    this.setState({
      signinOn: false,
    })
  }
  handleOpenSideDrawer(){
    this.setState((prevState)=>{
      return {sideDrawerOn: !prevState.sideDrawerOn}
    });
  }
  render(){
    let backDrop;
    if(this.state.sideDrawerOn){
      backDrop=<BackDrop click={this.handleCloseSideDrawer}/>
    }
    return (
      <Router style={{height: '100%'}}>
      <div className="App">
        <div>
          <NavigationBar user={this.state.user} 
              handleSignin={this.handleSignin}
              handleSignout={this.handleSignout}
              handleOpenSideDrawer={this.handleOpenSideDrawer}/>
        </div>
        <SideDrawer user={this.state.user} show={this.state.sideDrawerOn}
                  handleSignin={this.handleSignin} handleSignout={this.handleSignout}/>
        {backDrop}
        <SignIn isOpen={this.state.signinOn}
                handleCloseSignin={this.handleCloseSignin}
                handleSubmit={this.handleSubmitSignin}/>
        <Switch>
          <Route exact path="/">
            <Home
              user={this.state.user} />
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
