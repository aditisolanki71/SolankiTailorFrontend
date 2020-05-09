import React, { Fragment } from 'react';
import './index.css'
class Header extends React.Component {
    render() {
        return (
            <Fragment>
                {/* header */}
                <header>
                {/* Logo */}
                <a id="logo" href="index.html">
                    <img src="img/avatar.jpeg" alt="Logo"/>
                    <span>My Website</span>
                </a>
                 {/* main navigation links  */}
                 <nav>
                    <ul>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Sign Up</a></li>
                    </ul>
                </nav>
              </header>
            </Fragment>
        
        )};
}
export default Header;