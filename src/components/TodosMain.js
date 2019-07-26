import React from 'react';
import AddTodos from './todos/AddTodos';
import TodoList from './todos/TodoList';

const TodosMain = () => (
  <div className="App py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2 mb-5">
          <h1 className="mb-3">Add your todo</h1>
          <div className="alert alert-secondary" role="alert">
            Words "money" and "spam" are filtered using redux middleware function.
          </div>
          <AddTodos />
        </div>

        <div className="col-md-12">
          <TodoList />
        </div>
      </div>
    </div>
  </div>
)

export default TodosMain;