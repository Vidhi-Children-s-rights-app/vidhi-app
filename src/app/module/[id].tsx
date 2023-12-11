import {
  View,
  Text,
  Image,
  Pressable,
  Modal,
  Alert,
  StyleSheet,
  ImageSourcePropType
} from 'react-native';
import React, { useEffect, useState } from 'react';
import ModulePauseModal from '../../components/modules/ModulePauseModal';
import { script } from '../../modules/scripts/script1';
import { getNextState, getDelay } from '../../utils/utils.module';
import { useLocalSearchParams } from 'expo-router';
import { ModuleState } from '@/types';
import { MenuHamburger } from '../../components/ui';
import GameView from '../../components/modules/GameView';
import { Audio } from 'expo-av';

const Module = () => {
  const [sound, setSound] = useState<Audio.Sound>();
  const [modalVisible, setModalVisible] = useState(false);
  const [touchDisabled, setTouchDisabled] = useState(false);
  const [moduleState, setModuleState] = useState<ModuleState>({
    progressState: script[0],
    isCompleted: script.length > 1 ? false : true
  });

  useEffect(() => {
    if (moduleState.progressState.audio) {
      console.log('Loading Sound');
      Audio.Sound.createAsync(moduleState.progressState.audio).then((audio) => {
        setSound(audio.sound);
        console.log('Loaded Sound succcccesssfully');
      });
    } else {
      setSound(undefined);
      console.log('Fucck this audio', moduleState.progressState.audio);
    }
  }, [moduleState]);

  useEffect(() => {
    return () => {
      sound?.unloadAsync();
    };
  });

  useEffect(() => {
    if (sound) {
      playSound();
    }
  }, [sound]);

  const { id } = useLocalSearchParams();

  async function playSound() {
    if (sound) {
      console.log('Playing Sound');
      await sound.playAsync();
    }
  }

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
    <View style={{ position: 'relative' }}>
      <MenuHamburger
        onPress={() => setModalVisible(!modalVisible)}
      ></MenuHamburger>

      <ModulePauseModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      ></ModulePauseModal>

      <GameView
        updateModuleState={updateModuleState}
        currentModuleState={moduleState}
      />
    </View>
  );
};

export default Module;
