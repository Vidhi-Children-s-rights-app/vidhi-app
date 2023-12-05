import { Text, StyleSheet } from 'react-native';
import React from 'react';
import { MotiView } from 'moti';

const FactOfTheDay = () => {
  return (
    <MotiView style={styles.wrapper}>
      <Text style={styles.header}>
        Did you know?
      </Text>
    </MotiView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    backgroundColor: '#FFF0CA',
    borderRadius: 20,
    width: '80%',
    height: '9%',
    marginTop: '4%',
    borderColor: '#D0C197',
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    justifyContent: 'center'
  },
  header: {
    fontFamily: 'JockeyOne-Regular',
    fontSize: 35,
    paddingHorizontal: '5%',
    color: '#FF7A35'
  }
});

export default FactOfTheDay;
