import { useMemo, useRef } from 'react';
import { View, TextInput } from 'react-native';
import { MotiView } from 'moti';
import { MotiPressable } from 'moti/interactions';

import { AuthModalColors as COLORS, KeyboardVariants } from '../../constants';
import ChatIcon from '../ui/ChatIcon';
import { IUser, StateDispatcher } from '../../types';
import { useUserContext } from '../../context/UserContext';
import { useTranslation } from 'react-i18next';
import mixpanel from '../../configs/mixpanel.config';

export const Input: React.FC<{
  field: keyof IUser;
  onTap: (params: any) => any;
  setIsTyping: StateDispatcher<boolean>;
}> = ({ field, onTap, setIsTyping }) => {
  const textRef = useRef<TextInput>(null);
  const { t } = useTranslation();
  const { getUser, updateUser } = useUserContext();

  return (
    <View
      style={{
        height: '40%',
        width: '85%',
        position: 'absolute',
        bottom: '5%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: '3%',
        marginHorizontal: '7%'
      }}
    >
      <MotiView
        style={{
          height: '100%',
          width: '75%',
          paddingTop: '1%'
        }}
        from={{
          scaleX: 0
        }}
        animate={{
          scaleX: 1
        }}
      >
        <TextInput
          ref={textRef}
          onChangeText={(e) => {
            (textRef.current as unknown as { value: string }).value = e;
          }}
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'white',
            borderRadius: 20,
            paddingHorizontal: '8%',
            fontFamily: 'regular',
            fontSize: 12,
            color: COLORS['text']
          }}
          keyboardType={KeyboardVariants[field]}
          cursorColor={COLORS['text']}
          placeholder={t('login_ques.name_input')}
          placeholderTextColor={COLORS['shadow']}
        />
      </MotiView>
      <MotiPressable
        style={{
          width: 45,
          height: 45
        }}
        from={{ scale: 0 }}
        animate={useMemo(
          () =>
            ({ pressed }) => {
              'worklet';

              return {
                scale: pressed ? 0.8 : 1.1
              };
            },
          []
        )}
        onPress={() => {
          const input = (
            textRef.current as unknown as { value: string | number }
          ).value;
          updateUser(field, input);
          if (field === 'password') {
            console.log('Tracking user details...');
            const user = getUser();
            mixpanel.identify((user as IUser).phone.toString());
            mixpanel.track('user_created', { user_data: user });
          }
          setTimeout(() => {
            onTap(input);
            setIsTyping(true);
          }, 500);
        }}
      >
        <ChatIcon lineColor={COLORS['shadow']} />
      </MotiPressable>
    </View>
  );
};
