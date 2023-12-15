import { View, Text, Image } from 'react-native';
import React from 'react';
import Ribbon from './Ribbon';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

const QuizCard: React.FC<{ remTime?: string }> = ({ remTime = '00:00:00' }) => {
  return (
    <View
      style={{
        width: '100%',
        height: '25%',
        position: 'relative',
        alignItems: 'center'
      }}
    >
      <Ribbon text={'Daily Quiz'} />
      <View
        style={{
          backgroundColor: '#4F46E5',
          width: '85%',
          height: '100%',
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Svg width={60} height={104} viewBox="0 0 140 104">
          <Path
            fill="url(#a)"
            d="M140 52c0 43.576-11.34 52-70 52S0 95.576 0 52 11.34 0 70 0s70 8.424 70 52Z"
          />
          <Path fill="#fff" d="M104 51.5 53.75 80.512V22.488L104 51.5Z" />
          <Defs>
            <LinearGradient
              id="a"
              x1={70}
              x2={70}
              y1={0}
              y2={104}
              gradientUnits="userSpaceOnUse"
            >
              <Stop stopColor="#FEEC4A" />
              <Stop offset={1} stopColor="#FFC700" />
            </LinearGradient>
          </Defs>
        </Svg>
        <Image
          style={{
            width: 110,
            height: 110,
            position: 'absolute',
            left: -20,
            top: 40
          }}
          source={require('../../assets/images/quiz.png')}
        />
        <Text
          style={{
            color: 'white',
            fontSize: 13,
            fontFamily: 'm-regular',
            position: 'absolute',
            right: '5%',
            bottom: '8%'
          }}
        >
          Next question in
          <Text style={{ color: '#C5C2FF' }}> {remTime}</Text>
        </Text>
        <Text
          style={{
            color: '#DCDAFF',
            fontSize: 36,
            fontFamily: 'regular',
            position: 'absolute',
            right: '5%',
            bottom: '39%'
          }}
        >
          4/5
        </Text>
        <Text
          style={{
            color: '#DCDAFF',
            fontSize: 13,
            fontFamily: 'm-regular',
            position: 'absolute',
            right: '5%',
            bottom: '31%'
          }}
        >
          remaining
        </Text>
      </View>
    </View>
  );
};

export default QuizCard;
