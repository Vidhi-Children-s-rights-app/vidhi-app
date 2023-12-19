import { SafeAreaView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'expo-router';

import { Clouds, MainBalloon } from '../components/ui';
import { PrimaryButton } from '../components/PrimaryButton';
import { HomeScreenGradient } from '../constants';
import FactOfTheDay from '../components/FactOfTheDay';
import type { CloudStateType } from "../types";

export default function Home() {
  const [cloudState, setCloudState] = useState<CloudStateType>('default');
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'MontserratAlternates-Bold': require('../assets/fonts/MontserratAlternates-Bold.ttf'),
          'JockeyOne-Regular': require('../assets/fonts/JockeyOne-Regular.ttf')
        });
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

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={HomeScreenGradient} style={styles.gradient}>
        <Clouds currentState={cloudState} />
        <FactOfTheDay description={'sau dhai whd aw uio sefy saaatw hayu rg eua sy'} cloudState={cloudState} setCloudState={setCloudState} />
        <MainBalloon />
        <Link href="/auth/Signup" style={{ position: 'absolute', bottom: '10%' }}>
          <PrimaryButton variant={{ size: 'large', color: 'yellow' }}>
            start your journey
          </PrimaryButton>
        </Link>
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
