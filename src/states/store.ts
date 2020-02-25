import {combineReducers, createStore} from 'redux';
import {ProductList} from './product-list/reducers';

const reducer = combineReducers({
  ProductList,
});

export type IAppState = ReturnType<typeof reducer>;

export default createStore(reducer);
