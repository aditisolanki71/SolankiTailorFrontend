import React, { Component, Fragment } from "react";
import { Grid, Image, Header, Icon, Label } from "semantic-ui-react";
import HeaderPage from "../Dashboard/header";
import Footer from "../Dashboard/footer";
import img1 from "./../../images/img1.jpg";

class BlogDetailPage extends Component {
  render() {
    return (
      <HeaderPage>
        <Header as="h3" textAlign="center" dividing>
          From The Blog
        </Header>
        <Grid>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={4}>
            <Image src={img1} size="small" />
          </Grid.Column>
          <Grid.Column width={9}>
            <h1>heading</h1>
            <p>
              Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex
              eam alia facete scriptorem, est autem aliquip detraxit at. Te eum
              doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia
              facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
              referrentur at, cu epicurei appellantur vix. Cum ea laoreet
              recteque electram, eos choro alterum definiebas in. Vim dolorum
              definiebas an. Mei ex natum rebum iisque. Te eum doming eirmod,
              nominati pertinacia argumentum ad his. Ex eam alia facete
              scriptorem, est autem aliquip detraxit at. Usu ocurreret
              referrentur at, cu epicurei appellantur vix. Cum ea laoreet
              recteque electram, eos choro alterum definiebas in. Vim dolorum
              definiebas an. Mei ex natum rebum iisque. Te eum doming eirmod,
              nominati pertinacia argumentum ad his. Ex eam alia facete
              scriptorem, est autem aliquip detraxit at. Usu ocurreret
              referrentur at, cu epicurei appellantur vix. Cum ea laoreet
              recteque electram, eos choro alterum definiebas in. Vim dolorum
              definiebas an. Mei ex natum rebum iisque. Te eum doming eirmod,
              nominati pertinacia argumentum ad his. Ex eam alia facete
              scriptorem, est autem aliquip detraxit at. Usu ocurreret
              referrentur at, cu epicurei appellantur vix. Cum ea laoreet
              recteque electram, eos choro alterum definiebas in. Vim dolorum
              definiebas an. Mei ex natum rebum iisque.
            </p>

            <div style={{ margin: "10px 10px 0px" }}>
              <Label as="a">
                <Icon name="calendar" />
                Date
              </Label>
            </div>
            <div style={{ margin: "10px 10px 0px" }}>
              <Label as="a">
                <Icon name="thumbs up outline" />
                Like
              </Label>
              <Label as="a">
                <Icon name="comment outline" />
                Comment
              </Label>
            </div>
          </Grid.Column>
          <Grid.Column width={1}></Grid.Column>
        </Grid>
        <Footer />
      </HeaderPage>
    );
  }
}
export default BlogDetailPage;
