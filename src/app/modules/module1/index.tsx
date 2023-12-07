import {
  View,
  Text,
  Image,
  Pressable,
  Modal,
  Alert,
  StyleSheet
} from 'react-native';
import { PrimaryButton } from '../../../components/PrimaryButton';
import React, { useState } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import ModulePauseModal from '../components/ModulePauseModal';

const Module1 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [moduleState, setModuleState] = useState('default');
  return (
    <View style={{ position: 'relative' }}>
      <ModulePauseModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      ></ModulePauseModal>

      <Image
        source={require('./assets/bg.jpeg')}
        style={{ position: 'absolute' }}
      />
      <Pressable
        style={{ width: 60, height: 60, margin: 20 }}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <View
          style={{
            width: 60,
            height: 60,
            backgroundColor: '#ffffff55',
            borderRadius: 35,
            borderWidth: 1,
            borderColor: '#ffffff',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <View>
            <View
              style={{
                width: 30,
                height: 3,
                backgroundColor: '#ffffff',
                borderRadius: 2.5,
                margin: 3
              }}
            ></View>
            <View
              style={{
                width: 30,
                height: 3,
                backgroundColor: '#ffffff',
                borderRadius: 2.5,
                margin: 3
              }}
            ></View>
            <View
              style={{
                width: 30,
                height: 3,
                backgroundColor: '#ffffff',
                borderRadius: 2.5,
                margin: 3
              }}
            ></View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default Module1;
