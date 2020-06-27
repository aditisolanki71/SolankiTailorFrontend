import React from "react";
import { Modal, Form } from "semantic-ui-react";
class CreateModal extends React.Component {
  static defaultProps = {
    onCreate: () => Promise.resolve(),
    onClose: (e) => e,
    formdata: {},
  };

  state = {
    validationErrors: {},
    formSubmitted: false,
    formdata: {},
  };

  setFormData(data) {
    this.setState({
      formdata: {
        ...data.formdata,
      },
    });
  }

  componentWillMount() {
    //this.getAuthDepartmentList();
    this.setFormData(this.props);
  }

  componentWillRecceiveProps(newProps) {
    this.setFormData(newProps);
  }

  /*getAuthDepartmentList = () => {
    authdepalistApi(0, 100).then(data => {
      this.setState({ departmentList: data.objectList });
    });
  };*/

  handleChange = (data) => {
    const newState = {
      formdata: {
        ...this.state.formdata,
        ...data,
      },
    };
    this.setState(newState);
  };

  onSubmit = () => {
    const { formdata } = this.state;
    this.setState({
      formSubmitted: true,
    });

    this.props.onCreate(formdata, formdata.id).then(() => {
      this.props.onClose();
    });
  };

  // onCancel() {
  //   this.props.onClose();
  // }
  render() {
    const { onClose } = this.props;
    const { formdata } = this.state;
    return (
      <Modal
        onClose={onClose}
        size="small"
        open
        style={{ padding: "5px", marginTop: "10%", marginLeft: "20%" }}
        closeIcon
      >
        <Modal.Header>
          <span>{formdata.id ? "Edit" : "Add"} User</span>
          <i as="a" onClick={onClose} />
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Name"
                  autoFocus
                  value={formdata.name || ""}
                  onChange={(e) => this.handleChange({ name: e.target.value })}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                />
                <Form.Input
                  fluid
                  label="Email"
                  placeholder="Email"
                  type="text"
                  id="email"
                  name="email"
                  value={formdata.email || ""}
                  onChange={(e) => this.handleChange({ email: e.target.value })}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Address"
                  autoFocus
                  value={formdata.address || ""}
                  onChange={(e) =>
                    this.handleChange({ address: e.target.value })
                  }
                  type="text"
                  id="address"
                  name="address"
                  placeholder="address"
                />
              </Form.Group>
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <button
            onClick={this.onSubmit}
            className="ui button primary"
            type="button"
          >
            {formdata.id ? "Update" : "Add"}
          </button>
          <button onClick={onClose} className="ui button default" type="button">
            Cancel
          </button>
        </Modal.Actions>
      </Modal>
    );
  }
}

// const mapStateToProps = (state) => ({
//   tenant: getTenant(state),
// });

// export default connect(mapStateToProps, null)(CreateModal);
export default CreateModal;
