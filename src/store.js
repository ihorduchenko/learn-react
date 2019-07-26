import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { forbiddenWordsMiddleware } from "./middleware";

const storeEnhancers = composeWithDevTools || compose;

const store = createStore(rootReducer, storeEnhancers(applyMiddleware(forbiddenWordsMiddleware)));

export default store;