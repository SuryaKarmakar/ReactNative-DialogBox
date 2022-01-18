import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import Dialog from 'react-native-dialog';
import BasicDialogBox from './src/BasicDialogBox';

const App = () => {
  return (
    <View style={styles.container}>
      <BasicDialogBox />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
