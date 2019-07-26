import * as types from './types';

let nextId = 0;

export const addTodo = (text, type) => ({
  type: types.ADD_TODO,
  payload: {
    id: nextId++,
    text,
    type
  }
});

export const deleteTodo = id => ({
  type: types.DELETE_TODO,
  payload: {
    id
  }
});