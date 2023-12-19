import { View, Text, Modal } from 'react-native';
import React from 'react';
import Maze from './Maze';

const MiniGameModal: React.FC<{ children: React.ReactElement }> = ({
  children
}) => {
  return (
    <Modal animationType="none" transparent={true} visible={true}>
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#00000044',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <View
          style={{
            width: '90%',
            height: '80%',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default MiniGameModal;
