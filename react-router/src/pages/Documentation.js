import React, { Component } from 'react';
import Nav from '../components/Nav';

export default class Documentation extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="container mt-5">
                    <div className="jumbotron">
                        <h1>Documentation</h1>
                        <p className="lead">Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with BootstrapCDN and a template starter page.</p>
                    </div>
                </div>
            </div>
        )
    }
}
