import ApiClient from '../helpers/ApiClient';
import createStore from './create';

const apiClient = new ApiClient();
console.log('redux index',apiClient);
const store = createStore(window.__data,apiClient);
apiClient.setStore(store);
console.log('store',store)
console.log('apic',apiClient)
export default store;
export { apiClient };