import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal, View, Text, Pressable, StyleSheet, Image } from "react-native";
import earth from "../assets/images/earth.png";


const LanguagePicker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { i18n } = useTranslation(); //i18n instance

  //array with all supported languages
  const languages = [
    { name: "hi", label: "Hindi" },
    { name: "en", label: "English" },
  ];

  const LanguageItem = ({ name, label }: { name: string; label: string }) => (
    <Pressable
      onPress={() => {
        i18n.changeLanguage(name); //changes the app language
        setModalVisible(!modalVisible);
      }}
    >
      <Text >{label}</Text>
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
          {modalVisible && <View
        style={styles.modal}
          >
            {languages.map((lang) => (
              <LanguageItem {...lang} key={lang.name} />
            ))}
          </View>}
      <Pressable 
        onPress={() => setModalVisible(!modalVisible)}>
        <Image style={styles.earth} source={earth}/>
      </Pressable>
    </View>
  );
};

const styles=StyleSheet.create({
  earth:{
    //  backgroundColor:'red',
    width:50,
    height:50,
    
  },
  wrapper:{
    width:'100%',
    position:'absolute',
    bottom:0,
    display:'flex',
    alignItems:'flex-end',
    padding:10
  },
  modal:{
    width:100,
    height:100,
    backgroundColor:'red'
  }
});

export default LanguagePicker;
