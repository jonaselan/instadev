import React, { Component } from 'react';
import api from '../services/api';
import io from 'socket.io-client';

import '../stylesheets/feed.css'

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
  state = {
    feed: [],
  };

  // call before mount the component
  async componentDidMount() {
    this.registerToSocket();
    const resp = await api.get('posts');

    this.setState({ feed: resp.data });
  }

  handleLike = id => {
    api.post(`/posts/${id}/like`);
  }

  registerToSocket = () => {
    const socket = io('http://localhost:8000');

    socket.on('post', newPost => {
      this.setState({ feed: [newPost, ...this.state.feed] })
    });

    socket.on('like', likedPost => {
      this.setState({
        feed: this.state.feed.map(post =>
          post._id === likedPost.id ? likedPost : post
        )
      });
    })
  }

  render() { // required
    return (
      <section id="post-list">
        { this.state.feed.map(post => (
          <article key={post._id}>
            <header>
              <div className="user-info">
                <span>{post.author}</span>
                <span className="place"> {post.place} </span>
              </div>

              <img src={more} alt="Mais" />
            </header>

            <img src={`http://localhost:8000/files/${post.image}`} alt={post.description}/>

            <footer>
              <div className="actions">
                <button type="button" onClick={() => this.handleLike(post._id)}>
                  <img src={like} alt="" />
                </button>
                <img src={comment} alt="" />
                <img src={send} alt="" />
              </div>

              <strong>Likes {post.likes}</strong>

              <p>
                {post.description}
                <span> {post.hashtags} </span>
              </p>
            </footer>
          </article>
        )) }
      </section>
    );
  }
}

export default Feed;