import {Modal, Alert, View, Text, TouchableHighlight} from 'react-native';
import React from 'react';
import {IpropsProductElement, IpropsModalElement} from './products.interface';

const ModalView = ({product, setModalVisible}: IpropsModalElement) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={product !== null}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={{marginTop: 22}}>
        <View>
          <Text>{product?.name}</Text>
          <Text>{product?.num}</Text>

          <TouchableHighlight
            onPress={() => {
              setModalVisible(null);
            }}>
            <Text>Hide Modal</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

export default ModalView;
