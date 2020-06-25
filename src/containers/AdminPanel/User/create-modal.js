import React from "react";
import { Modal } from "semantic-ui-react";

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
        categoryModule: "INCIDENT",
        categoryType: "SOURCE",
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
          <span>{formdata.id ? "edit" : "add"} user</span>
          <i as="a" onClick={onClose} />
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <div>
              <div>
                <div>
                  <label htmlFor="name"> name </label>
                  <input
                    autoFocus
                    value={formdata.name || ""}
                    onChange={(e) =>
                      this.handleChange({ name: e.target.value })
                    }
                    type="text"
                    id="name"
                    name="name"
                    placeholder="name"
                  />
                  {/* {errorFor(validationErrors, "name") && formSubmitted && (
                    <label htmlFor="nameError">
                      {errorFor(validationErrors, "name")}
                    </label>
                  )} */}
                </div>
                <div>
                  <label htmlFor="email">email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="email"
                    value={formdata.email || ""}
                    onChange={(e) =>
                      this.handleChange({ email: e.target.value })
                    }
                  />
                  {/* {errorFor(validationErrors, "email") && formSubmitted && (
                    <label htmlFor="emailError">
                      {errorFor(validationErrors, "email")}
                    </label>
                  )} */}
                </div>
                <div>
                  <label htmlFor="address"> Address </label>
                  <input
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
                  {/* {errorFor(validationErrors, "name") && formSubmitted && (
                    <label htmlFor="nameError">
                      {errorFor(validationErrors, "name")}
                    </label>
                  )} */}
                </div>
              </div>
            </div>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <button
            onClick={this.onSubmit}
            className="ui button default"
            type="button"
          >
            {formdata.id ? "update" : "add"}
            {/*{__translate('comman:add')}*/}
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
