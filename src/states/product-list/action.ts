import {Product} from './../../components/products/products.interface';

export enum PRODUCT_LIST_ACTION_TYPES {
  ADD_PRODUCT = 'PRODUCT_LIST/ADD_PRODUCT',
  REMOVE_PRODUCT = 'PRODUCT_LIST/REMOVE_PRODUCT',
  UPDATE_PRODUCT = 'PRODUCT_LIST/UPDATE_PRODUCT',
  SELECT_PRODUCT = 'PRODUCT_LIST/SELECT_PRODUCT',
  FILTER_PRODUCT = 'PRODUCT_LIST/FILTER_PRODUCT',
}

export const SelectProduct = (product: Product) => {
  return {
    type: PRODUCT_LIST_ACTION_TYPES.SELECT_PRODUCT,
    product,
  };
};

export const FilterProduct = (filter: string) => {
  return {
    type: PRODUCT_LIST_ACTION_TYPES.FILTER_PRODUCT,
    filter,
  };
};
