import React, { Component, Fragment } from 'react'
import { Menu ,Header ,Segment} from 'semantic-ui-react'


class HeaderPage extends Component {
  state = { activeItem: 'home' }


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (<Fragment>
        <Segment clearing inverted style={{ "margin-bottom": "0px"}}>
       
    <Header as='h2' floated='left'>
      Float Left
    </Header>
    <Header as='h2' floated='right'>
    <Menu inverted style={{ "justify-content": "flex-end","margin-bottom": "0px"}}>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='friends'
          active={activeItem === 'blog'}
          onClick={this.handleItemClick}
        />
      </Menu>
    </Header>
           
      </Segment>
      </Fragment>
)
  }
}
export default HeaderPage;