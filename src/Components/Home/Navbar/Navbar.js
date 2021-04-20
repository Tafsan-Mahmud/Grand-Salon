import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-navbar ">
                <div class="container">
                    <a class="navbar-brand brand-name" href="#">Grand SALON</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav hover-link ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link   nav-font-clr active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link   nav-font-clr" to="/makeAdmin">Admin</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link   nav-font-clr" to="/dashboard">Dashboard</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link  login-spcl  nav-font-clr" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;