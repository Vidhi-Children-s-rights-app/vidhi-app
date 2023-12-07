import * as Font from 'expo-font';

const JockeyOne = require('./JockeyOne.ttf');
const MontserratAlt = require('./MontserratAlt.ttf');

export async function loadFonts() {
  await Font.loadAsync({
    'heading': JockeyOne,
    'regular': MontserratAlt
  });
}
