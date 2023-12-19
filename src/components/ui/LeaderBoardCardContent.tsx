import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';
interface Props {
  entries: string[];
  rank?: string;
}
const LeaderBoardCardContent: React.FC<Props> = ({
  entries,
  rank = '- - - -'
}) => {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <Image
        style={{
          width: '70%',
          height: '70%',
          resizeMode: 'contain',
          position: 'absolute',
          top: '11%',
          left: '-12%'
        }}
        source={require('../../assets/images/trophy.png')}
      />
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
        {entries[0] && (
          <Text
            style={{
              ...styles.lbentry,
              backgroundColor: '#FBE158',
              color: '#B56C28'
            }}
          >
            {entries[0]}
          </Text>
        )}
        {entries[1] && (
          <Text
            style={{
              ...styles.lbentry,
              backgroundColor: '#D0D0D0',
              color: '#6B6B6B'
            }}
          >
            {entries[1]}
          </Text>
        )}
        {entries[2] && (
          <Text
            style={{
              ...styles.lbentry,
              backgroundColor: '#B56C28',
              color: '#fff'
            }}
          >
            {entries[2]}
          </Text>
        )}
      </View>
      <View
        style={{
          backgroundColor: '#2a2585',
          padding: 0,
          position: 'absolute',
          width: '35%',
          bottom: '10%',
          left: '5%',
          borderLeftWidth: 1,
          borderBottomWidth: 1,
          borderColor: '#ffffff44',
          borderRadius: 8,
          paddingHorizontal: '8%',
          paddingVertical: '4%',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}
      >
        <Svg
          style={{ marginRight: '5%' }}
          width="30%"
          height="80%"
          viewBox="0 0 37 25"
          fill="none"
        >
          <Path
            d="M0 12.834a2 2 0 012-2h6.278a2 2 0 012 2V23a2 2 0 01-2 2H2a2 2 0 01-2-2V12.834z"
            fill="#DA8461"
          />
          <Path
            d="M13.361 2a2 2 0 012-2h6.278a2 2 0 012 2v21a2 2 0 01-2 2H15.36a2 2 0 01-2-2V2z"
            fill="#DABB61"
          />
          <Path
            d="M26.722 7a2 2 0 012-2H35a2 2 0 012 2v16a2 2 0 01-2 2h-6.278a2 2 0 01-2-2V7z"
            fill="#B7AEC1"
          />
        </Svg>
        <Text
          style={{
            fontSize: 12,
            color: '#ffffff'
          }}
        >
          {rank}
        </Text>
      </View>
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

export default LeaderBoardCardContent;
