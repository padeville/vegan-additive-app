import {Product} from '../components/products/products.interface';

export type AddProductAction = {
  type: string;
  ProductData: Product;
};

export type SelectProductAction = {
  type: string;
  product: Product;
};

export type FilterProductsAction = {
  type: string;
  filter: string;
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
  | SelectProductAction
  | FilterProductsAction;

export type ProductListState = {
  products: Product[];
  selectedProduct: Product | null;
  filter: string;
};
