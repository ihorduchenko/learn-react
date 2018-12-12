import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Post extends Component {
  render() {
    const {rec, isOpen, onButtonClick} = this.props;
    const descr = isOpen ? <div className="card-text" dangerouslySetInnerHTML={{__html: rec.excerpt.rendered}}/> : '';
    return (
      <div className="card h-100">
        <div className="card-body">
          <h3 className="card-title">
            <NavLink className="text-success" to={'posts/' + rec.slug}>
              {rec.title.rendered}
            </NavLink>
          </h3>
          <div className="mb-3">{(new Date(rec.date)).toDateString()}</div>
          <div className="mb-3">
            <button className="btn btn-success btn-sm" onClick={onButtonClick}>{isOpen ? 'Close' : 'Open'}</button>
          </div>
          {descr}
        </div>
      </div>
    );
  }
}

export default Post;
