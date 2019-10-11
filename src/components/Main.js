import React, {Component} from 'react';

class Home extends Component {
  render() {
    return (
      <main className="page-home">
        <div className="py-5">
          <div className="container text-center">
            <h1 className="display-3 mb-3">Learning React</h1>
            <p className="lead">This is learning project, where I'm trying to use newest React/Redux stuff.</p>
            <hr/>
            <p>GitHub repository: <a rel="noopener noreferrer" target="_blank" href="https://github.com/ihorduchenko/learn-react">https://github.com/ihorduchenko/learn-react</a></p>
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
                  <li className="list-group-item">Redux TODO lists</li>
                  <li className="list-group-item">React Refs demo</li>
                  <li className="list-group-item">Async Counter</li>
                  <li className="list-group-item">React Hooks</li>
                  <li className="list-group-item">Redux Sagas</li>
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