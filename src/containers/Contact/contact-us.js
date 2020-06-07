import React, { Component, Fragment } from "react";
import ContactPage from "./contact-page";
import CommentPage from "./comment-page";
import { Grid, Header } from "semantic-ui-react";
import HeaderPage from "../Dashboard/header";
import Footer from "../Dashboard/footer";
class Contactus extends Component {
  render() {
    return (
      <HeaderPage>
        <Header as="h3" textAlign="center" dividing>
          Contact us
        </Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <ContactPage />
            </Grid.Column>
            <Grid.Column width={8}>
              <CommentPage />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Footer />
      </HeaderPage>
    );
  }
}
export default Contactus;
