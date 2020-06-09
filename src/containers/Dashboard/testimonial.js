import React, { Component, Fragment } from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import img1 from "./../../images/img1.jpg";
import img2 from "./../../images/img2.jpg";
import img4 from "./../../images/img4.jpg";
class Testimonial extends Component {
  render() {
    const { list } = this.props;
    return (
      <Fragment>
        <Header as="h3" textAlign="center" dividing>
          What People Says
        </Header>

        <Grid>
          <Grid.Row columns={list.length} style={{ margin: "10px 100px" }}>
            {/* <Grid.Column width={2}></Grid.Column> */}
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
            {/* <Grid.Column width={4}>
              <Image
                src={img4}
                size="tiny"
                height="30px"
                circular
                floated="left"
              />
              <span>
                Top Aligned hello aditi solanki this is image 2 cont Top Aligned
                hello aditi solanki this is image 2 content hello aditi
              </span>
              <h1>Arjun Solanki</h1>
            </Grid.Column>
            <Grid.Column width={4}>
              <Image
                src={img1}
                size="tiny"
                height="30px"
                circular
                floated="left"
              />
              <span>
                Top Aligned hello aditi solanki this is image 2 cont Top Aligned
                hello aditi solanki this is image 2 content hello aditi
              </span>
              <h1>Moni Solanki</h1>
            </Grid.Column>
            <Grid.Column width={4}> 
              <Image
                src={img2}
                size="tiny"
                height="30px"
                circular
                floated="left"
              />
              <span>
                Top Aligned hello aditi solanki this is image 2 content hello
                aditi solankithis is image 2 content. Top Aligned hello aditi
              </span>
              <h1>Aditi Solanki</h1>
    </Grid.Column> */}
            {/* <Grid.Column width={2}></Grid.Column> */}
          </Grid.Row>
        </Grid>
      </Fragment>
    );
  }
}
export default Testimonial;
