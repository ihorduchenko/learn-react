import { connect } from 'react-redux';
import { deleteTodo } from '../../actions';
import Todos from './Todos';

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  deleteTodo: id => dispatch(deleteTodo(id)) 
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);