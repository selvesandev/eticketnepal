import React, { useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, TextInput, Button } from 'react-native';
import { h1_styles, paragraph_styles, primary_color } from '../../assets/styles';
import { VerticalSpacing } from '../../components';
import colors from '../../config/colors';
import { AntDesign } from '@expo/vector-icons'

function RegisterScreen(props) {
    const [focusInput, setfocusInput] = useState('');
    return (
        <SafeAreaView style={styles.auth_container}>
            <View style={styles.auth_input_container}>
                <Text style={{ ...h1_styles, ...primary_color }}>What's your login info?</Text>
                <Text style={{ ...paragraph_styles, color: colors.light, opacity: 0.7 }}>Welcome back, login to your dashboard to manage your event activities.</Text>


                <VerticalSpacing height={20} />

                <View style={{ width: '85%' }}>
                    <AntDesign color={(focusInput !== 'email' ? '#ccc' : colors.primary)} name={'user'} style={{ position: 'absolute', top: 15 }} />
                    <TextInput onFocus={() => {
                        setfocusInput('email')
                    }} keyboardType="email-address" placeholder={'Enter your email'} style={{ borderBottomColor: (focusInput !== 'email' ? '#ccc' : colors.primary), borderBottomWidth: 1, height: 40, position: 'relative', width: '100%', paddingLeft: 20, fontWeight: 'bold' }} />
                </View>
                <VerticalSpacing height={15} />


                <View style={{ width: '85%' }}>
                    <AntDesign color={(focusInput !== 'password' ? '#ccc' : colors.primary)} name={'lock'} style={{ position: 'absolute', top: 15 }} />
                    <TextInput secureTextEntry={true} onFocus={() => {
                        setfocusInput('password')
                    }} keyboardType="email-address" placeholder={'Password'} style={{ borderBottomColor: (focusInput !== 'password' ? '#ccc' : colors.primary), borderBottomWidth: 1, height: 40, position: 'relative', width: '100%', paddingLeft: 20, fontWeight: 'bold' }} />
                </View>

                <VerticalSpacing height={40} />
                <View style={{ width: '85%' }}>
                    <Button title="Sign in" onPress={() => {
                        console.log("Herel..");
                    }} color={colors.primary} />
                </View>
                <VerticalSpacing height={20} />
                <View style={{ textAlign: 'center', alignItems: 'center', width: '85%' }}>
                    <Text>Or</Text>
                    <Text style={{ ...paragraph_styles }}>you can choose to sign in with <Text onPress={() => {
                        console.log("Fcabo");
                    }} style={{ color: colors.facebook, textDecorationLine: 'underline' }}>Facebook</Text> or <Text style={{ color: colors.google, textDecorationLine: 'underline' }}>Google</Text></Text>
                </View>
                <VerticalSpacing height={20} />
                <View
                    style={{
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 0.4,
                    }}
                />
                <VerticalSpacing height={3} />
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ ...paragraph_styles, color: colors.primary, textDecorationLine: 'underline' }}>Sign up</Text>

                    <Text style={{ ...paragraph_styles, color: colors.primary, textDecorationLine: 'underline' }}>Forgot Password</Text>
                </View>
            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    auth_container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    auth_input_container: {
        width: '80%',
        // alignItems: 'center',
    },
    header_light: {
        fontSize: 20
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
});

export { RegisterScreen };