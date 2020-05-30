import React, { Component } from "react";
import { Link } from "react-router";
import { Button, Form, Input, Message } from "semantic-ui-react";
import Layout from "./layout";
import { makeUrl } from "../../helpers/url-manager";
import { loginApi } from "./../../redux/modules/auth/api";
class Login extends Component {
  state = {
    data: {},
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello submit");
    const userObj = { ...this.state.data };
    console.log("userobj", userObj);
    loginApi(userObj).then((response) => {
      console.log("response is", response);
      return response;
    });
  };

  handleChange = (change) => {
    const newState = {
      data: {
        ...this.state.data,
        ...change,
      },
    };
    this.setState(newState);
    console.log("inside handle change data is", this.state.data);
  };

  render() {
    const { data } = this.state;
    return (
      <Layout header="Dashboard Log in">
        <Form className="auth-input-field" onSubmit={this.handleSubmit}>
          <Input
            className="auth-input-field"
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Username"
            value={data.username}
            onChange={(e) => this.handleChange({ username: e.target.value })}
          />
          <Input
            className="auth-input-field"
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
            value={data.password}
            onChange={(e) => this.handleChange({ password: e.target.value })}
          />

          {/* <Link to={makeUrl('/')}> */}
          <Button type="submit" color="teal" fluid size="huge">
            Login
          </Button>
          {/* </Link> */}

          <Message size="big">
            <Link to={makeUrl("login")}>Not Registered?</Link>
          </Message>
        </Form>
      </Layout>
    );
  }
}
export default Login;
