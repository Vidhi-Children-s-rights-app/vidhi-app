import { SafeAreaView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'expo-router';

import { Clouds } from '../components/ui/Clouds';
import { PrimaryButton } from '../components/PrimaryButton';
import { HomeScreenGradient } from '../constants';

export default function Home() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'MontserratAlternates-Bold': require('../assets/fonts/MontserratAlternates-Bold.ttf')
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
        <Clouds extended={false} />
        <Link href="/menu">
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
    alignItems: 'center'
  }
});
