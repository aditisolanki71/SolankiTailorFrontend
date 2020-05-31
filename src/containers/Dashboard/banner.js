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
        <Grid.Row columns={3}>
          {(list || []).length > 0
            ? list.map((item, index) => (
                <Grid.Column key={index}>
                  <p>{item.name}</p>
                  <Image src={img2} height={"350px"} width={"350px"} />
                </Grid.Column>
              ))
            : "no data found"}
        </Grid.Row>
      </Grid>
    );
  }
}
export default Banner;
