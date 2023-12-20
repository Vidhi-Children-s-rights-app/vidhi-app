import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import RibbonCard from '../../components/ui/RibbonCard';
import QuizCardContent from '../../components/ui/QuizCardContent';
import LeaderBoardCardContent from '../../components/ui/LeaderBoardCardContent';
import { NavLayout } from '../../components/layout';

const Quiz = () => {
  return (
    <NavLayout currentScreen={3}>
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
            paddingTop: '10%',
            justifyContent: 'flex-start',
            gap: 50,
            alignItems: 'center'
          }}
        >
          <RibbonCard bgColor={'#4F46E5'} ribbonText="d_quiz">
            <QuizCardContent remTime="69:42:00" remainingQ={3} />
          </RibbonCard>
          <RibbonCard bgColor={'#4F46E5'} ribbonText="Leaderboard">
            <LeaderBoardCardContent entries={['HEllo1', 'Hello2', 'Hello3']} />
          </RibbonCard>
        </View>
      </SafeAreaView>
    </NavLayout>
  );
};

export default Quiz;
