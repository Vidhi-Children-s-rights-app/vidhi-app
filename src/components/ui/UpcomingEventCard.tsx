import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const UpcomingEventCard: React.FC<{}> = ({}) => {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <View
        style={{
          backgroundColor: '#2a2585',
          width: '50%',
          height: '70%',
          borderRadius: 20,
          position: 'absolute',
          top: '20%',
          right: '6%',
          borderLeftWidth: 2,
          borderBottomWidth: 2,
          borderColor: '#ffffff44',
          paddingHorizontal: 15,
          paddingVertical: 3,
          justifyContent: 'space-evenly'
        }}
      >
        <Text
          style={{
            fontFamily: 'regular',
            fontSize: 16,
            color: '#B8A4D3',
            textAlign: 'center'
          }}
        >
          {'no\n ongoing\n events'}
        </Text>
      </View>
      <Image
        style={{
          width: '75%',
          height: '75%',
          resizeMode: 'contain',
          position: 'absolute',
          top: '18%',
          left: '-12%'
        }}
        source={require('../../assets/images/events.png')}
      />

      <Image
        style={{
          width: '60%',
          height: '60%',
          resizeMode: 'contain',
          position: 'absolute',
          top: '60%',
          left: '65%'
        }}
        source={require('../../assets/images/badge.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lbentry: {
    fontFamily: 'm-regular',
    fontSize: 16,
    color: '#ffffff',
    width: '100%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }
});

export default UpcomingEventCard;
