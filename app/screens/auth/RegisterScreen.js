import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { auth_container, auth_input_container, paragraph_styles } from '../../assets/styles';
import { AppButton, AppCheckBoxField, AuthInputField, IntroHeader, TextLink, VerticalSpacing } from '../../components';

function RegisterScreen(props) {
    return (
        <SafeAreaView style={auth_container}>
            <View style={auth_input_container}>
                <IntroHeader title={"Create your login info?"} subTitle={"Register to eticketnepal and rejoince with infinite amount of entertainment"} />

                <VerticalSpacing height={20} />
                <AuthInputField keyboardType={"email-address"} placeholder={'Enter your email'} icon={'user'} />

                <VerticalSpacing height={15} />
                <AuthInputField isPassword={true} placeholder={'Password'} icon={'lock'} />


                <VerticalSpacing height={15} />
                <AuthInputField isPassword={true} placeholder={'Confirm Password'} icon={'lock'} />

                <VerticalSpacing height={15} />
                <AppCheckBoxField >
                    <Text style={{ ...paragraph_styles, lineHeight: 12 }}>I agree with all the <TextLink>Terms and conditions</TextLink></Text>
                </AppCheckBoxField>

                <VerticalSpacing height={30} />
                <AppButton disabled={false} label="Sign up" onClick={() => {
                    console.log("You are here..")
                }} />

                <Text style={{ ...paragraph_styles }}>Already have an account? <TextLink href="Login">Sign in.</TextLink></Text>

            </View>
        </SafeAreaView>
    );
}


export { RegisterScreen };