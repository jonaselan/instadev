import React, { Component } from 'react';

import api from '../services/api';

import '../stylesheets/new.css';

class New extends Component {
  state = {
    image: null,
    author: '',
    place: '',
    description: '',
    hashtags: '',
  };

  handleSubmit = async e => {
    e.preventDefault();

    const data = new FormData();

    data.append('image', this.state.image);
    data.append('author', this.state.author);
    data.append('place', this.state.place);
    data.append('description', this.state.description);
    data.append('hashtags', this.state.hashtags);

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
      <form id='new-post' onSubmit={this.handleSubmit}>
        <input onChange={this.handleImageChange} type="file" />

        <input type="text" name="author" placeholder="Author"
                onChange={this.handleChange} value={this.state.author}/>
        <input type="text" name="place" placeholder="Place"
                onChange={this.handleChange} value={this.state.place} />
        <input type="text" name="description" placeholder="Description"
                onChange={this.handleChange} value={this.state.description} />
        <input type="text" name="hashtags" placeholder="Hashtags"
                onChange={this.handleChange} value={this.state.hashtags} />

        <button type="submit">Send</button>
      </form>
    );
  }
}

export default New;