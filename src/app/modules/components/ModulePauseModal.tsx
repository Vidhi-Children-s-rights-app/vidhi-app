import { View, Text, Modal, Pressable, Alert, StyleSheet } from 'react-native';
import React from 'react';
import { PrimaryButton } from '../../../components/PrimaryButton';
import Svg, { Path } from 'react-native-svg';

const ModulePauseModal = (props: any) => {
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        props.setModalVisible(!props.modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable
            onPress={() => props.setModalVisible(!props.modalVisible)}
            style={{ position: 'absolute', right: 5, top: 5 }}
          >
            <Svg x="0px" y="0px" width={40} height={40} viewBox="0 0 48 48">
              <Path
                fill="#f44336"
                d="M44 24c0 11.045-8.955 20-20 20S4 35.045 4 24 12.955 4 24 4s20 8.955 20 20z"
              />
              <Path
                fill="#fff"
                d="M29.656 15.516l2.828 2.828-14.14 14.14-2.828-2.828 14.14-14.14z"
              />
              <Path
                fill="#fff"
                d="M32.484 29.656l-2.828 2.828-14.14-14.14 2.828-2.828 14.14 14.14z"
              />
            </Svg>
          </Pressable>
          <Pressable style={{ margin: 5 }}>
            <PrimaryButton
              variant={{
                size: 'large',
                color: 'green'
              }}
            >
              Resume
            </PrimaryButton>
          </Pressable>
          <Pressable style={{ margin: 5 }}>
            <PrimaryButton
              variant={{
                size: 'large',
                color: 'blue'
              }}
            >
              Restart
            </PrimaryButton>
          </Pressable>
          <Pressable style={{ margin: 5 }}>
            <PrimaryButton
              variant={{
                size: 'large',
                color: 'orange'
              }}
            >
              Back to Menu
            </PrimaryButton>
          </Pressable>
          <Pressable
            onPress={() => props.setModalVisible(!props.modalVisible)}
          ></Pressable>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    paddingTop: 50,
    alignItems: 'center'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: '#F194FF'
  },
  buttonClose: {
    backgroundColor: '#2196F3'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  }
});

export default ModulePauseModal;
