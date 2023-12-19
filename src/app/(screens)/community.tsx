import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import RibbonCard from '../../components/ui/RibbonCard';
import LeaderBoardCardContent from '../../components/ui/LeaderBoardCardContent';
import { NavLayout } from '../../components/layout';
import JoinSchool from '../../components/ui/JoinSchool';
import { ScrollView } from 'react-native-gesture-handler';
import UpcomingEventCard from '../../components/ui/UpcomingEventCard';

const Community = () => {
  return (
    <NavLayout currentScreen={4}>
      <SafeAreaView
        style={{
          backgroundColor: '#6A30A3',
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
            paddingTop: '7%',
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              height: '100%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'flex-start'
            }}
            style={{ height: '100%', width: '100%' }}
          >
            <JoinSchool />
            <RibbonCard bgColor={'#9046E5'} ribbonText="Leaderboard">
              <LeaderBoardCardContent
                entries={['HEllo1', 'Hello2', 'Hello3']}
              />
            </RibbonCard>
            <RibbonCard bgColor={'#9046E5'} ribbonText="Event">
              <UpcomingEventCard></UpcomingEventCard>
            </RibbonCard>
          </ScrollView>
        </View>
      </SafeAreaView>
    </NavLayout>
  );
};

export default Community;
