export interface IRecipeProps {
  products: Product[];
  selectedProduct: Product | null;
  setlectProduct(product: Product | null): void;
}

export interface IRecipeState {}

export type Product = {
  name: string;
  num: string;
  isVegan: boolean;
  category?: string;
  description?: string;
};

export interface IpropsProductElement {
  product: Product;
  setModalVisible(product: Product | null): void;
}

export interface IpropsModalElement {
  product: Product | null;
  setModalVisible(product: Product | null): void;
}
