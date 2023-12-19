import 'react-native-gesture-handler';
import '../localizations/i18n.config';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { Clouds, MainBalloon } from '../components/ui';
import { PrimaryButton } from '../components/PrimaryButton';
import FactOfTheDay from '../components/FactOfTheDay';
import { HomeScreenGradient } from '../constants';
import type { StateType } from '../types';
import { loadFonts } from '../assets/fonts';
import { Balloons } from '../components/ui/Balloons';
import LanguagePicker from '../utils/translation_picker';

export default function Home() {
  const [cloudState, setCloudState] = useState<StateType>('default');
  const [pauseBalloon, setPauseBalloon] = useState<boolean>(true);
  const [appIsReady, setAppIsReady] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    async function prepare() {
      try {
        await loadFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const startRouting = () => {
    setCloudState('closed');
    setPauseBalloon(true);
    console.log('routing');
    setTimeout(() => router.push('/menu'), 700);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={HomeScreenGradient} style={styles.gradient}>
        <Clouds currentState={cloudState} />
        <FactOfTheDay
          description={t('FOTD.1')}
          cloudState={cloudState}
          setCloudState={setCloudState}
        />
        <MainBalloon
          pauseBalloon={pauseBalloon}
          setPauseBalloon={setPauseBalloon}
        />
        <Balloons />
        <PrimaryButton
          variant={{ size: 'large', color: 'yellow' }}
          onTap={startRouting}
        >
          {t('buttons.start')}
        </PrimaryButton>
      </LinearGradient>
      <LanguagePicker />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gradient: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative'
  }
});
