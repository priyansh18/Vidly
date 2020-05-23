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

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="Username">Username</label>

            <input
              id="username"
              autoFocus
              value={account.username}
              onChange={this.handleChange}
              name="username"
              htmlFor="Username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input
              id="password"
              value={account.password}
              onChange={this.handleChange}
              name="password"
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
