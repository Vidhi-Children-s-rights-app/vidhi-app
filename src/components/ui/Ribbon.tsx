import * as React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path, Rect, Defs, LinearGradient, Stop } from 'react-native-svg';

const Ribbon: React.FC<{ text: string }> = ({ text }) => {
  return (
    <View style={{ position: 'absolute' }}>
      <Svg
        style={{
          zIndex: 50,
          top: -10
        }}
        width={386}
        height={52}
        viewBox="0 0 758 89"
      >
        <Path
          d="M13.274 25.008H82.08a4 4 0 014 4v55.069a4 4 0 01-4 4H13.274c-3.895 0-5.492-5.001-2.318-7.26l29.54-21.015c2.242-1.595 2.242-4.924 0-6.519l-29.54-21.016c-3.174-2.258-1.577-7.259 2.318-7.259z"
          fill="#B3700D"
        />
        <Path
          d="M13.274 22.434H82.08a4 4 0 014 4v55.069a4 4 0 01-4 4H13.274c-3.895 0-5.492-5.002-2.318-7.26l29.54-21.015c2.242-1.595 2.242-4.924 0-6.519l-29.54-21.016c-3.174-2.258-1.577-7.259 2.318-7.259z"
          fill="url(#paint0_linear_231_7)"
        />
        <Path
          d="M745.477 24.611h-68.805a4 4 0 00-4 4V83.68a4 4 0 004 4h68.805c3.895 0 5.493-5.002 2.319-7.26l-29.541-21.015c-2.241-1.595-2.241-4.924 0-6.519l29.541-21.016c3.174-2.258 1.576-7.259-2.319-7.259z"
          fill="#B3700D"
        />
        <Path
          d="M745.477 22.037h-68.805a4 4 0 00-4 4v55.069a4 4 0 004 4h68.805c3.895 0 5.493-5.002 2.319-7.26L718.255 56.83c-2.241-1.594-2.241-4.923 0-6.518l29.541-21.016c3.174-2.258 1.576-7.26-2.319-7.26z"
          fill="url(#paint1_linear_231_7)"
        />
        <Path
          d="M86.08 80.998V64.909H64.746v.643L86.08 80.998zM672.672 80.6V64.513l21.332-1.931s.889-1.93.889 0L672.672 80.6z"
          fill="#F4B000"
        />
        <Rect
          x={57.6366}
          y={3.1272}
          width={643.82}
          height={65.643}
          rx={12}
          fill="#D79F10"
        />
        <Rect
          x={57.6366}
          y={0.552979}
          width={643.82}
          height={65.643}
          rx={12}
          fill="url(#paint2_linear_231_7)"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_231_7"
            x1={43.4153}
            y1={22.434}
            x2={43.4153}
            y2={85.5027}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#F1FE56" />
            <Stop offset={1} stopColor="#FFC700" />
          </LinearGradient>
          <LinearGradient
            id="paint1_linear_231_7"
            x1={715.336}
            y1={22.0367}
            x2={715.336}
            y2={85.1055}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#F1FE56" />
            <Stop offset={1} stopColor="#FFC700" />
          </LinearGradient>
          <LinearGradient
            id="paint2_linear_231_7"
            x1={379.547}
            y1={0.552979}
            x2={379.547}
            y2={66.1959}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#FFED4C" />
            <Stop offset={1} stopColor="#EDDB36" />
          </LinearGradient>
        </Defs>
      </Svg>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          alignItems: 'center',
          top: -5
        }}
      >
        <Text
          style={{
            color: '#B56C28',
            zIndex: 50,
            fontFamily: 'regular',
            fontSize: 20
          }}
        >
          {text}
        </Text>
      </View>
    </View>
  );
};

export default Ribbon;
