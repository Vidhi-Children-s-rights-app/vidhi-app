import { View } from 'react-native';
import React, { useState } from 'react';
import ModulePauseModal from '../../components/modules/ModulePauseModal';
import { getScript } from '../../modules/scripts';
import { getNextState, getDelay } from '../../utils/utils.module';
import { useLocalSearchParams } from 'expo-router';
import { ModuleState } from '../../types';
import { MenuHamburger } from '../../components/ui';
import GameView from '../../components/modules/GameView';

const Module = () => {
  const { id } = useLocalSearchParams();
  const script = getScript(parseInt(id as string));
  const [modalVisible, setModalVisible] = useState(false);
  const [touchDisabled, setTouchDisabled] = useState(false);
  const [moduleState, setModuleState] = useState<ModuleState>({
    progressState: script[0],
    isCompleted: script.length > 1 ? false : true
  });

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
      />
    </View>
  );
};

export default Module;
