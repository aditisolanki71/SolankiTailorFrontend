import React, { Component, Fragment } from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import { listApi as allBlog } from "./../../redux/modules/blog";
import HeaderPage from "../Dashboard/header";
import Footer from "../Dashboard/footer";

import img1 from "./../../images/img1.jpg";
import img2 from "./../../images/img2.jpg";
import img4 from "./../../images/img4.jpg";
class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bloglist: [],
    };
  }
  componentWillMount() {
    this.fetchBlogData();
  }
  fetchBlogData() {
    return allBlog().then((data) => {
      console.log("data blogg", data);
      this.setState({ bloglist: data });
      console.log("data blog3", this.state.bloglist);
    });
  }
  render() {
    const { bloglist } = this.state;
    return (
      <Fragment>
        <HeaderPage />
        <Header as="h3" textAlign="center" dividing>
          From The Blog
        </Header>
        <Grid>
          <Grid.Row columns={bloglist.length} style={{ margin: "30px" }}>
            {(bloglist || []).length > 0
              ? bloglist.map((item, index) => (
                  <Grid.Column
                    key={index}
                    style={{ border: "1px solid black", padding: "10px" }}
                  >
                    <Image
                      src={img4}
                      size="tiny"
                      height="30px"
                      circular
                      floated="left"
                    />
                    <h1>{item.name}</h1>
                    <span>{item.description}</span>
                    <h5>{item.date}</h5>
                  </Grid.Column>
                ))
              : "no data found"}
          </Grid.Row>
          {/* <Grid.Row columns={3} style={{ margin: "30px" }}>
            <Grid.Column style={{ border: "1px solid black", padding: "10px" }}>
              <Image src={img1} circular size="small" centered />
              <p>
                Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex
                eam alia facete scriptorem, est autem aliquip detraxit at.
              </p>
            </Grid.Column>
            <Grid.Column style={{ border: "1px solid black", padding: "10px" }}>
              <Image src={img2} circular size="small" centered />
              <p>
                Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex
                eam alia facete scriptorem, est autem aliquip detraxit at.
              </p>
            </Grid.Column>
            <Grid.Column style={{ border: "1px solid black", padding: "10px" }}>
              <Image src={img4} circular size="small" centered />
              <p>
                Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex
                eam alia facete scriptorem, est autem aliquip detraxit at.
              </p>
            </Grid.Column>
          </Grid.Row> */}
        </Grid>
        <Footer />
      </Fragment>
    );
  }
}
export default BlogPage;
