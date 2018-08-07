import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import { HashRouter as Router, Route } from 'react-router-dom';
import Documentation from './pages/Documentation';
import Examples from './pages/Examples';
import Home from './pages/Home';

export default class componentName extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Route exact path="/" component={Home} />
                    <Route path="/doc" component={Documentation} />
                    <Route path="/examples" component={Examples} />
                </div>
            </Router>
        )
    }
}
