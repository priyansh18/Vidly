import React, { Component } from "react";

class LoginForm extends Component {
  username = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Submitted");
    const username = this.username.current.value;
  };
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="Username">Username</label>

            <input
              id="username"
              autoFocus
              ref={this.username}
              htmlFor="Username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
