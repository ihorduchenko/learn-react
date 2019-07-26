import React from 'react';
import Todo from './Todo';

const Empty = () => <div className="col-md-12"><div className="alert alert-danger">No todos yet</div></div>;

const Todos = ({ todos, deleteTodo }) => (
  <div className="row">
    <div className="col-md-12">
      <h3 className="mb-3">Your todos list</h3>
    </div>
    {todos.length > 0 ? 
    todos.map(todo => 
      <Todo key={todo.id} {...todo} onClick={() => deleteTodo(todo.id)} />  
    ) 
    : <Empty />}
  </div>
)

export default Todos;