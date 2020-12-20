import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ContactScreen, HomeScreen } from '../screens';
import AuthNavigator from './AuthNavigator';
import { AppHeader } from '../components';
const Stack = createStackNavigator();

const EventNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: true, headerTitle: () => <AppHeader />, headerStyle: { elevation: 0 } }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen options={{
            headerShown: false,
            tabBarVisible: false,
        }} name="Auth" component={AuthNavigator} />
    </Stack.Navigator>
);


export default EventNavigator;