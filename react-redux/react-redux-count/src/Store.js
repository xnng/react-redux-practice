import { createStore } from 'redux';
import rootReducer from './CombineReducer';

const store = createStore(rootReducer)

export default store;