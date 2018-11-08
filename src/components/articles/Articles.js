import React, {PureComponent} from 'react'
import ArticleList from './ArticleList'
import articles from './fixtures'

class Articles extends PureComponent {
    state = {
        reverted: false
    }
    render() {
        console.log('---', 1);
        console.log(this.state.reverted);
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">
                        App name
                        <button className="btn" onClick = {this.revert}>Revert</button>
                    </h1>
                </div>
                <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles}/>
            </div>
        )
    }

    revert = () => {
        this.setState({
            reverted: !this.state.reverted
        })
    }
}

export default Articles