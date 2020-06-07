import React from "react";
import { Header, Image, Menu, Segment, Sidebar, Grid } from "semantic-ui-react";
import img1 from "./../../images/img1.jpg";
const SidebarPage = () => (
  <Grid celled="internally">
    <Grid.Row>
      <Grid.Column width={10}>
        <Sidebar.Pusher>
          <Segment basic>
            <Header as="h3">Application Content</Header>
            <Image src={img1} />
          </Segment>
        </Sidebar.Pusher>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default SidebarPage;
