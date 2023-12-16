import { View, Text } from 'react-native';
import React from 'react';

interface Props {
  isSchool: boolean;
}

const SchoolDetails: React.FC<Props> = ({ isSchool = false }) => {
  return (
    <View>
      <Text>SchoolDetails</Text>
    </View>
  );
};

export default SchoolDetails;
