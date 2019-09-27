import React, { Component } from 'react';

import '../stylesheets/feed.css'

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
  render() { // required
    return (
      <section id="post-list">
        <article>
          <header>
            <div className="user-info">
              <span>Jonas</span>
              <span className="place"> JC</span>
            </div>

            <img src={more} alt="Mais" />
          </header>

          <img src="http://localhost:8000/files/template.png"/>

          <footer>
            <div className="actions">
              <img src={like} alt="" />
              <img src={comment} alt="" />
              <img src={send} alt="" />
            </div>

            <strong>curtidas</strong>

            <p>
              akjsdh
              <span> #sim </span>
            </p>
          </footer>
        </article>
      </section>
    );
  }
}

export default Feed;