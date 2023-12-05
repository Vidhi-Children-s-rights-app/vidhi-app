import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, StyleSheet } from 'react-native';
import { HomeScreenGradient } from '../../constants';
import { PrimaryButton } from '../../components/PrimaryButton';
import { Link } from 'expo-router';

export default function Settings() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={HomeScreenGradient}
        style={styles.gradient}
      >
        <Link href="/settings">
          <PrimaryButton variant={{ size: 'large', color: 'yellow' }}>
            this is settings
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
