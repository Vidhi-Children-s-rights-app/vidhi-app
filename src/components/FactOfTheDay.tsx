import { Text, StyleSheet, Image, View } from 'react-native';
import { MotiView } from 'moti';
import { FOTD, DetailPannel } from '../constants';
import { mascot_1 } from '../assets/images';
import { StateDispatcher, StateType } from '../types';
import { useTranslation } from 'react-i18next';
import i18n from '../localizations/i18n.config';
import { useUserContext } from '../context/UserContext';
import languages from '../localizations/languages';

type Props = {
  description: string;
  cloudState: StateType;
  setCloudState: StateDispatcher<StateType>;
};

const FactOfTheDay: React.FC<Props> = ({
  description,
  cloudState,
  setCloudState
}) => {
  const { t } = useTranslation();
  const handler = () => {
    if (cloudState === 'open') setCloudState('closed');
    else setCloudState('open');
  };

  const { language } = useUserContext();
  
  return (
    <View style={styles.wrapper}>
      <MotiView
        style={styles.headerBody}
        from={{ scale: 0, translateY: -20 }}
        animate={{ scale: 1, translateY: 0 }}
        onTouchEnd={handler}
      >
        <Text
          style={{
            fontFamily: 'heading',
            fontSize: language !== 'tm' ? 29 : 20,
            paddingHorizontal: '5%',
            color: FOTD.TextColor,
            fontWeight: 'bold'
          }}
        >
          {t('did_you_know')}
        </Text>
        <Image source={mascot_1} style={styles.image} />
      </MotiView>
      <MotiView
        style={styles.infoBody}
        from={DetailPannel[cloudState].from as any}
        animate={DetailPannel[cloudState].to as any}
      >
        <Text style={styles.infoText}>{description}</Text>
      </MotiView>
    </View>
  );
};

let styles = StyleSheet.create({
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
  infoBody: {
    width: '80%',
    // height: '15%',
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
