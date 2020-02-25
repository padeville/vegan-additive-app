import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {IpropsProductElement} from './products.interface';
import React from 'react';
import {Badge} from 'react-native-elements';

const ProductElement = ({product, setModalVisible}: IpropsProductElement) => {
  const {num, name, isVegan} = product;

  return (
    <TouchableHighlight
      onPress={() => {
        setModalVisible(product);
      }}>
      <View style={styles.item}>
        <Text style={styles.num}>{num}</Text>
        <Text style={styles.name}>{name}</Text>
        <Badge
          containerStyle={styles.badge}
          status={isVegan === true ? 'success' : 'error'}
        />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  num: {
    flex: 2,
  },
  name: {
    alignItems: 'flex-end',
  },
  badge: {
    top: 2,
    margin: 5,
  },
});

export {ProductElement};
