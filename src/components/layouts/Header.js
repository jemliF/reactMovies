import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Header() {
    return (
        <div className="row">
            <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <NavLink className="navbar-brand" to="/">Movies</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/">Home
          <span className="sr-only">(current)</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/new-movie">New Movie</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/new-actor">New Actor</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}
