import { View, SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import { MenuColors, MenuScreenGradient } from "../../constants";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";
import * as Yup from "yup";
import { Formik } from 'formik';
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";
import { Link, useRouter } from "expo-router";
import Spinner from "../../components/Spinner";
import Storage from 'expo-storage'

export default function LogIn() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState();
    const detailsSchema = Yup.object({
        email: Yup.string().email("Invalid email").required("Email is Required"),
        password: Yup.string().min(4, "password must be at least 4 characters").max(16, "password must be at least 16 characters").required("password is required"),
    })
    const Create = async (data: any) => {
        const { email, password } = data;
        try {
            setLoading(true);
            const res = await axios.post(`https://vidhi-backend.onrender.com/login`, {
                email, password
            });
            await Storage.setItem({ key: "token", value: res.data.token });
            router.push("/profile")
        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            {loading ? <Spinner /> :
                <>
                    <View style={{ height: 80 }}>
                        <Text style={{ fontSize: 32, marginTop: 20, fontWeight: "700", color: MenuColors.textColor }}>
                            Create Account
                        </Text>
                    </View>
                    <View style={styles.formContainer}>
                        <Formik
                            initialValues={{
                                email: "",
                                password: "",
                            }}
                            validationSchema={detailsSchema}
                            onSubmit={values => Create(values)}
                        >
                            {({ handleChange, handleSubmit, handleReset, touched, values, isValid, errors }) => (
                                <View>

                                    <View style={{ marginVertical: 10 }}>
                                        <TextInput
                                            placeholder='Enter email' style={styles.inputText}
                                            onChangeText={handleChange('email')}
                                            value={values.email}
                                        />
                                        {touched.email && errors.email && (
                                            <Text style={{ fontSize: 12, color: "red", height: 20, }}>{errors.email}</Text>
                                        )}
                                    </View>
                                    <View style={{ marginVertical: 10 }}>
                                        <TextInput
                                            secureTextEntry={true}
                                            placeholder='Enter password' style={styles.inputText}
                                            onChangeText={handleChange('password')}
                                            value={values.password}
                                        />
                                        {touched.password && errors.password && (
                                            <Text style={{ fontSize: 12, color: "red", height: 20, }}>{errors.password}</Text>
                                        )}
                                    </View>
                                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 20, }}>
                                        <TouchableOpacity style={[styles.btn, { backgroundColor: "#65B741" }]} onPress={() => handleSubmit()}>
                                            <Text style={styles.buttonText}>Log in</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[styles.btn, { backgroundColor: "red" }]} onPress={() => handleReset()}>
                                            <Text style={styles.buttonText}>Reset</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={{ textAlign: "center", marginVertical: 10, opacity: 0.5, fontSize: 14 }}>OR</Text>
                                    <TouchableOpacity style={[styles.btn, { backgroundColor: "#7B66FF" }]} onPress={() => router.push("/auth/Signup")}>
                                        <Text style={styles.buttonText}>Create Account</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </Formik>
                    </View>
                </>}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContainer: {
        marginVertical: 20,
        paddingHorizontal: 20,
        height: 500,
        width: "100%",
    },
    inputText: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#0000006a",
        paddingHorizontal: 10,
        paddingVertical: 0,
        fontSize: 16,
        borderRadius: 5,
    },
    btn: {
        minWidth: "48%",
        height: 50,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        fontSize: 18,
        color: "#ffffff",
        // textAlign:"center"
    },
});