
import { createStore } from 'framework7/lite';

const store = createStore({
  state: {
    dark:true,
    all:[],
    base_storage_URL:"https://objectstorage.uk-london-1.oraclecloud.com/p/pg3cOJ1ktmP_fF7UQhsIVVAlRZqIPVQsyfVx90n7h9lV6MkgUPMTYc3FJgP-2DxS/n/lrj6a9vl4is6/b/MyBucket/o/"
  },
  getters: {
    products({ state }) {
      return state.products;
    }
  },
  actions: {
    addProduct({ state }, product) {
      state.products = [...state.products, product];
    },
  },
})
export default store;
