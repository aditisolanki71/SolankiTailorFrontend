import ApiClient from '../helpers/ApiClient';
import createStore from './create';

const apiClient = new ApiClient();
const store = createStore(window.__data,apiClient);
apiClient.setStore(store);

export default store;
export { apiClient };