import { View, Text, ImageSourcePropType, Image } from 'react-native';
import {
  ChoiceType,
  MascotDialogueType,
  ModuleState,
  StateDispatcher
} from '../../types';
import TypeWriter from 'react-native-typewriter';
import MiniGameModal from '../ui/MiniGameModal';
import Maze from '../ui/Maze';
import { JumbleGame } from '../JumbleGame';

const GameView: React.FC<{
  updateModuleState: () => void;
  currentModuleState: ModuleState;
  setTouchDisabled: StateDispatcher<boolean>;
  modalVisible: boolean;
}> = ({
  updateModuleState,
  currentModuleState,
  setTouchDisabled,
  modalVisible
}) => {
  const {
    backgroundSprite,
    characterSprite,
    mascotSprite,
    characterDialogue,
    mascotDialogue
  } = currentModuleState.progressState;

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0
      }}
      onTouchEnd={updateModuleState}
    >
      {/* <MiniGameModal>
        <JumbleGame />
      </MiniGameModal> */}
      <Background source={backgroundSprite as ImageSourcePropType} />
      <CharacterSprite source={characterSprite as ImageSourcePropType} />
      {mascotDialogue && (
        <MascotDialogue
          content={mascotDialogue}
          setTouchDisabled={setTouchDisabled}
          modalVisible={modalVisible}
        />
      )}
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

const MascotDialogue: React.FC<{
  content: MascotDialogueType;
  setTouchDisabled: StateDispatcher<boolean>;
  modalVisible: boolean;
}> = ({ content, setTouchDisabled, modalVisible }) => {
  let text, choices: ChoiceType[];
  // @ts-ignore
  text = content.question || (content as string);
  // @ts-ignore
  choices = content.choices;
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        left: '5%',
        height: '40%',
        width: '90%'
      }}
    >
      <View
        style={{
          height: '40%',
          width: '100%',
          borderColor: 'white',
          borderWidth: 2,
          borderRadius: 10
        }}
      >
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'white',
            borderRadius: 8,
            opacity: 0.7
          }}
        />
        <TypeWriter
          minDelay={20}
          //@ts-ignore
          delayMap={[{ at: /[...]/, delay: 400 }]}
          onTypingEnd={() => {
            console.log('typing has ended');
            setTouchDisabled(false);
          }}
          typing={modalVisible ? 0 : 1}
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            fontSize: 16,
            padding: '5%',
            paddingRight: '15%',
            color: 'black',
            fontFamily: 'regular'
          }}
        >
          {text}
        </TypeWriter>
      </View>
      <View
        style={{
          height: '60%',
          width: '100%',
          paddingVertical: 5,
          gap: 8
        }}
      >
        {choices &&
          choices.map((choice, index) => (
            <Choice key={index} index={index} choice={choice.text} />
          ))}
      </View>
    </View>
  );
};

const Choice: React.FC<{ choice: string; index: number }> = ({
  choice,
  index
}) => {
  return (
    <View
      style={{
        height: '30%',
        width: '100%',
        backgroundColor: '#ffffffA0',
        borderColor: '#ffffff',
        borderWidth: 2,
        borderRadius: 10
      }}
    >
      <Text
        style={{
          height: '100%',
          width: '100%',
          fontFamily: 'regular',
          marginVertical: '3%',
          marginHorizontal: '5%',
          fontSize: 16
        }}
      >
        {choice}
      </Text>
    </View>
  );
};

export default GameView;
