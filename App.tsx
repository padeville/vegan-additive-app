import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Index from './src';
import {Provider} from 'react-redux';
import store from './src/states/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Index />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
