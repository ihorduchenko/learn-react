import React, { Component } from 'react';
import { Router, Route, NavLink } from "react-router-dom";
import axios from 'axios';

import logo from '../logo.svg';

const API = 'http://react-rest/wp-json/wp/v2/';
const DEFAULT_QUERY = 'posts?per_page=100';

class Posts extends Component{
	constructor(props) {
    super(props);

    this.state = {
      posts: [],
      reverted: false
    };
  }

  componentWillMount() {
		axios.get(API + DEFAULT_QUERY)
		.then(res => this.setState({posts: res.data}));
  }

  

  render(){
  	const posts = this.state.reverted ? this.state.posts : this.state.posts.slice().reverse();
		console.log(posts);

		if(posts.length > 0) {
      return (
        <div className="container py-5">
          <h1 className="mb-5">Posts</h1>
          <div className="pb-5">
            <button className="btn btn-primary" onClick={this.revert}>Revert</button>
          </div>
          <div className="row">
            {posts.map(post =>
              <div className="col-md-6 col-xl-4 mb-4" key={post.id}>
                <div className="card h-100">
                  <div className="card-body">
                    <h3 className="card-title">
                      <NavLink className="text-success" to={'posts/' + post.slug }>
                        {post.title.rendered}
                      </NavLink>
                    </h3>
                    <div className="card-text" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )
    } else {
		  return <div className="container py-5">Loading...</div>;
    }
  }


  revert = () => this.setState({reverted: !this.state.reverted});
}

export default Posts;