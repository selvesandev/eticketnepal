import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { HomeScreen } from '../screens';
import AuthNavigator from './AuthNavigator';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import { AppHeader } from '../components';

import EventNavigator from './EventNavigator';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigator = () => (
    <Stack.Navigator screenOptions={{
        headerShown: true,
        headerTitle: () => <AppHeader />,
        headerStyle: { elevation: 0 }
    }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen options={{
            headerShown: false,
            tabBarVisible: false,
        }} name="Auth" component={AuthNavigator} />
    </Stack.Navigator>
);



// const AppNavigator = () => (
//     <Tab.Navigator
//         options={{
//             tabBarVisible: false
//         }}
//         tabBarOptions={{
//             tabBarVisible: false
//         }}>
//         <Tab.Screen
//             options={{
//                 tabBarVisible: false,
//                 tabBarIcon: ({ color, size }) => <AntDesign
//                     name="staro"
//                     size={24}
//                     color={color} />
//             }}
//             name="Event"
//             component={EventNavigator} />
//         <Tab.Screen name="Venue"
//             options={{
//                 tabBarIcon: ({ color, size }) => <AntDesign name="home" size={24} color={color} />
//             }}
//             component={EventNavigator} />
//         <Tab.Screen
//             name="Movies"
//             options={{
//                 tabBarIcon: ({ color, size }) => <AntDesign name="videocamera" size={24} color={color} />
//             }}
//             component={EventNavigator} />
//         <Tab.Screen
//             name="More"
//             options={{
//                 tabBarIcon: ({ color, size }) => <AntDesign name="ellipsis1" size={24} color={color} />
//             }}
//             component={EventNavigator} />
//     </Tab.Navigator>
// );


export default AppNavigator;