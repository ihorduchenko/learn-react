import React, { Component } from 'react';
import axios from 'axios';

const API = 'http://react-rest/wp-json/wp/v2/';
const DEFAULT_QUERY = 'posts';

class Post extends Component{
	constructor(props){
		super(props);

		this.state = {
			post: {}
		}
	}

	componentWillMount() {
    var url = window.location.href.split("/");
    var slug = url.pop() || url.pop();

    axios.get(API + DEFAULT_QUERY + '?slug=' + slug)
		.then(res => this.setState({ post: res.data[0] }))
  }

  render(){
  	const { post } = this.state;
  	console.log(post);
  	return(
  		<div className="container py-5">
				<h1 className="mb-5">{post.date_gmt}</h1>
  		</div>
  	)
  }
}

export default Post;