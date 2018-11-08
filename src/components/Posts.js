import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post'; 

const API = 'http://wp-rest-api.cloudaccess.host/wp-json/wp/v2/';
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
                <Post rec={post}/>
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