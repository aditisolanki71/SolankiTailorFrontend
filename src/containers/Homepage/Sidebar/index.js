import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar ,Grid } from 'semantic-ui-react'
import img1 from '../images/img1.jpg'
const SidebarPage = () => (
 
  <Sidebar.Pushable as={Segment}>
   <Grid celled='internally'>
   <Grid.Row>
      <Grid.Column width={3}>
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'
    >
      <Menu.Item as='a'>
        {/* <Icon name='home' /> */}
        Home
      </Menu.Item>
      <Menu.Item as='a'>
        {/* <Icon name='gamepad' /> */}
        Games
      </Menu.Item>
      <Menu.Item as='a'>
        {/* <Icon name='camera' /> */}
        Channels
      </Menu.Item>
    </Sidebar>
    </Grid.Column>
   
    <Grid.Column width={10}>
    <Sidebar.Pusher>
      <Segment basic>
        <Header as='h3'>Application Content</Header>
        <Image src={img1} width={'auto'} height={'200px'}/>
      </Segment>
    </Sidebar.Pusher>
    </Grid.Column>
    </Grid.Row>
    </Grid>
  </Sidebar.Pushable>
)

export default SidebarPage;



