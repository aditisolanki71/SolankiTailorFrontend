import React, { Component } from "react";
import {  Link } from 'react-router';
import { Button, Form,Input, Message } from "semantic-ui-react";
import { makeUrl } from '../../helpers/url-manager';
import Layout from "./layout";
import { registerApi } from './../../redux/modules/auth/api'

class Signup extends Component {
  state = {
    data: {},
    success: false
  }
  rendersuccess() {
    return (
      <div>success</div>
    )
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log('hello submit')
    const userObj = { ...this.state.data };
    console.log('userobj',userObj)
    registerApi(userObj).then(response => {
      this.setState({success: true});
    })
    .catch(error => {
      console.log('err',error)
      this.setState({success: false})
    });
  }

  handleChange = change => {
    const newState = {
      data: {
        ...this.state.data,
        ...change
      }
    };
    this.setState(newState);
    console.log('inside handle change data is',this.state.data)
  };
  
  renderform() {
    const { data } = this.state;
    return (
        <Layout header="Sign up to get started">
        <Form className="auth-input-field" onSubmit= {this.handleSubmit}>
        <Input
            className="auth-input-field"
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Name"
            value={data.name}
            onChange= {e => this.handleChange({ name : e.target.value})}
          />
           <Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Username"
            className="auth-input-field"
            value={data.userName}
            onChange= {e => this.handleChange({ userName : e.target.value})}
          />
          <Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Address"
            className="auth-input-field"
            value={data.address}
            onChange= {e => this.handleChange({ address : e.target.value})}
          />
          <Input
            fluid
            icon="envelope"
            iconPosition="left"
            placeholder="E-mail address"
            className="auth-input-field"
            value={data.email}
            onChange= {e => this.handleChange({ email : e.target.value})}
          />
         <Input
            fluid
            icon="phone"
            iconPosition="left"
            placeholder="Phone Number"
            className="auth-input-field"
            value={data.contactNo}
            onChange= {e => this.handleChange({ contactNo : e.target.value})}
          />
          <Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
            className="auth-input-field"
            value={data.password}
            onChange= {e => this.handleChange({ password : e.target.value})}
          />
          <Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Confirm Password"
            type="password"
            className="auth-input-field"
            value={data.password}
            onChange= {e => this.handleChange({ password : e.target.value})}
          />
  
          <Button color="teal" fluid size="huge">
              Sign up
            </Button>
    
          <Message size="big">
          <Link to={makeUrl('login')}>Already Registered?</Link>
          </Message>
          </Form>
        </Layout>
      );
  }
    render() {
      const {success} =this.state;
      return (
        <span>
          <div>
          {success ? this.rendersuccess() : this.renderform()}
          </div>
        </span>
      )
    }
}
export default Signup