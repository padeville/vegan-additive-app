import {
  Modal,
  Alert,
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {IpropsProductElement, IpropsModalElement} from './products.interface';

const ModalView = ({product, setModalVisible}: IpropsModalElement) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={product !== null}
      onRequestClose={() => {
        setModalVisible(null);
      }}>
      <View style={styles.modal}>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.title}>
            {product?.num} {product?.name}
          </Text>
          <Text style={styles.word}>{product?.description}</Text>
        </View>
        <TouchableHighlight
          onPress={() => {
            setModalVisible(null);
          }}>
          <Text>Hide Modal</Text>
        </TouchableHighlight>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    textAlign: 'center',
  },
  title: {
    fontSize: 25,
  },
  word: {
    textAlign: 'center',
  },
});

export default ModalView;
