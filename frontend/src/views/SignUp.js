import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Logo from "../assets/instadev.png";
import api from '../services/api';
import '../stylesheets/sign_up.css';

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
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
      return;
    }

    try {
      await api.post("/signup", { username, email, password });
      this.props.history.push("/");
    } catch (err) {
      console.log(err);
      this.setState({ error: "Ocorreu um erro ao registrar sua conta." });
    }
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

export default withRouter(SignUp);