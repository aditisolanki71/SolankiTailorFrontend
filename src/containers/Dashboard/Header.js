import React, { Component, Fragment } from 'react'
import { Menu ,Header ,Segment} from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  Link } from 'react-router';
import { makeUrl } from './../../helpers/url-manager';
class HeaderPage extends Component {
  state = { 
      activeItem: 'home' ,
      isSidebarVisible: false
    }


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  componentDidMount() {
    console.log('did ',this.isSidebarVisible)
  }
  showSidebar = () => {   
    console.log('sideebar',this.isSidebarVisible)
    this.setState({ isSidebarVisible: true })
    console.log('sidebar',this.isSidebarVisible)
  }
  render() {
    const { activeItem } = this.state

    return (<Fragment>
        <Segment clearing inverted style={{ "margin-bottom": "0px"}}>
       
    <Header as='h2' floated='left'>
    <FontAwesomeIcon
     icon="bars"
     style={{"margin-right": "30px","margin-left" : "20px"}} 
     onClick={this.showSidebar}/>
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
          name='blog'
          active={activeItem === 'blog'}
          onClick={this.handleItemClick}
        /> 
        <Link to={makeUrl('register')}>
        <Menu.Item
        name='register'
        active={activeItem === 'register'}
        onClick={this.handleItemClick}
      />
      </Link>
      <Link to={makeUrl('login')}>
       <Menu.Item
          name='login'
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
        />
        </Link>
      </Menu>
    </Header>
           
      </Segment>
      </Fragment>
)
  }
}
export default HeaderPage;