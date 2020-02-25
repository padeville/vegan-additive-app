import {Product} from '../components/products/products.interface';

export type AddProductAction = {
  type: string;
  ProductData: Product;
};

export type SelectProductAction = {
  type: string;
  Product: Product;
};
export type UpdateProductAction = {
  type: string;
  index: number;
  ProductData: Product;
};

export type RemoveProductAction = {
  type: string;
  index: number;
};

export type ProductListAction =
  | AddProductAction
  | UpdateProductAction
  | RemoveProductAction
  | SelectProductAction;

export type ProductListState = {
  products: Product[];
  selectedProduct: Product | null;
};
