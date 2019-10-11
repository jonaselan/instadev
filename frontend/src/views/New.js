import React, { Component } from 'react';

import api from '../services/api';

import '../stylesheets/new.scss';
import '../stylesheets/shared/form.scss';

class New extends Component {
  state = {
    image: null,
    place: '',
    description: '',
  };

  handleSubmit = async e => {
    e.preventDefault();

    const data = new FormData();

    data.append('image', this.state.image);
    data.append('place', this.state.place);
    data.append('description', this.state.description);

    await api.post('posts', data);

    this.props.history.push('/');
  }

  handleImageChange = e => {
    this.setState({ image: e.target.files[0] });
  }

  // arrow function for use the keyword "this"
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() { // required
    return (
      <form id='new-post' className="form" onSubmit={this.handleSubmit}>
        <input onChange={this.handleImageChange} type="file" />

        <input type="text" name="place" placeholder="Place"
                onChange={this.handleChange} value={this.state.place} />
        <input type="text" name="description" placeholder="Description"
                onChange={this.handleChange} value={this.state.description} />

        <button type="submit">Post it</button>
      </form>
    );
  }
}

export default New;