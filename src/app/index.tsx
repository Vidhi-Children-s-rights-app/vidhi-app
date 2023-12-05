import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { PrimaryButton } from '../components/PrimaryButton';
import { HomeScreenGradient } from '../constants';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'expo-router';

export default function Page() {
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
      <LinearGradient
        // Background Linear Gradient
        colors={HomeScreenGradient}
        style={styles.gradient}
      >
        <Link href="/settings">
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
    justifyContent: 'center',
    alignItems: 'center'
  }
});
