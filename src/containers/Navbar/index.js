import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css'

class  Navbar extends React.Component {
    render() {
        return (
            <Fragment>
            <input type="checkbox" id="check"/>
                <label for="check">
                <i className="fa" id="btn">
              <FontAwesomeIcon icon="bars" />
            </i>
            <i className="fa" id="cancel">
              <FontAwesomeIcon icon="times" />
            </i>
                {/* <i class="fas fa-bars" id="btn"/>
                <i class="fas fa-times" id="cancel"/> */}
            </label>
            <div class="sidebar">
            <header>My App</header>
                <ul>
                    <li><a href="#"><i class="fas fa-qrcode"></i>Dashboard</a></li>
                    <li><a href="#"><i class="fas fa-calendar-week"></i>Women</a></li>
                    {/* <li><a href="#"><i class="far fa-question-circle"></i>Men</a></li>
                    <li><a href="#"><i class="far fa-envelope"></i>Kids</a></li> */}
                    <li><a href="#"><i class="far fa-question-circle"></i>About Us</a></li>
                    <li><a href="#"><i class="far fa-question-circle"></i>FAQ</a></li>
                    <li><a href="#"><i class="far fa-envelope"></i>Contact Us</a></li>
                </ul>
            </div>
            </Fragment>
        );
    }
}
export default Navbar;