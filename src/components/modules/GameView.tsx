import { View, ImageSourcePropType, Image } from 'react-native';
import { ModuleState, StateDispatcher } from '@/types';
import React from 'react';

const GameView: React.FC<{
  updateModuleState: () => (() => void) | undefined;
  currentModuleState: ModuleState;
}> = ({ updateModuleState, currentModuleState }) => {
  return (
    <View
      style={{ width: '100%', height: '100%' }}
      onTouchEnd={updateModuleState}
    >
      <Background source={currentModuleState.progressState.backgroundSprite} />
      <CharacterSprite
        source={currentModuleState.progressState.characterSprite}
      />
    </View>
  );
};

const Background: React.FC<{ source: ImageSourcePropType }> = ({ source }) => (
  <Image
    source={source ?? require('../../assets/module/default.png')}
    style={{ position: 'absolute' }}
  />
);

const CharacterSprite: React.FC<{ source: ImageSourcePropType }> = ({
  source
}) => <Image source={source} style={{ position: 'absolute' }} />;

export default GameView;
