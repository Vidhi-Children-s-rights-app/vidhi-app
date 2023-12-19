import { useState } from 'react';
import { View, Image } from 'react-native';
import TypeWritter from 'react-native-typewriter';

import { Buttons } from './Auth.Buttons';
import { Input } from './Auth.Input';
import { AuthModalColors as COLORS } from '../../constants/colors';
import { DialogueState } from '../../types';
import { hydrateDialogue } from '../../utils/utils.base';
import { SecondaryButton } from '../SecondaryButton';

import { useUserContext } from '../../context/UserContext';

export default function AuthView({
  dialogueState: { mascotSprite, mascotDialogue, response },
  loadNext
}: {
  dialogueState: DialogueState;
  loadNext: () => void;
}) {
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const parts = hydrateDialogue(mascotDialogue);
  const { user, updateUser } = useUserContext();
  const dialogue = mascotDialogue?.replace(
    '|',
    user ? user.name! : 'Sidhharth'
  );

  return (
    <View
      style={{
        height: '20%',
        width: '75%',
        minHeight: 150,
        marginLeft: '5%',
        backgroundColor: COLORS['background'],
        borderColor: COLORS['shadow'],
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderRadius: 10,
        position: 'relative'
      }}
    >
      {mascotSprite && (
        <Image
          source={mascotSprite}
          style={{
            width: 100,
            height: 100,
            top: -70,
            left: -30,
            position: 'absolute',
            zIndex: 100
          }}
        />
      )}
      <TypeWritter
        maxDelay={10}
        typing={1}
        // @ts-ignore
        // delayMap={[{ at: /[.!?]/, delay: 200 }]}
        onTypingEnd={() => {
          setIsTyping(false);
        }}
        style={{
          fontFamily: 'regular',
          color: COLORS['text'],
          fontSize: 16,
          width: '100%',
          paddingHorizontal: '10%',
          paddingVertical: '7%',
          position: 'absolute'
        }}
      >
        {dialogue}
      </TypeWritter>
      {!isTyping &&
        response?.type === 'choice' &&
        response?.choices?.length > 0 && (
          <Buttons
            buttons={response.choices}
            onTap={loadNext}
            setIsTyping={setIsTyping}
          />
        )}
      {!isTyping && response?.type === 'input' && (
        <Input
          variant={response.variant}
          onTap={loadNext}
          setIsTyping={setIsTyping}
        />
      )}
      {!isTyping && !response && (
        <View
          style={{
            height: '30%',
            width: '100%',
            position: 'absolute',
            bottom: 8,
            right: 8,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            paddingRight: '2%'
          }}
        >
          <SecondaryButton onTap={loadNext}>ok</SecondaryButton>
        </View>
      )}
    </View>
  );
}
