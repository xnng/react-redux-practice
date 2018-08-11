import { combineReducers } from 'redux';

import counter from './Counter';

import user from './User';

const rootReducer = combineReducers({
    counter,
    user
})

export default rootReducer;