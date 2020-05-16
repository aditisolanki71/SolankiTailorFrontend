import React, { Component } from "react";
import {  Link } from 'react-router';
import { Button, Form, Message } from "semantic-ui-react";
import { makeUrl } from '../../helpers/url-manager';

import Layout from "./layout";

class Signup extends Component {
    render() {
        return (
            <Layout header="Sign up to get started">
             <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Name"
                className="auth-input-field"
              />
               <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Username"
                className="auth-input-field"
              />
              <Form.Input
                fluid
                icon="envelope"
                iconPosition="left"
                placeholder="E-mail address"
                className="auth-input-field"
              />
             <Form.Input
                fluid
                icon="phone"
                iconPosition="left"
                placeholder="Phone Number"
                className="auth-input-field"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                className="auth-input-field"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Confirm Password"
                type="password"
                className="auth-input-field"
              />
      
            <Link to={makeUrl('/')}>
                <Button color="teal" fluid size="huge">
                  Sign up
                </Button>
              </Link>
      
              <Message size="big">
              <Link to={makeUrl('login')}>Already Registered?</Link>
              </Message>
            </Layout>
          );
    }
}
export default Signup