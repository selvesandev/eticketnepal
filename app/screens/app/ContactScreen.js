import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { auth_container } from '../../assets/styles';

function ContactScreen(props) {
    return (
        <SafeAreaView style={auth_container}>
            <Text>Home</Text>
        </SafeAreaView>
    );
}


export { ContactScreen };