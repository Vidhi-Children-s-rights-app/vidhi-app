import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { router } from 'expo-router';

import AuthView from '../../components/auth/Auth.View';
import { getNextState } from '../../utils/utils.auth';
import { firstFrame } from '../../modules/scripts/0';
import { DialogueState } from '../../types';
import { UserProvider, useUserContext } from '../../context/UserContext';

export default function AuthPage() {
  const [dialogueState, setDialogueState] = useState<DialogueState>(firstFrame);
  const { user } = useUserContext();
  const updateDialogState = (params?: string | number) => {
    const nextState = getNextState({ dialogueState, params });
    if (nextState.currentIndex === 0) {
      console.log('current user is: ', user);
      router.replace('/quiz');
    } else setDialogueState(nextState);
  };
  return (
    <UserProvider>
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <AuthView dialogueState={dialogueState} loadNext={updateDialogState} />
      </View>
    </UserProvider>
  );
}
