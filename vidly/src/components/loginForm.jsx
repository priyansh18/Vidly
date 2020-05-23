import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Submitted");
    const username = this.username.current.value;
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account.username = e.currentTarget.value;
    this.setState({ account });
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
              value={this.state.account.username}
              onChange={this.handleChange}
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
