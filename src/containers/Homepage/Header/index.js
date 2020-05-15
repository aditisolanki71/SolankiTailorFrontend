import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'


class HeaderPage extends Component {
  state = { activeItem: 'home' }


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
             <Menu inverted style={{ "justify-content": "flex-end","margin-bottom": "0px"
             }}>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
      </Menu>
)
  }
}
export default HeaderPage;