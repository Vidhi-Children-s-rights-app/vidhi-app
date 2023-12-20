import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image, StatusBar, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { QuizeScreenGradient } from '../../constants'
import { StyleSheet } from 'react-native'
import TypeWriter from 'react-native-typewriter'
import urvi from "../../assets/images/mascot_1.png"

const Quize = () => {
    return (
        <View>
            <StatusBar backgroundColor={"#3730A3"}/>
            <LinearGradient colors={QuizeScreenGradient} style={styles.gradient}>
                <View style={styles.subContainer}>
                    <View style={styles.questionContainer}>
                        <Image source={urvi} style={styles.questionImg} />
                        <View style={styles.question}>
                            <TypeWriter style={styles.quesionText} typing={1}>
                                Q.1 Can you quickly tell me your email address?
                            </TypeWriter>
                        </View>
                    </View>
                    <View style={styles.questionContainer}>
                        <View style={styles.choice}>
                            <Text style={styles.choiceText}>a. Explore mono fonts at MyFonts</Text>
                         </View>
                        <View style={styles.choice}>
                            <Text style={styles.choiceText}>b. Explore mono fonts at MyFonts</Text>
                         </View>
                        <View style={styles.choice}>
                            <Text style={styles.choiceText}>c. Explore mono fonts at MyFonts</Text>
                         </View>
                        <View style={styles.choice}>
                            <Text style={styles.choiceText}>d. Explore mono fonts at MyFonts</Text>
                         </View>
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}

export default Quize

const styles = StyleSheet.create({
    container: {
      
    },
    gradient: {
        height:"100%",
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    subContainer: {
        position: 'absolute',
        backgroundColor: "#102f94",
        width: "90%",
        marginHorizontal: "5%",
        height: "90%",
        // marginVertical: "5%",
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    questionContainer: {
        width: "90%",
        minHeight: 300,
        marginHorizontal: "5%",
        marginTop:50
    },
    questionImg: {
        width: 150,
        height: 150,
        marginHorizontal:"30%"
    },
    question: {
        width: "100%",
        padding: 10,
        minHeight:80,
        backgroundColor: "#4F46E5",
        borderRadius: 10,
        marginBottom:100,
    },
    quesionText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#FFFFFF",
    },
    choice: {
        width: "100%",
        padding: 10,
        minHeight: 50,
        backgroundColor: "#4F46E5",
        borderRadius: 10,
        marginBottom: 20,
    },
    choiceText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#FFFFFF",
    },
})