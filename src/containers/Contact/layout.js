import React, { Component } from "react";
import { Form, Header } from "semantic-ui-react";
import "./contact.css";
//import logo from "../../images/logo.png";

class Layout extends Component {
    render() {
        return (
            <div className="contact-main">
            <div class="contact-content">
              <div className="contact-card">
                {/* <img src={logo} alt="Logo" className="auth-logo" /> */}
                <Header as="h2" color="black" textAlign="center">
                  {this.props.header}
                </Header>
                <Form.Group size="large" className="contact-form" autocomplete="off">
                  {this.props.children}
                </Form.Group>
              </div>
            </div>
          </div>
        )
    }
}

export default Layout