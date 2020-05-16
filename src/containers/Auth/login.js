import React, { Component } from "react";
import {  Link } from 'react-router';
import { Button, Form, Message } from "semantic-ui-react";
import Layout from "./layout";
import { makeUrl } from '../../helpers/url-manager';

class Login extends Component {
  render() {
    return (
      <Layout header="Dashboard Log in">
        <Form.Input
          fluid
          icon="user"
          iconPosition="left"
          placeholder="E-mail address"
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

        <Link to={makeUrl('/')}>
          <Button color="teal" fluid size="huge">
            Login
          </Button>
        </Link>

        <Message size="big">
        <Link to={makeUrl('register')}>Not Registered?</Link>
        </Message>
      </Layout>
    );
  }
}
export default Login;