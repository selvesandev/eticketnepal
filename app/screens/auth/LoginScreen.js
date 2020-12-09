import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { paragraph_styles, auth_input_container, auth_container } from '../../assets/styles';
import { AppButton, AuthInputField, IntroHeader, VerticalSpacing, TextLink } from '../../components';
import { FACEBOOK, GOOGLE, PRIMARY } from '../../config/colors';

function LoginScreen({ navigation }) {
    return (
        <SafeAreaView style={auth_container}>
            <View style={auth_input_container}>
                <IntroHeader title={"What's your login info?"} subTitle={"Welcome back, login to your dashboard to manage your event activities."} />

                <VerticalSpacing height={20} />
                <AuthInputField keyboardType={"email-address"} placeholder={'Enter your email'} icon={'user'} />

                <VerticalSpacing height={15} />
                <AuthInputField isPassword={true} placeholder={'Password'} icon={'lock'} />

                <VerticalSpacing height={40} />
                <AppButton disabled={false} label="Sign In" onClick={() => {
                    console.log("You are here..")
                }} />

                <VerticalSpacing height={20} />
                <View style={{ textAlign: 'center', alignItems: 'center' }}>
                    <Text>Or</Text>
                    <Text style={{ ...paragraph_styles }}>you can choose to sign in with <Text onPress={() => {
                        console.log("Fcabo");
                    }} style={{ color: FACEBOOK, textDecorationLine: 'underline' }}>Facebook</Text> or <Text style={{ color: GOOGLE, textDecorationLine: 'underline' }}>Google</Text>
                    </Text>
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
                    <TextLink href="Register">Sign up</TextLink>

                    <TextLink href="ForgotPassword">Forgot Password</TextLink>

                    {/* <TextLink style={{ ...paragraph_styles, color: PRIMARY, textDecorationLine: 'underline' }}>Forgot Password</TextLink> */}
                </View>
            </View>
        </SafeAreaView>
    );
}


export { LoginScreen };