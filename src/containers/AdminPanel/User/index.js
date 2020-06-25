import React, { Component, Fragment } from "react";
import { Header } from "semantic-ui-react";
import {
  listApi as allUser,
  readApi,
  createApi,
  updateApi,
  removeApi,
} from "../../../redux/modules/user";
import HeaderPage from "../../Dashboard/header";
import Footer from "../../Dashboard/footer";
import UserList from "./user-list";
import CreateModal from "./create-modal";
import { Link } from "react-router";
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

  createOrUpdateUser = (requestData, id) => {
    if (id) {
      return updateApi(requestData, id).then(() => {
        console.log("update", requestData);
        this.fetchAllUser().then(() => {
          window.__SCHEDULER__.rescheduleAction("fetchUsers");
        });
      });
    }
    return createApi(requestData).then(() => {
      this.fetchAllUser().then(() => {
        window.__SCHEDULER__.rescheduleAction("fetchUsers");
      });
    });
  };

  removeUser = (id) => {
    console.log("inside remove user", id);
    removeApi(id).then(() => {
      this.closeModal();
    });
    // confirm("You want to Remove Technician")
    //   .then(() => {
    //     removeApi(id).then(() => {
    //       this.closeModal();
    //       window.__SCHEDULER__.rescheduleAction("fetchUsers");
    //     });
    //   })
    //   .catch((e) => e);
  };

  handleSubmit = (requestData, id) => {
    console.log("inside handle submit");
    this.createOrUpdateUser(requestData, id).then(() => {
      this.closeModal();
    });
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
          <Link
            onClick={() => this.setEditModal()}
            to="javascript:;"
            style={{ float: "right" }}
          >
            <i className="plus icon" /> Add User
          </Link>
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
            />
          )}
        </HeaderPage>
        <Footer />
      </Fragment>
    );
  }
}
export default UserPage;
