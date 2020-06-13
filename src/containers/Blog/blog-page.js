import React, { Component, Fragment } from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import { listApi as allBlog } from "./../../redux/modules/blog";
import HeaderPage from "../Dashboard/header";
import Footer from "../Dashboard/footer";

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
      this.setState({ bloglist: data });
    });
  }
  render() {
    const { bloglist } = this.state;
    let columnLength = bloglist.length;
    if (columnLength > 3) {
      columnLength = 3;
    }
    return (
      <Fragment>
        <HeaderPage>
          <Header as="h3" textAlign="center" dividing>
            From The Blog
          </Header>
          <Grid>
            <Grid.Row columns={columnLength} style={{ margin: "30px" }}>
              {(bloglist || []).length > 0
                ? bloglist.map((item, index) => (
                    <Grid.Column
                      key={index}
                      style={{
                        border: "1px solid black",
                        padding: "10px",
                        "background-color": "#ffffff",
                        margin: "20px 0px",
                      }}
                    >
                      <Image
                        src={`/file/download/${item.image}`}
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
          </Grid>
        </HeaderPage>
        <Footer />
      </Fragment>
    );
  }
}
export default BlogPage;
