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
        <div className="jumbotron">
          <h1 className="display-4 mb-5">Displaying articles from JSON</h1>
          <button className="btn btn-primary" onClick={this.revert}>Revert</button>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 col-xl-6 offset-xl-3">
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