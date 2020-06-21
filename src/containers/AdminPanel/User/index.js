import React, { Component, Fragment } from "react";
import { Header } from "semantic-ui-react";
import { listApi as allUser, readApi } from "../../../redux/modules/user";
import HeaderPage from "../../Dashboard/header";
import Footer from "../../Dashboard/footer";
import UserList from "./user-list";
import CreateModal from "./create-modal";
class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formdata: {},
      userlist: [],
      modalOpen: false,
      readOnly: false,
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

  closeModal = () =>
    this.setState({
      formdata: {},
      modalOpen: false,
    });

  handleSubmit = (requestData, id) => {
    console.log("inside handle submit");
    // this.createOrUpdateUser(requestData, id).then(() => {
    //   this.closeModal();
    //   window.__SCHEDULER__.rescheduleAction("fetchTechnicians");
    // });
  };
  setEditModal = (id) => {
    if (id) {
      readApi(id).then((data) => {
        this.setState({
          formdata: { ...data },
          readOnly: true,
          modalOpen: true,
        });
      });
    } else {
      this.setState({
        formdata: {},
        readOnly: false,
        modalOpen: true,
      });
    }
  };

  render() {
    const { userlist } = this.state;
    console.log("user list is", userlist);
    return (
      <Fragment>
        <HeaderPage>
          <Header as="h3" textAlign="center" dividing>
            Users
          </Header>
          <UserList
            list={userlist}
            onEdit={this.setEditModal}
            onRemove={this.removeUser}
            // me={this.props.me}
          />
          {this.state.modalOpen && (
            <CreateModal
              onCreate={this.handleSubmit}
              onClose={this.closeModal}
              formdata={this.state.formdata}
              readOnly={this.state.readOnly}
            />
          )}
        </HeaderPage>
        <Footer />
      </Fragment>
    );
  }
}
export default UserPage;
