import { createStore } from 'redux';
import rootReducer from './reducer/CombineReducer';

const store = createStore(rootReducer)

export default store;