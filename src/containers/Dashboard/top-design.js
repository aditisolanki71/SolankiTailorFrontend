import React, { Component, Fragment } from "react";
import { Grid, Image, Header } from "semantic-ui-react";

import img1 from "./../../images/img1.jpg";
import img2 from "./../../images/img2.jpg";
import img4 from "./../../images/img4.jpg";
class Topdesign extends Component {
  render() {
    return (
      <Fragment>
        <Header as="h3" textAlign="center" dividing>
          Top Design
        </Header>
        <Grid>
          <Grid.Row columns={5} style={{ paddingLeft: "15px" }}>
            <Grid.Column>
              <Image src={img1} height={"300px"} width={"350px"} />
            </Grid.Column>
            <Grid.Column>
              <Image src={img2} height={"300px"} width={"350px"} />
            </Grid.Column>
            <Grid.Column>
              <Image src={img4} height={"300px"} width={"350px"} />
            </Grid.Column>
            <Grid.Column>
              <Image src={img1} height={"300px"} width={"350px"} />
            </Grid.Column>
            <Grid.Column>
              <Image src={img2} height={"300px"} width={"350px"} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Fragment>
    );
  }
}
export default Topdesign;
