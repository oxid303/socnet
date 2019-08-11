import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appReducer from './appReducer';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
  app: appReducer,
  profile: profileReducer,
  dialogs: dialogsReducer,
  users: usersReducer,
  auth: authReducer,
  form: formReducer
});

// let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
