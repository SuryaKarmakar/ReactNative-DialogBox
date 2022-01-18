import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import Dialog from 'react-native-dialog';

const BasicDialogBox = () => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleDelete = () => {
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Show basic dialog" onPress={showDialog} />
      <Dialog.Container visible={visible}>
        <Dialog.Title>Account delete</Dialog.Title>
        <Dialog.Description>
          Do you want to delete this account? You cannot undo this action.
        </Dialog.Description>
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="Delete" onPress={handleDelete} />
      </Dialog.Container>
    </View>
  );
};

export default BasicDialogBox;

const styles = StyleSheet.create({});
