import { View, Text, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';

const JoinSchool = () => {
  const {t}=useTranslation();
  return (
    <LinearGradient
      colors={['#241137', '#24113700']}
      style={{
        width: '85%',
        height: '35%',
        borderRadius: 20,
        borderColor: '#985AE899',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10%'
      }}
    >
      <Image
        style={{ width: '30%', height: '50%', aspectRatio: 1 }}
        source={require('../../assets/images/bag.png')}
      />
      <Text
        style={{
          fontFamily: 'regular',
          color: '#DFC7F8',
          fontSize: 28,
          width: '60%',
          textAlign: 'center'
        }}
      >
        {t('join_school')}
      </Text>
    </LinearGradient>
  );
};

export default JoinSchool;
