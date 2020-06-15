import React, { Component, Fragment } from "react";
import { Header } from "semantic-ui-react";
import { listApi as allUser } from "../../../redux/modules/user";
import HeaderPage from "../../Dashboard/header";
import Footer from "../../Dashboard/footer";
import UserList from "./user-list";
class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userlist: [],
    };
  }
  componentWillMount() {
    this.fetchAllUser();
  }
  fetchAllUser() {
    return allUser().then((data) => {
      this.setState({ userlist: data });
    });
  }
  render() {
    const { userlist } = this.state;
    return (
      <Fragment>
        <HeaderPage>
          <Header as="h3" textAlign="center" dividing>
            Users
          </Header>
          <UserList
            list={this.state.userlist}
            onEdit={this.setEditModal}
            onRemove={this.removeUser}
            // me={this.props.me}
          />
        </HeaderPage>
        <Footer />
      </Fragment>
    );
  }
}
export default BlogPage;
