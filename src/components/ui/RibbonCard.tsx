import { View, Text, Image } from 'react-native';
import React from 'react';
import Ribbon from './Ribbon';
import Svg, { Defs, Path, Stop, LinearGradient } from 'react-native-svg';
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
import { BigShouldersStencilText_900Black } from '@expo-google-fonts/dev';

const RibbonCard: React.FC<{
  bgColor: string;
  ribbonText: string;
  children: React.ReactNode;
}> = ({ bgColor, ribbonText, children }) => {
  return (
    <View
      style={{
        width: '90%',
        height: '25%',
        position: 'relative',
        alignItems: 'center',
        marginBottom: '10%'
      }}
    >
      <Ribbon text={ribbonText} />
      <ExpoLinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        locations={[0, 0.1, 0.9, 1]}
        colors={['#ffffff77', '#00000000', '#00000000', '#00000077']}
        style={{
          backgroundColor: bgColor,
          width: '85%',
          height: '100%',
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ExpoLinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          locations={[0, 0.05, 0.95, 1]}
          colors={['#00000077', '#00000000', '#00000000', '#ffffff55']}
          style={{
            backgroundColor: 'transparent',
            width: '100%',
            height: '100%',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {children}
        </ExpoLinearGradient>
      </ExpoLinearGradient>
    </View>
  );
};

export default RibbonCard;
