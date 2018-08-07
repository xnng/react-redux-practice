import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">
                        <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" />&nbsp;
                         Bootstrap
                    </a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Documentation</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Examples</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
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
