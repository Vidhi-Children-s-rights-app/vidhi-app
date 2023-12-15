import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import QuizCard from '../components/ui/QuizCard';

const Quiz = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#3730A3',
        width: '100%',
        height: '100%',
        alignItems: 'center'
      }}
    >
      <View
        style={{
          backgroundColor: '#00000077',
          width: '90%',
          height: '85%',
          borderRadius: 30,
          justifyContent: 'space-evenly',
          alignItems: 'center'
        }}
      >
        <QuizCard />
        <QuizCard />
        <QuizCard />
      </View>
    </SafeAreaView>
  );
};

export default Quiz;
