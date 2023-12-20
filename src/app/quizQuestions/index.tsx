import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { QuizeScreenGradient } from '../../constants';
import { StyleSheet } from 'react-native';
import TypeWriter from 'react-native-typewriter';
import { mascot_1, mascot_2 } from '../../assets/images';
import { QuizQuestions } from '../../constants/questions';
import { useRouter } from 'expo-router';

const Quize = () => {
    const router = useRouter();
    const randomIndex = Math.floor(Math.random() * QuizQuestions.length);
    const [currentQuestion, setCurrentQuestion] = useState(
        QuizQuestions[randomIndex]
    );
    const [points, setPoints] = useState({
        point: 0,
        isClicked: false
    });
    const validateAns = (ans: number) => {
        if (currentQuestion.ans === ans) {
            setPoints({ point: 100, isClicked: true });
        } else {
            setPoints({ point: 0, isClicked: true });
        }
    };
    return (
        <View>
            <StatusBar backgroundColor={'#3730A3'} />
            <LinearGradient colors={QuizeScreenGradient} style={styles.gradient}>
                {points.isClicked && (
                    <View style={styles.result}>
                        {points.point > 0 ? <Image source={mascot_1} style={{ width: 200, height: 200, marginVertical: 20, zIndex: 100 }} /> : <Image source={mascot_2} style={{ width: 200, height: 200, marginVertical: 20, zIndex: 100 }} />}
                        {points.point > 0 ? (
                            <View>
                                <Text style={[styles.textResult, { marginHorizontal: 10, color: "#2bf011" }]}>Correct Answer ✅</Text>
                                <Text style={styles.textResult}>Yea you have earned {points.point} points !</Text>
                            </View>
                        ) : (
                            <>
                                <Text style={[styles.textResult, { marginHorizontal: 10, color: "#f02b11" }]}>Wrong Answer ❌</Text>
                                <Text style={styles.textResult}>Better luck next time</Text>
                            </>

                        )}
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => router.push('/quiz')}
                        >
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'white' }}>
                                Go Back
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
                <View style={styles.subContainer}>
                    <View style={styles.questionContainer}>
                        <Image source={mascot_1} style={styles.questionImg} />
                        <View style={styles.question}>
                            <TypeWriter style={styles.quesionText} typing={1}>
                                Q. {currentQuestion.questions}
                            </TypeWriter>
                        </View>
                    </View>
                    <View style={styles.questionContainer}>
                        {currentQuestion.Option.map((item, i) => (
                            <TouchableOpacity
                                style={styles.choice}
                                onPress={() => validateAns(i)}
                                key={i}
                            >
                                <Text style={styles.choiceText}>
                                    {i + 1}. {item}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
};

export default Quize;

const styles = StyleSheet.create({
    container: {},
    gradient: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    result: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 100,
        backgroundColor: '#0b2061',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textResult: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
        marginVertical: 20,
        textAlign: "center"
    },
    btn: {
        width: '60%',
        marginHorizontal: '20%',
        backgroundColor: '#1147f0',
        borderRadius: 10,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    answerContainer: {
        minHeight: 50,
        width: '100%',
        backgroundColor: '#ffffffA0',
        borderColor: '#ffffff',
        borderWidth: 2,
        borderRadius: 10,
        marginVertical: 5
    },
    answer: {
        fontWeight: '500',
        paddingVertical: 10,
        marginHorizontal: '5%',
        fontSize: 16
    },
    subContainer: {
        backgroundColor: '#102f94',
        width: '90%',
        marginHorizontal: '5%',
        height: '90%',
        // marginVertical: "5%",
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3
    },
    questionContainer: {
        width: '90%',
        minHeight: 300,
        marginHorizontal: '5%',
        marginTop: 50
    },
    questionImg: {
        width: 150,
        height: 150,
        marginHorizontal: '30%'
    },
    question: {
        width: '100%',
        padding: 10,
        minHeight: 80,
        backgroundColor: '#4F46E5',
        borderRadius: 10,
        marginBottom: 100
    },
    quesionText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF'
    },
    choice: {
        width: '100%',
        padding: 10,
        minHeight: 50,
        backgroundColor: '#4F46E5',
        borderRadius: 10,
        marginBottom: 10
    },
    choiceText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#FFFFFF'
    }
});
