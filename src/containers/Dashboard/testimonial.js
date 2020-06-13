import React, { Component, Fragment } from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import img4 from "./../../images/img4.jpg";
class Testimonial extends Component {
  render() {
    const { list } = this.props;
    let columnLength = list.length;
    if (columnLength > 3) {
      columnLength = 3;
    }
    return (
      <Fragment>
        <Header as="h3" textAlign="center" dividing>
          What People Says
        </Header>

        <Grid>
          <Grid.Row columns={columnLength} style={{ margin: "10px 100px" }}>
            {(list || []).length > 0
              ? list.map((item, index) => (
                  <Grid.Column key={index}>
                    <Image
                      src={img4}
                      size="tiny"
                      height="30px"
                      circular
                      floated="left"
                    />
                    <span>{item.description}</span>
                    <h1>{item.name}</h1>
                  </Grid.Column>
                ))
              : "no data found"}
          </Grid.Row>
        </Grid>
      </Fragment>
    );
  }
}
export default Testimonial;
