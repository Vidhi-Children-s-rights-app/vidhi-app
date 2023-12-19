import { useState } from 'react';
import { View } from 'react-native';

import { Icons } from '../../components/ui/Icons';

export const NavLayout: React.FC<{
  children: React.ReactNode;
  currentScreen: number;
}> = ({ children, currentScreen }) => {
  const renderIcons = Icons.filter((_, index) => index !== currentScreen);
  return (
    <View
      style={{
        height: '100%',
        width: '100%'
      }}
    >
      {children}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#ffffff88',
          height: '10%',
          width: '90%',
          margin: '5%',
          borderRadius: 20,
          paddingHorizontal: '5%',
          flexDirection: 'row',
          justifyContent: 'space-evenly'
        }}
      >
        {renderIcons.map((Icon, index) => (
          <Icon key={index} />
        ))}
      </View>
    </View>
  );
};
