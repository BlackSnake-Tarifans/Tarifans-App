import { createStore } from 'redux';
import authTokenReducer from './AuthToken';

const store = createStore(authTokenReducer);

export default store;
