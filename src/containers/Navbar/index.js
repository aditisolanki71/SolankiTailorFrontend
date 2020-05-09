import React, { Fragment } from 'react';
import './index.css'

class  Navbar extends React.Component {
    render() {
        return (
            <Fragment>
            <input type="checkbox" id="check"/>
                <label for="check">
                <i class="fas fa-bars" id="btn"/>
                <i class="fas fa-times" id="cancel"/>
            </label>
            <div class="sidebar">
                <ul>
                    <li><a href="#"><i class="fas fa-qrcode"></i>Dashboard</a></li>
                    <li><a href="#"><i class="fas fa-link"></i>Shortcuts</a></li>
                    <li><a href="#"><i class="fas fa-stream"></i>Overview</a></li>
                    <li><a href="#"><i class="fas fa-calendar-week"></i>Events</a></li>
                    <li><a href="#"><i class="far fa-question-circle"></i>About</a></li>
                    <li><a href="#"><i class="fas fa-sliders-h"></i>Services</a></li>
                    <li><a href="#"><i class="far fa-envelope"></i>Contact</a></li>
                </ul>
            </div>
            </Fragment>
        );
    }
}
export default Navbar;