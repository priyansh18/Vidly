import React, { Component } from "react";
import { logout } from "../services/authService";

class LogoutForm extends Component {
  componentDidMount() {
    logout();
    window.location = "/";
  }

  render() {
    return null;
  }
}

export default LogoutForm;
