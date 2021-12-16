import {createStore, combineReducers} from 'redux';
import Home from './Home';
import locations from './location';

const reducer = combineReducers({
  Home,
  locations
});

const store = createStore(reducer);
export default store;
