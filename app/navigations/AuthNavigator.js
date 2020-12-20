import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ForgotPassword, LoginScreen, RegisterScreen } from '../screens';

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator screenOptions={{
        headerShown: false, tabBarVisible: false,
    }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
);


export default AuthNavigator;