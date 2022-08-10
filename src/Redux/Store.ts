import { productsReducer } from './ProductsState';
import { combineReducers, createStore } from "redux";
import { authReducer } from './AuthState';


const reducers = combineReducers({ProductsState: productsReducer, AuthState: authReducer});
const store = createStore(reducers);

export default store;