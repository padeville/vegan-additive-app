import React, {Component, Dispatch} from 'react';
import {connect} from 'react-redux';
import {View, FlatList, Text} from 'react-native';
import {IRecipeProps, Product} from './products.interface';
import {ProductElement} from './product';
import {ProductListAction} from '../../states/types';
import {SelectProduct} from '../../states/product-list/action';
import {IAppState} from '../../states/store';
import ModalView from './modal';

export class listProducts extends Component<IRecipeProps> {
  render() {
    return (
      <View>
        <View>
          <Text>Bienvenu dans la vegan App cherchez ce que vous voulez</Text>
        </View>
        <ModalView
          product={this.props.selectedProduct}
          setModalVisible={this.props.setlectProduct}
        />
        <FlatList
          data={this.props.products}
          renderItem={({item}) => (
            <ProductElement
              product={item}
              setModalVisible={this.props.setlectProduct}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const mapStateToProps = (state: IAppState) => ({
  products: state.ProductList.products,
  selectedProduct: state.ProductList.selectedProduct,
});

const mapDispatchToProps = (dispatch: Dispatch<ProductListAction>) => ({
  setlectProduct: (product: Product) => {
    dispatch(SelectProduct(product));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(listProducts);
