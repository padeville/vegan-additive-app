import {SelectProductAction} from './../types';
import {ProductListState, ProductListAction, AddProductAction} from '../types';
import {PRODUCT_LIST_ACTION_TYPES} from './action';
import productsJson from '../../../ressources/products.json';
import {Product} from '../../components/products/products.interface';

export const initialState: ProductListState = {
  products: productsJson
    .filter((obj: any[]) => obj.length === 5)
    .map((obj: any[]) => {
      return {
        name: obj[1],
        num: obj[0],
        category: obj[2],
        description: obj[3],
        isVegan: obj[4] === 'Yes' ? true : false,
      } as Product;
    }),
  selectedProduct: null,
};

export const ProductList = (
  state: ProductListState = initialState,
  action: ProductListAction,
) => {
  switch (action.type) {
    case PRODUCT_LIST_ACTION_TYPES.ADD_PRODUCT:
      // pay attention to type-casting on action
      const {ProductData} = <AddProductAction>action;

      return {
        ...state,
        product: [...state.products, {ProductData}],
      };
    case PRODUCT_LIST_ACTION_TYPES.SELECT_PRODUCT:
      const {Product} = <SelectProductAction>action;
      return {
        ...state,
        selectedProduct: Product,
      };
    // define rest of actions here
    default:
      return state;
  }
};
