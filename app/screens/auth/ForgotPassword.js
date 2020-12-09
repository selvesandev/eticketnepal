import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { auth_container, auth_input_container, paragraph_styles } from '../../assets/styles';
import { AppButton, AppCheckBoxField, AuthInputField, IntroHeader, TextLink, VerticalSpacing } from '../../components';

function ForgotPassword(props) {
    return (

        <SafeAreaView style={auth_container}>
            <View style={auth_input_container}>
                <IntroHeader title={"No worry, We got you covered!"} subTitle={"Enter your registered email address to receive a password reset link."} />

                <VerticalSpacing height={20} />
                <AuthInputField keyboardType={"email-address"} placeholder={'Enter your email'} icon={'user'} />


                <VerticalSpacing height={30} />
                <AppButton disabled={false} label="Sign up" onClick={() => {
                    console.log("You are here..")
                }} />

                <Text style={{ ...paragraph_styles }}><TextLink href="Login">Sign in.</TextLink></Text>

            </View>
        </SafeAreaView>
    );
}


export { ForgotPassword };