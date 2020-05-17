import React , {Component} from 'react'
import Layout from './layout'
import { Label } from "semantic-ui-react";
class ContactPage extends Component {
    render() {
        return (
            <Layout header="Contact" >
            <div className="contact-container">
                <Label as='a' content='Address' icon='map marker alternate'/><br/>
                <Label as='a' content='Solanki Ladies Tailors,Shahibag' />
            </div>
            <div className="contact-container">
                <Label as='a' content='Contact Number' icon='phone'/><br/>
                <Label as='a' content='12345678' />
            </div>
            <div className="contact-container">
                <Label as='a' content='Email' icon='mail'/><br/>
                <Label as='a' content='adtsolanki22@gmail.com'/> 
            </div>
            </Layout>
        )
    }
}
export default ContactPage;