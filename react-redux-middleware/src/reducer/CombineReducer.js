import { combineReducers } from 'redux';

import count from './Reducer';

import hello from './Reducer2';

import user from './User'

const rootReducer = combineReducers({
    count,
    hello,
    user
})

export default rootReducer;