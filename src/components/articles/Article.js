import React, {PureComponent} from 'react'

class Article extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
      isOpen: nextProps.defaultOpen
    })
  }

  render() {
    const {article, isOpen, onButtonClick} = this.props;
    const body = isOpen ? <section className="card-text pt-2">{article.text}</section> : '';
    return (
      <div className="card mx-auto my-4">
        <div className="card-header">
          <h2 onClick={this.incrementCounter}>
            {article.title}
          </h2>
          <div className="mb-2">clicked {this.state.count}</div>
          <button onClick={onButtonClick} className="btn btn-primary">
            {isOpen ? 'close' : 'open'}
          </button>
        </div>
        <div className="card-body">
          <h6 className="card-subtitle text-muted">
            creation date: {(new Date(article.date)).toDateString()}
          </h6>
          {body}
        </div>
      </div>
    )
  }

  incrementCounter = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
}


export default Article