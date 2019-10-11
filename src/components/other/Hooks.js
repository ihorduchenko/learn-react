import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {API_URL, DEFAULT_QUERY} from '../../constants';

const {log} = console;

const Hooks = () => {
  const [count, handleCount] = useState(0);
  const [postsLoaded, triggerLoading] = useState(false);
  const [postsLoading, setPostsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = () => {
      setPostsLoading(true);
      let request = axios.get(API_URL + DEFAULT_QUERY);
      request.then(
        res => {
          setPosts(res.data)
        }
      ).then(
        setPostsLoading(false)
      );
    }
    postsLoaded && fetchPosts();
  }, [postsLoaded, postsLoading])

  return (
    <div className="container py-5">
      <h1 className="display-3 mb-3">Hooks</h1>
      <p className="lead">Using React Hooks</p>
      <hr className="my-4" />

      <div className="row mb-5">
        <div className="col-auto">
          <h3>useState + counter</h3>
          <div className="input-group">
            <div className="input-group-prepend">
              <button 
                className="btn btn-primary" 
                type="button"
                onClick={() => handleCount(count - 1)}
              >-</button>
            </div>
            <input type="text" className="form-control text-center" readOnly value={count} />
            <div className="input-group-append">
              <button 
                className="btn btn-primary" 
                type="button"
                onClick={() => handleCount(count + 1)}
              >+</button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <h3>Fetch posts using useEffect & axios</h3>
        {!postsLoaded && (
          <button 
            className="btn btn-primary mb-3" 
            type="button"
            onClick={() => {
              setPostsLoading(true);
              triggerLoading(true);
            }}
          >
            Fetch
          </button>  
        )}
        { postsLoading ? 'Loading' : (
          posts.length > 0 && posts.map((p, i) => (
            <div key={i}>
              {p.title.rendered}
            </div>  
          ))
        )}
      </div>
    </div>
  )
}

export default Hooks;