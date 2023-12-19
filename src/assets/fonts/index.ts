import * as Font from 'expo-font';

const JockeyOne = require('./JockeyOne.ttf');
const MontserratAlt = require('./MontserratAlt.ttf');
const MontserratAlt_M = require('./MontserratAlt-M.ttf');

export async function loadFonts() {
  await Font.loadAsync({
    heading: JockeyOne,
    regular: MontserratAlt,
    'm-regular': MontserratAlt_M
  });
}
