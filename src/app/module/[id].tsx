import {
  View,
  Text,
  Image,
  Pressable,
  Modal,
  Alert,
  StyleSheet
} from 'react-native';
import { useEffect, useState } from 'react';
import ModulePauseModal from '../../components/modules/ModulePauseModal';
import { script } from '../../modules/scripts/script1';
import { getNextState, getDelay } from '../../utils/utils.module';
import { useLocalSearchParams } from 'expo-router';

const Module = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [touchDisabled, setTouchDisabled] = useState(false);
  const [moduleState, setModuleState] = useState<ModuleState>({
    progressState: script[0],
    isCompleted: script.length > 1 ? false : true
  });
  const { id } = useLocalSearchParams();

  const updateModuleState = () => {
    if (touchDisabled) return;
    if (moduleState.isCompleted) return;
    setModuleState(getNextState(script, moduleState));
    setTouchDisabled(true);
    const timeout = setTimeout(() => {
      setTouchDisabled(false);
    }, getDelay(moduleState));
    return () => clearTimeout(timeout);
  };

  return (
    <View style={{ position: 'relative' }} onTouchEnd={updateModuleState}>
      <ModulePauseModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      ></ModulePauseModal>

      {moduleState.progressState.backgroundSprite && (
        <Image
          source={require('../../assets/module/bg.jpeg')}
          style={{ position: 'absolute' }}
        />
      )}
      <Text
        style={{
          color: 'white',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        THIS IS MODULE {id}
      </Text>
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

export default Module;
