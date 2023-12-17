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
    >
      <Tabs.Screen
        name="quiz"
        options={{
          title: 'Quiz',
          headerShown: false,
          tabBarItemStyle: { display: 'none' }
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: 'Community',
          headerShown: false
        }}
      />
    </Tabs>
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
