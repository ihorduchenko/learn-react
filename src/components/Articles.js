import React, {PureComponent} from 'react'
import ArticleList from './articles/ArticleList'
import articles from './articles/fixtures'

class Articles extends PureComponent {
  state = {
    reverted: false
  };

  render() {
    console.log(this.state.reverted);
    return (
      <React.Fragment>
        <div className="container py-5">
          <h1 className="display-3 mb-3">JSON posts</h1>
          <p className="lead">Displaying articles from JSON</p>
          <hr className="my-4" />
          <p className="mb-5">
            <button className="btn btn-info" onClick={this.revert}>Change order</button>
          </p>
          <div className="row">
            <div className="col-md-8 col-xl-6">
              <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }

  revert = () => {
    this.setState({
      reverted: !this.state.reverted
    })
  }
}

export default Articles