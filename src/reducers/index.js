import * as types from '../actions/types';
import { combineReducers } from 'redux';

const todos = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          type: action.payload.type
        }
      ]
    case types.DELETE_TODO:
      let newItems = state.filter(el => el.id !== action.payload.id);
      return newItems;
    default:
      return state;  
  }
};

const rootReducer = combineReducers({
  todos
});

export default rootReducer;

