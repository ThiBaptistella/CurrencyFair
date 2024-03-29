// Holds application state, we only need one store to hold all state
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export default function configureStore(initialState={}) {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}