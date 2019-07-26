import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';

// Class way
class AddTodos extends React.Component {
  state = {
    text: '',
    type: 'No type'
  }

  handleSubmit = (e, dispatch) => {
    let textInput = e.target.text;
    e.preventDefault();
    let { text, type } = this.state;
    if(text.trim().length > 0 && type) {
      dispatch(addTodo(text, type));
      textInput.value = null;
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const dispatch = this.props.dispatch;
    return (
      <form onSubmit={e => this.handleSubmit(e, dispatch)}>
        <div className="input-group mb-3">
          <input onChange={this.handleChange} className="form-control" name="text" type="text" placeholder="Name"/>
          <select onChange={this.handleChange} className="form-control" name="type">
            <option value="No type">No type</option>
            <option value="Default">Default</option>
            <option value="Work">Work</option>
            <option value="Home">Home</option>
          </select>
          <div className="input-group-append">
            <input className="btn btn-primary" type="submit" value="Add" />
          </div>
        </div>
      </form>
    );
  }
}

// Functional way
// const AddTodos = ({ dispatch }) => (
//   <form onSubmit={(e) => {
//     e.preventDefault();
//     let input = e.target.text;
//     let val = input.value;
//     if(val.trim().length > 0) {
//       dispatch(addTodo(val));
//     }
//     input.value = null;
//   }}>
//     <div className="input-group mb-3">
//       <input className="form-control" name="text" type="text" placeholder="Name"/>
//       <div class="input-group-append">
//         <input className="btn btn-primary" type="submit" value="Add" />
//       </div>
//     </div>
//   </form>
// )

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(AddTodos);