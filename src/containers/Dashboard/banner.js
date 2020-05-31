import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";

import img1 from "./../../images/img1.jpg";
import img2 from "./../../images/img2.jpg";
import img4 from "./../../images/img4.jpg";

class Banner extends Component {
  render() {
    const { list } = this.props;
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}></Grid.Column>
          {(list || []).length > 0
            ? list.map((item, index) => (
                <Grid.Column key={index} width={4} style={{ padding: "20px" }}>
                  <p style={{ textAlign: "center" }}>{item.name}</p>
                  <Image
                    src={img2}
                    height={"300px"}
                    width={"350px"}
                    style={{ borderRadius: "10px" }}
                  />
                </Grid.Column>
              ))
            : "no data found"}
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
export default Banner;
