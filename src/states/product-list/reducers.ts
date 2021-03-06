import {SelectProductAction, FilterProductsAction} from './../types';
import {ProductListState, ProductListAction, AddProductAction} from '../types';
import {PRODUCT_LIST_ACTION_TYPES} from './action';
import productsJson from '../../../ressources/products.json';
import {Product} from '../../components/products/products.interface';

const initialProducts = productsJson
  .filter((obj: any[]) => obj.length === 5)
  .map((obj: any[]) => {
    return {
      name: obj[1],
      num: obj[0],
      category: obj[2],
      description: obj[3],
      isVegan: obj[4] === 'Yes' ? true : false,
    } as Product;
  });

export const initialState: ProductListState = {
  products: initialProducts,
  selectedProduct: null,
  filter: '',
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
      const {product} = <SelectProductAction>action;
      return {
        ...state,
        selectedProduct: product,
      };
    case PRODUCT_LIST_ACTION_TYPES.FILTER_PRODUCT:
      const {filter} = <FilterProductsAction>action;
      return {
        ...state,
        filter: filter,
        products:
          filter === ''
            ? initialProducts
            : state.products.filter(p =>
                p.num.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
              ),
      };
    // define rest of actions here
    default:
      return state;
  }
};
