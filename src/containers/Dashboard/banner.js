import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";

class Banner extends Component {
  render() {
    const { list } = this.props;
    let columnLength = list.length;
    if (columnLength > 3) {
      columnLength = 3;
    }
    return (
      <Grid>
        <Grid.Row columns={columnLength} style={{ margin: "50px" }}>
          {(list || []).length > 0
            ? list.map((item, index) => (
                <Grid.Column
                  key={index}
                  style={{
                    padding: "10px",
                    "background-color": "#ffffff",
                    margin: "20px 0px",
                  }}
                >
                  <p style={{ textAlign: "center" }}>{item.name}</p>
                  <Image
                    src={`/file/download/${item.image}`}
                    alt={item.image}
                    height={"300px"}
                    width={"350px"}
                    style={{ borderRadius: "10px" }}
                    floated="left"
                  />
                </Grid.Column>
              ))
            : "no data found"}
        </Grid.Row>
      </Grid>
    );
  }
}
export default Banner;
