import React, {Component} from 'react';

class Home extends Component {
  render() {
    return (
      <main className="page-home">
        <div className="jumbotron">
          <div className="container text-center">
            <h1 className="display-3 mb-3">Learning React</h1>
            <p className="lead">This is educational project of me, where I trying to React/Redux</p>
            <hr/>
            <p>GitHub repository: <a href="https://github.com/ihorduchenko/learn-react">https://github.com/ihorduchenko/learn-react</a></p>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-xl-6">
              <div className="card text-center">
                <div className="card-header">
                  <h3>Covered things:</h3>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Listing posts using WordPress REST API</li>
                  <li className="list-group-item">Listing articles from JSON</li>
                  <li className="list-group-item">Using Redux to add new articles</li>
                  <li className="list-group-item">Playing with JS Arrays</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Home;