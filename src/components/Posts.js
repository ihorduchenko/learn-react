import React, {Component} from 'react';
import axios from 'axios';
import Post from './Post';

const API = '//wp-rest-api.cloudaccess.host/wp-json/wp/v2/';
const DEFAULT_QUERY = 'posts?per_page=100';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      reverted: false,
      openId: null
    };
  }

  componentWillMount() {
    axios.get(API + DEFAULT_QUERY)
      .then(res => this.setState({posts: res.data}));
  }


  render() {
    const posts = this.state.reverted ? this.state.posts : this.state.posts.slice().reverse();
    // console.log(posts);

    if (posts.length > 0) {
      return (
        <div className="container py-5">
          <h1 className="display-1 mb-5">Posts</h1>
          <div className="pb-5">
            <button className="btn btn-success btn-lg" onClick={this.revert}>Revert</button>
          </div>
          <div className="row">
            {posts.map(post =>
              <div className="col-md-6 col-xl-4 mb-4" key={post.id}>
                <Post
                  isOpen={this.state.openId === post.id}
                  onButtonClick={this.toggleDescr.bind(this, post.id)}
                  rec={post}
                />
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

  toggleDescr = openId => this.setState({
    openId: this.state.openId === openId ? null : openId
  })
}

export default Posts;