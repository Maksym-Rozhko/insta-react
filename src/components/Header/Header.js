import React, { Component } from 'react';
import logo from '../../instfavic.png';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="container h-flex">
                    <Link to='/' className="logo">
                        <img src={logo} alt="logo" />
                    </Link>
                    <nav className="links">
                        <ul>
                            <li>
                                <Link to="/" className="menu__links">
                                    Лента
                                </Link>
                            </li>
                            <li>
                                <Link to="/profile/" className="menu__links">
                                    Профиль
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}