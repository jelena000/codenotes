import React, { Component } from 'react'
import './Registration.css'
import Axios from 'axios'

export default class Registration extends Component {
  constructor(props){
    super(props);

    this.state = {
      login:true,
      nameL:'',
      passL:'',
      usernameR:'',
      emailR:'',
      passR:'',
      passRR:'',
    }
  }

  log = () =>{
    const usernameL = this.state.nameL;
    const passL = this.state.passL;
    Axios.post("http://localhost:5000/user/loginUser",{
      username: usernameL,
      password: passL,
    })
    .then((response)=>{
      const serverData = response.data;
      alert(JSON.stringify(serverData))
    })
    .catch((error) => {
      alert(JSON.stringify(error))
    })
  }
  reg = () =>{
    console.log(this.state.passR, this.state.passRR, this.state.emailR, this.state.usernameR);
    const reg_user = this.state.usernameR;
    const reg_email = this.state.emailR;
    const reg_pass1 = this.state.passR;
    const reg_pass2 = this.state.passRR;

    Axios.post("http://localhost:5000/user/registerUser", {
      username: reg_user,
      password: reg_pass1,
      email: reg_email
    })
    .then((respons)=>{
      const severData = respons.data;
      alert(JSON.stringify(severData))
    })
    .catch((error)=>{
      alert(JSON.stringify(error))
    })
  }

  switchToReg = ()=>{
    this.setState({login:false});
  }
  switchToLog = () =>{
    this.setState({login:true});
  }
  
  handleName = (e) =>{
    e.preventDefault();
    let newName = e.target.value;
    this.setState({
        nameL: newName
    });
    console.log(this.state.nameL);
  }
  render() {
    return (
      <div className='reg-container'>
        {
          this.state.login ? 
          <div className='login-part'>
            <div className='reg-form-section'>
              <div className='title-section'>
                <h2>Welcome back</h2>
                <p>Welcome back! Please enter your details.</p>
              </div>
              <form style={{display:'block'}}>
                <label>
                  Name
                <input type={'text'} placeholder="Enter your email" value={this.state.nameL} onChange={this.handleName}></input>
                </label>
                <label>
                  Password
                  <input type={'password'} placeholder="......" value={this.state.passL} onChange={(e)=>{this.setState({passL:e.currentTarget.value})}}></input>
                </label>
              </form>
              <div style={{display:'flex', justifyContent:'end', width:260, fontSize:13}}>
                <a>Forget password?</a>
              </div>
              <div style={{width:260, marginTop:20}}>
                <button className='signBtn' onClick={this.log}>Sign in</button>
                <button className='signGoogle'>Sign in with Google</button>
              </div>
              <div className='switchToReg'>
                <span>Don't have an account?</span>
                <span className='singnUp' onClick={this.switchToReg}>Sign up</span>
              </div>
            </div>
          </div>

          :
          <div className='reg-part'>
            <div className='reg-form-section'>
              <div className='title-section'>
                <h2>Welcome!</h2>
                <p>Please enter your details.</p>
              </div>
              <form style={{display:'block'}}>
                <label>
                  Username
                  <input type={'text'} placeholder="Enter your username" value={this.state.usernameR} onChange={(e)=>{this.setState({usernameR:e.currentTarget.value})}}></input>
                </label>
                <label>
                  Email
                  <input type={'email'} placeholder="Enter your email" value={this.state.emailR} onChange={(e)=>{this.setState({emailR:e.currentTarget.value})}}></input>
                </label>
                <label>
                  Password
                  <input type={'password'} placeholder="......" value={this.state.passR} onChange={(e)=>{this.setState({passR:e.currentTarget.value})}}></input>
                </label>
                <label>
                  Confirm Password
                  <input type={'password'} placeholder="......" value={this.state.passRR} onChange={(e)=>{this.setState({passRR:e.currentTarget.value})}}></input>
                </label>
              </form>
              <div style={{display:'flex', justifyContent:'end', width:260, fontSize:13}}>
                <a className='forgPass'>Forget password?</a>
              </div>
              <div style={{width:260, marginTop:20}}>
                <button className='signBtn' onClick={this.reg} >Sign up</button>
              </div>
              <div className='switchToReg'>
                <span>Don't have an account?</span>
                <span className='singnUp' onClick={this.switchToLog}>Sign up</span>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}
