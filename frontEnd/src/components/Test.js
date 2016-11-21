import React, { Component } from 'react';
import '../App.css';

import './LogInForm.css'

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePass = this.handlePass.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(event) {
    this.setState({username: event.target.username});
  }

  handlePass(event) {
    this.setState({password: event.target.username});
  }

  handleSubmit(event) {
    //write some stuff here that puts the posts the form stuff

    console.log('Text field username is: ' + this.state.username +
      ' pass username is: ' + this.state.password);
  }

  render() {
    return (
        <div className="log-in-box">
          <h2>The time is now!</h2>
          <h3>Accept the truth...</h3>
          <div className="email-pass-form">
            <form action="http://localhost:3000/login" method="post">
              <input type="text"
                placeholder="Username"
                username={this.state.username}
                onChange={this.handleUsername} />
              <input type="text"
                placeholder="Pass"
                password={this.state.password}
                onChange={this.handlePass} />
              <button onClick={this.handleSubmit}>
                Submit
              </button>
            </form>
          </div>
      </div>
  )}
}

// class Test extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//             <h2>The World is Ours</h2>
//                 </div>
//             <p className="App-intro">
//         </p>
//       </div>
//     )
//   }
// }
//
// export default Test
