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
                {/* <i class="fas fa-bars" id="btn"/>
                <i class="fas fa-times" id="cancel"/> */}
            </label>
            <div class="sidebar">
            <header>My App</header>
                <ul>
                    <li><a href="#"><i class="fas fa-qrcode"></i>Dashboard</a></li>
                    <li><a href="#"><i class="fas fa-calendar-week"></i>Events</a></li>
                    <li><a href="#"><i class="far fa-question-circle"></i>About</a></li>
                    <li><a href="#"><i class="far fa-envelope"></i>Contact</a></li>
                </ul>
            </div>
            </Fragment>
        );
    }
}
export default Navbar;