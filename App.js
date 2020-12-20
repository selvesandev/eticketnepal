
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import NavigationTheme from './app/navigations/NavigationTheme';
import AppNavigator from './app/navigations/AppNavigator';

export default function App() {
  return (<NavigationContainer theme={NavigationTheme} initialRouteName="Event">
    <AppNavigator />
    {/* <TabNavigator /> */}
  </NavigationContainer>);
}