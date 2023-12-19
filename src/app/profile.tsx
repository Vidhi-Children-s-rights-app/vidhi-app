import React, { useEffect, useState } from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import Storage from 'expo-storage';
import axios from 'axios';
import { UserType } from '../types';
import AntDesign from '@expo/vector-icons/AntDesign';
import Material from '@expo/vector-icons/MaterialIcons';
import Spinner from '../components/Spinner';
import { Dropdown } from 'react-native-element-dropdown';

const UserProfile = () => {
    const [user, setUser] = useState<UserType>();
    const [loading, setLoading] = useState<boolean>(false);
    const [editProfile, setEditProfile] = useState(false);
    const [updateDetails, setUpdateDetails] = useState({
        age: '',
        phone: '',
        sex: ''
    });

    const updateProfile = async () => {
        try {
            setLoading(true);
            const token = await Storage.getItem({ key: 'token' });
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            const res = await axios.post(
                'https://vidhi-backend.onrender.com/profile/update',
                { updateDetails },
                config
            );
            console.log(res.data)
            if (res.data.user) {
                setUser(res.data.user);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
            setEditProfile(false)
        }
    };
    const findUser = async () => {
        try {
            setLoading(true);
            const token = await Storage.getItem({ key: 'token' });
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            const res = await axios.post(
                'https://vidhi-backend.onrender.com/profile',
                null,
                config
            );
            console.log(res.data)
            if (res.data.user) {
                setUser(res.data.user);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        findUser();
    }, [editProfile]);
    return (
        <>
            <SafeAreaView style={styles.container}>
                {loading ? <Spinner /> :
                    <>
                        <View style={styles.TopContainer}>
                            <View style={styles.TopLeft}>
                                <AntDesign name="left" size={28} color={'#4a4d4f'} />
                                <Text style={styles.back}> Back</Text>
                            </View>
                            <Material name="menu" size={50} color={'#4a4d4f'} />
                        </View>
                        <View style={styles.userContainer}>
                            <View style={[styles.userTopContainer, { paddingVertical: 20, }]}>
                                <View style={styles.leftContainer}>
                                    <Text style={styles.textStyle}>5</Text>
                                    <Text style={styles.textStyle}>complete modules</Text>
                                </View>
                                <View style={styles.centerContainer}>
                                    <Image
                                        source={{
                                            uri: 'https://images.pexels.com/photos/19423080/pexels-photo-19423080/free-photo-of-mawr-lighthouse-on-a-rock-of-welsh-llanddwyn-island.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                                        }}
                                        width={100}
                                        height={100}
                                        style={{ borderRadius: 10 }}
                                    />
                                    <Text
                                        style={[styles.textStyle, { marginVertical: 8, fontSize: 16 }]}
                                    >
                                        {user?.name}
                                    </Text>
                                </View>
                                <View style={styles.rightContainer}>
                                    <Text style={styles.textStyle}>5</Text>
                                    <Text style={styles.textStyle}>Coins</Text>
                                </View>
                            </View>
                            <View style={{ padding: 20 }}>
                                <Text style={[styles.header]}>Personal Details</Text>
                                <View style={styles.userTopContainer}>
                                    <Text style={styles.textStyle}>User Id</Text>
                                    <Text style={styles.inputStyle}>{user?._id}</Text>
                                </View>
                                <View style={styles.userTopContainer}>
                                    <Text style={styles.textStyle}>Name</Text>
                                    <Text style={styles.inputStyle}>{user?.name}</Text>
                                </View>
                                <View style={styles.userTopContainer}>
                                    <Text style={styles.textStyle}>Email</Text>
                                    <TextInput value={user?.email} style={styles.inputStyle} />
                                </View>
                                <View style={styles.userTopContainer}>
                                    <Text style={styles.textStyle}>Age</Text>
                                    {!editProfile ? (
                                        <Text style={styles.inputStyle}>{user?.age}</Text>
                                    ) : (
                                        <TextInput
                                            defaultValue={user?.age}
                                            value={user?.age}
                                            style={styles.inputStyle}
                                            placeholder="Age "
                                            onChangeText={(text) =>
                                                setUpdateDetails({ ...updateDetails, age: text })
                                            }
                                        />
                                    )}
                                </View>
                                <View style={styles.userTopContainer}>
                                    <Text style={styles.textStyle}>Phone no</Text>
                                    {!editProfile ? (
                                        <Text style={styles.inputStyle}>{user?.phone}</Text>
                                    ) : (
                                        <TextInput
                                            value={user?.phone}
                                            style={styles.inputStyle}
                                            placeholder="Mobile no"
                                            keyboardType="numeric"
                                            onChangeText={(text) =>
                                                setUpdateDetails({ ...updateDetails, phone: text })
                                            }
                                        />
                                    )}
                                </View>
                                <View style={styles.userTopContainer}>
                                    <Text style={styles.textStyle}>Gender</Text>
                                    {!editProfile ? (
                                        <Text style={styles.inputStyle}>{user?.sex}</Text>
                                    ) : (
                                        <TextInput
                                            value={user?.sex}
                                            style={styles.inputStyle}
                                            placeholder="Gender"
                                            onChangeText={(text) =>
                                                setUpdateDetails({ ...updateDetails, sex: text })
                                            }
                                        />
                                    )}
                                </View>
                            </View>
                            {!editProfile ? (
                                <TouchableOpacity
                                    style={styles.btn}
                                    onPress={() => setEditProfile(true)}
                                >
                                    <Text style={styles.btnText}>Edit Profile</Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity
                                    style={styles.btn}
                                    onPress={updateProfile}
                                >
                                    <Text style={styles.btnText}>Save Profile</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </>}
            </SafeAreaView>
        </>
    );
};

export default UserProfile;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#63c5f2'
    },
    TopContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 10
    },
    TopLeft: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    back: {
        fontSize: 20,
        fontWeight: '500',
        color: '#4a4d4f'
    },
    userContainer: {
        marginTop: 30,
        width: '100%',
        backgroundColor: '#fff',
        height: '100%',
        borderRadius: 20,
        position: 'relative'
    },
    userTopContainer: {
        paddingVertical: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    leftContainer: {
        width: '33%'
    },
    centerContainer: {
        width: '40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",
        marginHorizontal: "30%"
    },
    rightContainer: {
        width: '33%'
    },
    textStyle: {
        textAlign: 'center',
        fontWeight: '600',
        color: '#4d4f4d',
        textTransform: 'capitalize'
    },
    header: {
        fontWeight: '600',
        color: '#4d4f4d',
        textTransform: 'capitalize',
        fontSize: 16,
        marginVertical: 10
    },
    inputStyle: {
        fontSize: 14,
        paddingVertical: 5,
        paddingHorizontal: 8,
        fontWeight: '500',
        borderBottomWidth: 1,
        borderBottomColor: '#ebebeb',
        color: '#6a6e6b',
        width: '70%'
    },
    btn: {
        width: '50%',
        height: 50,
        backgroundColor: '#9141f2',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginHorizontal: '25%',
        marginTop: 10
    },
    btnText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white'
    }
});
