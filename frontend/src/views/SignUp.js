import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import '../stylesheets/sign_up.scss';
import '../stylesheets/shared/form.scss';

import Logo from "../assets/instadev.png";
import api from '../services/api';
import { login } from "../services/auth";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { username, email, password } = this.state;
    if (!username || !email || !password) {
      this.setState({ error: "Fill all fields." });
      return;
    }

    try {
      const response = await api.post("/signup", { username, email, password });
      login(response.data.token);
      this.props.history.push("/");
    } catch (err) {
      this.setState({ error: "An error has occurred." });
    }
  };

  render() {
    return (
      <div id="form-singup">
        <form onSubmit={this.handleSignUp} className="form">
          <img src={Logo} className="header-img" alt="logo" />
          {this.state.error && <p className="error-msg">{this.state.error}</p>}
          <input
            className="input-signup" type="text" placeholder="Username"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <input
            className="input-signup" type="email" placeholder="Email"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            className="input-signup" type="password" placeholder="Password"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Register</button>
          <hr />

          <Link to="/signin"> Already have a account? </Link>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUp);