import React from 'react';
import AddTodos from './todos/AddTodos';
import TodoList from './todos/TodoList';

const TodosMain = () => (
  <div className="App py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-8 mb-5">
          <h1 className="display-3 mb-3">Todo List</h1>
          <p className="lead">Add your todo</p>
          <hr className="my-4" />
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