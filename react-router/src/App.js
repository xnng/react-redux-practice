import React, { Component } from 'react';
import Home from './pages/Home'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

export default class componentName extends Component {
    render() {
        return (
            <div>
                <Home />
                
            </div>
        )
    }
}
