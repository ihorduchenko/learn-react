import * as types from "../actions/types";

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === types.ADD_TODO) {
        
        const foundWord = forbiddenWords.filter(word =>
          action.payload.text.includes(word)
        );
        if (foundWord.length) {
          return dispatch({ type: "FOUND_BAD_WORD" });
        }
      }
      return next(action);
    };
  };
}