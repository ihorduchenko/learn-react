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
          <h1 className="display-3 mb-3">Displaying articles from JSON</h1>
          <p className="mb-5">
            <button className="btn btn-info" onClick={this.revert}>Revert</button>
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