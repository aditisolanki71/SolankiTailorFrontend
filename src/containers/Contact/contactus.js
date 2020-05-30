import React, { Component, Fragment } from "react";
import ContactPage from "./contactpage";
import CommentPage from "./commentpage";
import { Grid, Header } from "semantic-ui-react";
import HeaderPage from "../Dashboard/Header";
import Footer from "../Dashboard/Footer";
class Contactus extends Component {
  render() {
    return (
      <Fragment>
        <HeaderPage />
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
      </Fragment>
    );
  }
}
export default Contactus;
