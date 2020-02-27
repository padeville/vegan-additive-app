import React, {Component, Dispatch} from 'react';
import {connect} from 'react-redux';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {IRecipeProps, Product} from './products.interface';
import {ProductElement} from './product';
import {ProductListAction} from '../../states/types';
import {SelectProduct, FilterProduct} from '../../states/product-list/action';
import {IAppState} from '../../states/store';
import ModalView from './modal';
import {SearchBar} from 'react-native-elements';

export class listProducts extends Component<IRecipeProps> {
  render() {
    return (
      <View style={styles.list}>
        <View>
          <Text style={styles.headerText}>
            <Text>ADDITIFS ALIMENTAIRES{'\n'}</Text>
            <Text style={styles.title}>
              Toutes Les informations sur les additifs alimentaires
            </Text>
          </Text>
        </View>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.props.filterProducts}
          value={this.props.filter}
          lightTheme={true}
        />
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
  filter: state.ProductList.filter,
});

const mapDispatchToProps = (dispatch: Dispatch<ProductListAction>) => ({
  setlectProduct: (product: Product) => {
    dispatch(SelectProduct(product));
  },
  filterProducts: (filter: string) => {
    dispatch(FilterProduct(filter));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(listProducts);

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
  },
  title: {
    fontSize: 25,
  },
});
