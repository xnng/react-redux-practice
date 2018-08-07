import React, { Component } from 'react';

export default class Documentation extends Component {

    onNavigateHome = () => {
        console.log(this.props)
        this.props.history.push("/")
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="jumbotron">
                    <h1>Documentation</h1>
                    <p className="lead">Get started with Bootstrap, the world’s most popular framework
                     for building responsive, mobile-first sites, with BootstrapCDN and a template starter page.</p>
                    <button className="btn btn-lg btn-primary" onClick={this.onNavigateHome}>
                        Go Home
                    </button>
                </div>
            </div>
        )
    }
}
