import { combineReducers } from 'redux';

import count from './Reducer';

import hello from './Reducer2';

const rootReducer = combineReducers({
    count,
    hello
})

export default rootReducer;