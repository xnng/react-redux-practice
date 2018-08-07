import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducer/Counter'
import { createStore } from 'redux'

const store = createStore(reducer)

const handleIncrement = () => {
    store.dispatch({ type: "INCREMENT" })
}

const handleDecrement = () => {
    store.dispatch({ type: "DECREMENT" })
}

const render = () => {
    ReactDOM.render(
        <App
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            value={store.getState()} />,
        document.getElementById('root'));
}

render()
store.subscribe(render)
