import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import RibbonCard from '../../components/ui/RibbonCard';
import LeaderBoardContent from '../../components/ui/LeaderBoardContent';
import { NavLayout } from '../../components/layout';
import JoinSchool from '../../components/ui/JoinSchool';

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
        <JoinSchool />
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
          <RibbonCard bgColor={'#9046E5'} ribbonText="LeaderBoard">
            <LeaderBoardContent entries={['HEllo1', 'Hello2', 'Hello3']} />
          </RibbonCard>
        </View>
      </SafeAreaView>
    </NavLayout>
  );
};

export default Community;