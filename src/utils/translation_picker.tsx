import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { icons } from '../assets/images';
import { MotiView } from 'moti';
import { ButtonColorVariants, FOTD } from '../constants';
import language from '../localizations/languages';
import { UserProvider, useUserContext } from '../context/UserContext';

const LanguagePicker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { i18n } = useTranslation(); //i18n instance

  const { updateLanguage } = useUserContext();

  //array with all supported languages
  const languages = [
    { name: 'hi', label: language.hindi },
    { name: 'tm', label: language.tamil },
    { name: 'en', label: language.english }
  ];

  const LanguageItem = ({ name, label }: { name: string; label: string }) => (
    <Pressable
      onPress={() => {
        i18n.changeLanguage(name);
        updateLanguage(name); //changes the app language
        setModalVisible(!modalVisible);
      }}
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );

  return (
    <View style={styles.wrapper}>
      {/* animationType="slide"
        transparent={true}
        visible={modalVisible}
         onRequestClose={() => {
        setModalVisible(!modalVisible);
        }} */}
      {modalVisible && (
        <MotiView style={styles.modal}>
          {languages.map((lang) => (
            <LanguageItem {...lang} key={lang.name} />
          ))}
        </MotiView>
      )}
      <Pressable onPress={() => setModalVisible(!modalVisible)}>
        <Image style={styles.earth} source={icons.earth} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  earth: {
    width: 50,
    height: 50
  },
  wrapper: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    alignItems: 'flex-end',
    padding: 10
  },
  modal: {
    width: 120,
    borderRadius: 10,
    padding: 6,
    backgroundColor: FOTD.HeaderBackground,
    borderBottomWidth: 3,
    borderLeftWidth: 2,
    borderColor: FOTD.HeaderShadow
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: ButtonColorVariants.wood.text,
    padding: 6,
    margin: 3,
    borderRadius: 15,
    backgroundColor: ButtonColorVariants.wood.background,
    textAlign: 'center'
  }
});

export default LanguagePicker;

// selectlanguage: {
//   width: 200,
//   backgroundColor: "#F5E9C9",
//   minHeight: 100,
//   borderRadius: 8,
//   paddingTop: 6,
//  paddingHorizontal:6,
// },
// textStyle: {
//   fontSize: 18,
//   fontWeight: "500",
//   marginBottom: 6,
//   border
