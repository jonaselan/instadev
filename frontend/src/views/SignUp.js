import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Logo from "../assets/instadev.png";
import api from '../services/api';
import '../stylesheets/sign_up.scss';

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
      await api.post("/signup", { username, email, password });
      this.props.history.push("/");
    } catch (err) {
      console.log(err);
      this.setState({ error: "An error has occurred." });
    }
  };

  render() {
    return (
      <div id="form-singup">
        <form onSubmit={this.handleSignUp}>
          <img src={Logo} id="logo-singup" alt="logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            className="input-signup" type="text" placeholder="Username"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <input
            className="input-signup" type="email" placeholder="email"
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