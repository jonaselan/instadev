import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/instadev.png";

import '../stylesheets/sign_up.css';

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: ""
  };

  handleSignUp = e => {
    e.preventDefault();
    alert("Eu vou te registrar");
  };

  render() {
    return (
      <div id="form-singup">
        <form onSubmit={this.handleSignUp}>
          <img src={Logo} id="logo-singup" alt="logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            className="input-signup"
            type="text"
            placeholder="Nome de usuário"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <input
            className="input-signup"
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            className="input-signup"
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Cadastrar grátis</button>
          <hr />

          <Link to="/">Fazer login</Link>
        </form>
      </div>
    );
  }
}

export default SignUp;