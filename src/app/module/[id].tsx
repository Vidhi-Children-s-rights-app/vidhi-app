import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import ModulePauseModal from '../../components/modules/ModulePauseModal';
import { getScript } from '../../modules/scripts';
import { getNextState } from '../../utils/utils.module';
import { useLocalSearchParams } from 'expo-router';
import { ModuleState } from '../../types';
import { MenuHamburger } from '../../components/ui';
import GameView from '../../components/modules/GameView';
import { Audio } from 'expo-av';

const Module = () => {
  const { id } = useLocalSearchParams();
  const script = getScript(parseInt(id as string));
  const [sound, setSound] = useState<Audio.Sound>();
  const [modalVisible, setModalVisible] = useState(false);
  const [touchDisabled, setTouchDisabled] = useState<boolean>(true);
  const [moduleState, setModuleState] = useState<ModuleState>({
    progressState: script[0],
    isCompleted: script.length > 1 ? false : true
  });

  useEffect(() => {
    if (moduleState.progressState.audio) {
      Audio.Sound.createAsync(moduleState.progressState.audio).then((audio) => {
        setSound(audio.sound);
      });
    } else {
      setSound(undefined);
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

  useEffect(() => {
    if (modalVisible) sound?.pauseAsync();
  }, [modalVisible]);

  async function playSound() {
    if (sound) {
      await sound.playAsync();
    }
  }

  const updateModuleState = () => {
    if (moduleState.progressState.currentIndex && touchDisabled) {
      console.log('touch is disabled');
      return;
    }
    if (moduleState.isCompleted) return;
    console.log('next page');
    setModuleState(getNextState(script, moduleState));
  };

  return (
    <View style={{ position: 'relative', width: '100%', height: '100%' }}>
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
        setTouchDisabled={setTouchDisabled}
        modalVisible={modalVisible}
      />
    </View>
  );
};

export default Module;
