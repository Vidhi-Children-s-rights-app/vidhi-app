import 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import { router } from 'expo-router';

import { Clouds, MainBalloon } from '../components/ui';
import { PrimaryButton } from '../components/PrimaryButton';
import FactOfTheDay from '../components/FactOfTheDay';
import { HomeScreenGradient } from '../constants';
import type { StateType } from '../types';
import { loadFonts } from '../assets/fonts';
import { Balloons } from '../components/ui/Balloons';

export default function Home() {
  const [cloudState, setCloudState] = useState<StateType>('default');
  const [pauseBalloon, setPauseBalloon] = useState<boolean>(false);
  const [appIsReady, setAppIsReady] = useState(false);
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

  const startParllax = () => {
    console.log('Routing...');
    setCloudState('closed');
    setPauseBalloon(false);
    const routing = setTimeout(() => router.push('/module/34'), 700);
    return () => {
      clearTimeout(routing);
    };
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={HomeScreenGradient} style={styles.gradient}>
        <Clouds currentState={cloudState} />
        <FactOfTheDay
          description={
            'Minimum age for employment of children is 14 years. According to the Child Labour Law, making children less than the age of 14 work is considered a crime.'
          }
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
          onTap={startParllax}
        >
          start your journey
        </PrimaryButton>
      </LinearGradient>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative'
  }
});
