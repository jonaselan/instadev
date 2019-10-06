import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import '../stylesheets/sign_in.scss';

import Logo from "../assets/instadev.png";
import api from "../services/api";
import { login } from "../services/auth";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Fill email and password" });
      return;
    }

    try {
      const response = await api.post("/signin", { email, password });
      login(response.data.token);
      this.props.history.push("/");
    } catch (err) {
      this.setState({ error: "Email or password incorrect" });
    }
  };

  render() {
    return (
      <div id="form-singin">
        <form onSubmit={this.handleSignIn}>
          <img src={Logo} alt="logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="email" placeholder="email"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password" placeholder="password"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Enter</button>
          <hr />
          <Link to="/signup"> Create account </Link>
        </form>
      </div>
    );
  }
}

export default withRouter(SignIn);