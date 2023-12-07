import {
  Text,
  StyleSheet,
  ImageBackground,
  View,
  Pressable
} from 'react-native';
import { MotiView } from 'moti';
import { FOTD, detailPannel } from '../constants';
import { mascot_1 } from '../assets/images';
import { CloudStateDispatcher, CloudStateType } from '../types';

type Props = {
  description: string;
  cloudState: CloudStateType;
  setCloudState: CloudStateDispatcher;
};

const FactOfTheDay: React.FC<Props> = ({
  description,
  cloudState,
  setCloudState
}) => {
  const handler = () => {
    if (cloudState === 'open') setCloudState('closed');
    else setCloudState('open');
  };

  return (
    <View style={styles.wrapper}>
      <MotiView
        style={styles.headerBody}
        from={{ scale: 0.5 }}
        animate={{ scale: 1 }}
      >
        <Text style={styles.headerText}>Did you know?</Text>

        <ImageBackground source={mascot_1} style={styles.image}>
          <Pressable
            style={{ height: '100%', width: '100%' }}
            onPress={handler}
          />
        </ImageBackground>
      </MotiView>
      <MotiView
        style={styles.infoBody}
        from={detailPannel[cloudState].from}
        animate={detailPannel[cloudState].to}
      >
        <Text style={styles.infoText}>{description}</Text>
      </MotiView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    top: 0
  },
  headerBody: {
    width: '80%',
    height: '9%',
    backgroundColor: FOTD.HeaderBackground,
    borderColor: FOTD.HeaderShadow,
    borderRadius: 20,
    marginTop: '4%',
    zIndex: 20,
    borderBottomWidth: 3,
    borderLeftWidth: 2,
    justifyContent: 'center'
  },
  headerText: {
    fontFamily: 'heading',
    fontSize: 35,
    paddingHorizontal: '5%',
    color: FOTD.TextColor
  },
  infoBody: {
    width: '80%',
    height: '10%',
    backgroundColor: FOTD.HeaderBackground,
    borderColor: FOTD.HeaderShadow,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRadius: 20,
    zIndex: 15,
    margin: 30
  },
  infoText: {
    fontFamily: 'regular',
    fontSize: 15,
    padding: '5%',
    color: 'orange'
  },
  image: {
    position: 'absolute',
    width: 100,
    height: 100,
    right: -20
  }
});

export default FactOfTheDay;
