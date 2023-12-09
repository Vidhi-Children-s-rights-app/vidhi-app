import { View, Text, Pressable } from 'react-native';
import React from 'react';

export const MenuHamburger: React.FC<{ onPress: () => void }> = ({
  onPress
}) => {
  return (
    <Pressable
      style={{
        width: 60,
        height: 60,
        margin: 20,
        position: 'absolute',
        zIndex: 50
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 60,
          height: 60,
          backgroundColor: '#ffffff55',
          borderRadius: 35,
          borderWidth: 1,
          borderColor: '#ffffff',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <View>
          <View
            style={{
              width: 30,
              height: 3,
              backgroundColor: '#ffffff',
              borderRadius: 2.5,
              margin: 3
            }}
          ></View>
          <View
            style={{
              width: 30,
              height: 3,
              backgroundColor: '#ffffff',
              borderRadius: 2.5,
              margin: 3
            }}
          ></View>
          <View
            style={{
              width: 30,
              height: 3,
              backgroundColor: '#ffffff',
              borderRadius: 2.5,
              margin: 3
            }}
          ></View>
        </View>
      </View>
    </Pressable>
  );
};

export default MenuHamburger;
