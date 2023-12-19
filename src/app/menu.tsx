import { SafeAreaView, StyleSheet, View, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import { useEffect } from 'react';

import { MenuColors, MenuScreenGradient } from '../constants';
// import Home from "../assets/images/home.png";
// import Book from "../assets/images/books.png";
// import Community from "../assets/images/community.png";
// import Quize from "../assets/images/quize.png";
import Profile1 from "../assets/images/profile1.png";
import Settings from '../assets/images/settings.png';

export default function Menu() {
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'MontserratAlternates-Bold': require('../assets/fonts/MontserratAlternates-Bold.ttf'),
          'JockeyOne-Regular': require('../assets/fonts/JockeyOne-Regular.ttf')
        });
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={MenuScreenGradient} style={styles.gradient}>
        <View style={styles.topMenu}>
          <View>
            <Image source={Profile1} style={{ width: 60, height: 60 }} />
          </View>
          <Text style={{ fontSize: 22, fontWeight: "700", marginStart: 20, color: MenuColors.textColor }}>vidhi_2601</Text>
          <View style={styles.settingContainer}>
            <Image source={Settings} style={styles.settingImg} />
          </View>
        </View>
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
  },
  topMenu: {
    marginTop: 20,
    width: '90%',
    Height: 80,
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 20,
    backgroundColor: MenuColors.TopMenuBgColor,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    borderWidth: 1,
    borderColor:"#91CF43"
  },
  settingContainer: {
    position: "absolute",
    right: 0,
    bottom:-50,
    width: 70,
    height: 70,
    borderRadius:70,
    display: "flex",
    justifyContent: "center",
   alignItems:"center",
    backgroundColor: MenuColors.bgColor,
    borderWidth:1,
    borderColor: "#ffffff",
  },
  settingImg: {
    width: 50,
    height: 50,
    objectFit: "contain"
  },
  bottomMenu: {
    width: '90%',
    Height: 80,
    borderRadius: 20,
    padding: 4,
    backgroundColor: MenuColors.bgColor,
    marginBottom: 20,
    // opacity: .3,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  Image: {
    width: 90,
    height: 70,
    objectFit: "contain",
    // opacity: 1
  }
});
