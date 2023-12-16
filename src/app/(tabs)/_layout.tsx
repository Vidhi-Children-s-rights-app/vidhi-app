import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabStyle
      }}
    ></Tabs>
  );
};

const styles = StyleSheet.create({
  tabStyle: {
    position: 'absolute',
    backgroundColor: '#ffffff88',
    height: '10%',
    maxWidth: '100%',
    elevation: 0,
    marginHorizontal: '5%',
    marginBottom: '5%',
    borderRadius: 20
  }
});

export default _layout;
