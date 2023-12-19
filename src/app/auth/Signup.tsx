import { View, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';
import { MenuColors } from '../../constants';
import { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import { useRouter } from 'expo-router';
import Spinner from '../../components/Spinner';

export default function CreateAccount() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const detailsSchema = Yup.object({
        name: Yup.string()
            .max(20, 'name at most 20 characters')
            .required('name is required'),
        email: Yup.string().email('Invalid email').required('Email is Required'),
        password: Yup.string()
            .min(4, 'password must be at least 4 characters')
            .max(16, 'password must be at least 16 characters')
            .required('password is required'),
        age: Yup.number()
            .min(10, 'minimum  age 10 years')
            .max(60, 'maximum age')
            .required('Age is required')
    });
    const Create = async (data: any) => {
        const { name, email, password, age } = data;
        try {
            setLoading(true);
            const res = await axios.post(
                `https://vidhi-backend.onrender.com/create`,
                {
                    name,
                    email,
                    password,
                    age
                }
            );
            console.log(res.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            {!loading ? (
                <>
                    <View style={{ height: 80 }}>
                        <Text
                            style={{
                                fontSize: 32,
                                fontWeight: '700',
                                color: MenuColors.textColor
                            }}
                        >
                            Create Account
                        </Text>
                    </View>
                    <View style={styles.formContainer}>
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                password: '',
                                age: ''
                            }}
                            validationSchema={detailsSchema}
                            onSubmit={(values) => Create(values)}
                        >
                            {({
                                handleChange,
                                handleSubmit,
                                handleReset,
                                touched,
                                values,
                                isValid,
                                errors
                            }) => (
                                <View>
                                    <View style={{ marginVertical: 10 }}>
                                        <TextInput
                                            placeholder="Enter name"
                                            style={styles.inputText}
                                            onChangeText={handleChange('name')}
                                            value={values.name}
                                        />
                                        {touched.name && errors.name && (
                                            <Text style={{ fontSize: 12, color: 'red' }}>
                                                {errors.name}
                                            </Text>
                                        )}
                                    </View>
                                    <View style={{ marginVertical: 10 }}>
                                        <TextInput
                                            placeholder="Enter email"
                                            style={styles.inputText}
                                            onChangeText={handleChange('email')}
                                            value={values.email}
                                        />
                                        {touched.email && errors.email && (
                                            <Text style={{ fontSize: 12, color: 'red', height: 20 }}>
                                                {errors.email}
                                            </Text>
                                        )}
                                    </View>
                                    <View style={{ marginVertical: 10 }}>
                                        <TextInput
                                            secureTextEntry={true}
                                            placeholder="Enter password"
                                            style={styles.inputText}
                                            onChangeText={handleChange('password')}
                                            value={values.password}
                                        />
                                        {touched.password && errors.password && (
                                            <Text style={{ fontSize: 12, color: 'red', height: 20 }}>
                                                {errors.password}
                                            </Text>
                                        )}
                                    </View>
                                    <View style={{ marginVertical: 10 }}>
                                        <TextInput
                                            placeholder="Enter age"
                                            style={styles.inputText}
                                            onChangeText={handleChange('age')}
                                            value={values.age}
                                        />
                                        {touched.age && errors.age && (
                                            <Text style={{ fontSize: 12, color: 'red', height: 20 }}>
                                                {errors.age}
                                            </Text>
                                        )}
                                    </View>
                                    <View
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            marginTop: 20
                                        }}
                                    >
                                        <TouchableOpacity
                                            style={[styles.btn, { backgroundColor: '#65B741' }]}
                                            onPress={() => handleSubmit()}
                                        >
                                            <Text style={styles.buttonText}>Sign up</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={[styles.btn, { backgroundColor: 'red' }]}
                                            onPress={() => handleReset()}
                                        >
                                            <Text style={styles.buttonText}>Reset</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text
                                        style={{
                                            textAlign: 'center',
                                            marginVertical: 10,
                                            opacity: 0.5,
                                            fontSize: 14
                                        }}
                                    >
                                        OR
                                    </Text>
                                    <TouchableOpacity
                                        style={[
                                            styles.btn,
                                            { width: '100%', backgroundColor: '#7B66FF' }
                                        ]}
                                        onPress={() =>router.push("/auth/Login")}
                                    >
                                        <Text style={styles.buttonText}>Log in</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </Formik>
                    </View>
                </>
            ) : (
                <Spinner />
            )}
        </SafeAreaView>
    );
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
        width: '100%'
    },
    inputText: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: "#0000006a",
        paddingHorizontal: 10,
        paddingVertical: 0,
        fontSize: 16,
        borderRadius: 5
    },
    btn: {
        minWidth: '48%',
        height: 50,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#ffffff'
        // textAlign:"center"
    }
});
