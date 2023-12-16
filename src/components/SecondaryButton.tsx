import { Text } from 'react-native';
import { MotiPressable } from 'moti/interactions';
import { ButtonColorVariants } from '../constants';
import { useMemo } from 'react';

export const SecondaryButton: React.FC<{
  children: React.ReactNode;
  onTap: () => void;
}> = ({ children, onTap }) => {
  return (
    <MotiPressable
      style={{
        height: '90%',
        width: '50%',
        backgroundColor: ButtonColorVariants['wood'].text,
        borderRadius: 20
      }}
      onPress={onTap}
      from={{ opacity: 1 }}
      animate={useMemo(
        () =>
          ({ pressed }) => {
            'worklet';

            return {
              opacity: pressed ? 0.5 : 1
            };
          },
        []
      )}
    >
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'regular',
          height: '100%',
          width: '100%',
          paddingHorizontal: '12%',
          paddingVertical: '5%',
          color: ButtonColorVariants['wood'].background
        }}
      >
        {children}
      </Text>
    </MotiPressable>
  );
};
