import { useMemo } from 'react';
import { Text } from 'react-native';
import { MotiPressable } from 'moti/interactions';
import Svg, { Path, Rect } from 'react-native-svg';

import { ButtonColorVariants, ButtonSizeVariants } from '../constants';

type Props = {
  variant: {
    size: keyof typeof ButtonSizeVariants;
    color: keyof typeof ButtonColorVariants;
    highlight?: boolean;
  };
  onTap: () => void;
  children: React.ReactNode;
};

export const PrimaryButton: React.FC<Props> = ({
  variant: { size, color, highlight = true },
  onTap,
  children
}) => {
  return (
    <MotiPressable onAccessibilityAction={(e)=>{console.log('Done');
    }}
      style={{
        width: ButtonSizeVariants[size].width,
        height: ButtonSizeVariants[size].height,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginBottom: '20%',
        zIndex: 15
      }}
      onPress={onTap}
      from={{
        scale: 0
      }}
      animate={useMemo(
        () =>
          ({ pressed }) => {
            'worklet';

            return {
              scale: pressed ? 0.8 : 1
            };
          },
        []
      )}
    >
      <Svg
        width="100%"
        height="100%"
        fill="none"
        style={{ position: 'absolute' }}
        viewBox="0 0 556 178"
      >
        <Path
          d="M2.486 60.22c0-33.138 26.863-60 60-60h431.028c33.137 0 60 26.862 60 60v57.499c0 33.137-26.863 60-60 60H62.486c-33.137 0-60-26.863-60-60v-57.5z"
          fill={ButtonColorVariants[color].shadow}
        />
        <Rect
          y={1.71936}
          width={556}
          height={164}
          rx={60}
          fill={ButtonColorVariants[color].background}
        />
        <Path
          d="M506.5 12.5s-60.799-7.19-65.5 7.72c-3.509 11.131 13 34 13 34s20.807 12.756 34.5 17.5c16.799 5.82 35.108 3.93 47.5 0 8.102-2.57 12.402-20.987 4-35-12.765-21.292-33.5-24.22-33.5-24.22z"
          fill="#fff"
          fillOpacity={highlight ? 0.7 : 0}
        />
        <Path
          d="M428.69 21.375s-10.674-9.936-18.545-8.4c-5.877 1.148-7.082 9.349-7.082 9.349s2.42 7.916 5.53 13.29c3.816 6.595 8.656 7.868 14.853 11.05 4.052 2.081 9.61.143 12.269-5.425 4.04-8.46-7.025-19.863-7.025-19.863z"
          fill="#fff"
          fillOpacity={highlight ? 0.5 : 0}
        />
      </Svg>

      <Text
        style={{
          fontSize: ButtonSizeVariants[size].fontSize,
          fontFamily: 'regular',
          color: ButtonColorVariants[color].text
        }}
      >
        {children}
      </Text>
    </MotiPressable>
  );
};
