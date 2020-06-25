export default class RequestReducer {
  constructor(action = {}, resourse) {
    const loading = `${resourse.name}_loading`;
    const result = `${resourse.name}_result`;
    const error = `${resourse.name}_error`;
    const errordata = `${resourse.name}_error_data`;

    const newState = {};

    switch (action.type) {
      case resourse.start:
        newState[loading] = true;
        // newState[result] = '';
        newState[error] = "";
        newState[errordata] = {};
        return newState;

      case resourse.success:
        newState[loading] = false;
        newState[result] = action.result;
        newState[error] = false;
        newState[errordata] = {};
        return newState;

      case resourse.fail:
        newState[loading] = false;
        // newState[result] = '';
        newState[error] = true;
        newState[errordata] = action.error;
        return newState;

      default:
        return newState;
    }
  }
}
