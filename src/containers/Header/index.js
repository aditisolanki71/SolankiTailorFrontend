import React, { Fragment } from 'react';
import './index.css'
class Header extends React.Component {
    render() {
        return (
            <Fragment>
                <header>
                <a id="logo" href="index.html">
                    <img src="img/avatar.jpeg" alt="Logo"/>
                </a>
                 <nav>
                    <ul>
                        <li><a href="#">Sign Up</a></li>
                        <li><a href="#">Log In</a></li>
                    </ul>
                </nav>
              </header>
            </Fragment>    
        )};
}
export default Header;