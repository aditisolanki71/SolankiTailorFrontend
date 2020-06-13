import React, { Component, Fragment } from "react";
import { Header, Menu, Segment, Sidebar, Grid } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { makeUrl } from "../../helpers/url-manager";
class HeaderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "home",
      isSidebarVisible: false,
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleClick = () => {
    this.setState({
      isSidebarVisible: !this.state.isSidebarVisible,
    });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Fragment>
        <Segment
          clearing
          inverted
          style={{ "margin-bottom": "0px", "background-color": "#00b5ad" }}
        >
          <Header as="h2" floated="left">
            <FontAwesomeIcon
              icon="bars"
              style={{ "margin-right": "30px", "margin-left": "20px" }}
              onClick={this.handleClick}
            />
            Float Left
          </Header>

          <Header as="h2" floated="right">
            <Menu
              inverted
              style={{
                "justify-content": "flex-end",
                "margin-bottom": "0px",
                "background-color": "#00b5ad",
              }}
            >
              <Link to={makeUrl("/")}>
                <Menu.Item
                  name="home"
                  active={activeItem === "home"}
                  onClick={this.handleItemClick}
                />
              </Link>
              <Link to={makeUrl("contact")}>
                <Menu.Item
                  name="contact"
                  active={activeItem === "contact"}
                  onClick={this.handleItemClick}
                />
              </Link>
              <Link to={makeUrl("blog")}>
                <Menu.Item
                  name="blog"
                  active={activeItem === "blog"}
                  onClick={this.handleItemClick}
                />
              </Link>
              <Link to={makeUrl("register")}>
                <Menu.Item
                  name="register"
                  active={activeItem === "register"}
                  onClick={this.handleItemClick}
                />
              </Link>
              <Link to={makeUrl("login")}>
                <Menu.Item
                  name="login"
                  active={activeItem === "login"}
                  onClick={this.handleItemClick}
                />
              </Link>
            </Menu>
          </Header>
        </Segment>
        <Sidebar.Pushable
          // v-if={this.state.isSidebarVisible}
          as={Segment}
          style={{
            "margin-top": "0px",
            "border-radius": "0px",
            // height: "400px",
          }}
        >
          <Grid celled="internally">
            <Grid.Row>
              <Grid.Column width={2}>
                <Sidebar
                  style={{
                    "background-color": "#00b5ad",
                    "max-height": "200px",
                  }}
                  as={Menu}
                  animation="overlay"
                  icon="labeled"
                  inverted
                  vertical
                  width="thin"
                  visible={this.state.isSidebarVisible}
                  onHide={this.state.isSidebarVisible}
                >
                  <Menu.Item as="a">
                    {/* <Icon name='home' /> */}
                    Traditional
                    {/* choli,chaniyacholi,kurti */}
                  </Menu.Item>
                  <Menu.Item as="a">
                    {/* <Icon name='gamepad' /> */}
                    Wastern
                    {/* gown */}
                  </Menu.Item>
                  <Menu.Item as="a">
                    {/* <Icon name='camera' /> */}
                    TopWear
                    {/* blouse */}
                  </Menu.Item>
                  <Menu.Item as="a">
                    {/* <Icon name='camera' /> */}
                    FAQ
                    {/* blouse */}
                  </Menu.Item>
                </Sidebar>
              </Grid.Column>
              <Grid.Column width={16} style={{ height: "auto" }}>
                <Sidebar.Pusher>
                  <Segment basic>
                    {/* <Header as="h3">Application Content</Header>
                    <Image src={img1} width="70%" /> */}
                    {this.props.children}
                  </Segment>
                </Sidebar.Pusher>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Sidebar.Pushable>
      </Fragment>
    );
  }
}
export default HeaderPage;
