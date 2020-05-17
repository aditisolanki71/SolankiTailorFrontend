import React , {Component} from 'react'
import Layout from './layout'
import {  Link } from 'react-router';
import { Form , TextArea ,Button } from "semantic-ui-react";
import { makeUrl } from '../../helpers/url-manager';

class CommentPage extends Component {
    render() {
        return (
            <Layout header="Leave Your Comments">
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
              <Form>
              <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
              </Form>
              <Link to={makeUrl('/')}>
                <Button color="teal" fluid size="small" style={{"margin-top": "15px","width": "50%"}}>
                  Send Message 
                </Button>
              </Link>
            </Layout>
        )
    }
}
export default CommentPage;