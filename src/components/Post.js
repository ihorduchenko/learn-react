import React, {Component} from 'react';
import axios from 'axios';

const API = 'http://react-rest/wp-json/wp/v2/';
const DEFAULT_QUERY = 'posts';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {
        title: {
          rendered: ''
        },
        content: {
          rendered: ''
        }
      }
    }
  }

  componentWillMount() {
    let url = window.location.href.split("/");
    let slug = url.pop() || url.pop();

    axios.get(API + DEFAULT_QUERY + '?slug=' + slug)
      .then(res => this.setState({post: res.data[0]}))
      .catch(err => console.log(err));
  }

  render() {
    const {post} = this.state;
    console.log(post);
    if(!post) return null;
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xl-7 offset-xl-1">
            <h1 className="mb-5">{post.title.rendered}</h1>
            <div className="mb-4">{post.published_date}</div>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </div>
        </div>
      </div>
    )
  }
}

export default Post;