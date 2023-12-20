import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'expo-router';

const QuizCardContent: React.FC<{ remTime?: string; remainingQ: number }> = ({
  remTime = '00:00:00',
  remainingQ = 6
}) => {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height: '100%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onPress={() => router.push('/quizQuestions')}
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
          width: '70%',
          height: '70%',
          position: 'absolute',
          left: '-25%',
          resizeMode: 'contain',
          top: 40
        }}
        source={require('../../assets/images/quiz.png')}
      />
      <Text
        style={{
          color: '#ffffffAA',
          fontSize: 13,
          fontFamily: 'm-regular',
          position: 'absolute',
          right: '5%',
          bottom: '10%'
        }}
      >
        {t('next_ques.pre')}
        <Text style={{ color: '#FFFFFF' }}> {remTime}</Text>
        {t('next_ques.post')}

      </Text>
      <Text
        style={{
          color: '#fff',
          fontSize: 36,
          fontFamily: 'regular',
          position: 'absolute',
          right: '5%',
          bottom: '39%'
        }}
      >
        {remainingQ}/7
      </Text>
      <Text
        style={{
          color: '#ffffffAA',
          fontSize: 13,
          fontFamily: 'm-regular',
          position: 'absolute',
          right: '5%',
          bottom: '31%'
        }}
      >
        {t('remaining')}
      </Text>
    </TouchableOpacity>
  );
};

export default QuizCardContent;
