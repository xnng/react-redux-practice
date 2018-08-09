import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducer/Counter'
import { createStore } from 'redux'
import { increment, decrement } from './actions';

const store = createStore(reducer)

const render = () => {
    ReactDOM.render(
        <App
            onIncrement={() => store.dispatch(increment())}
            onDecrement={() => store.dispatch(decrement())}
            value={store.getState()} />,
        document.getElementById('root'));
}

render()
store.subscribe(render)
