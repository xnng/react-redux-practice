import React, { Component } from 'react';
import Nav from '../components/Nav';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="container mt-5">
                    <div className="jumbotron">
                        <h1>Quick start</h1>
                        <p className="lead">Looking to quickly add Bootstrap to your project?
                        Use BootstrapCDN, provided for free by the folks at MaxCDN. Using a
                        package manager or need to download the source files?</p>
                        <a className="btn btn-lg btn-primary" href="https://getbootstrap.com/docs/4.0/getting-started/download/">
                            Head to the downloads page.
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
