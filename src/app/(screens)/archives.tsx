import { View, Text } from 'react-native';
import React from 'react';
import { NavLayout } from '../../components/layout';

const archives = () => {
  return (
    <NavLayout currentScreen={2}>
      <View>
        <Text>archives</Text>
      </View>
    </NavLayout>
  );
};

export default archives;
