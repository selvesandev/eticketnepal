
import React from 'react';
// import { StyleSheet, SafeAreaView } from 'react-native';
// import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks'
import { LoginScreen, RegisterScreen } from './app/screens';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './app/navigations/AuthNavigator';
import NavigationTheme from './app/navigations/NavigationTheme';
// const Stack = createStackNavigator();
// const StackNavigator = () => (
//   <Stack.Navigator screenOptions={{
//     headerShown: false
//   }}>
//     <Stack.Screen name="Login" component={LoginScreen} />
//     <Stack.Screen name="Register" component={RegisterScreen} />
//   </Stack.Navigator>
// );


export default function App() {
  // const { landscape } = useDeviceOrientation();
  return (<NavigationContainer theme={NavigationTheme} initialRouteName="Login">
    <AuthNavigator />
  </NavigationContainer>)
  // return (
  //   <SafeAreaView style={styles.container}>
  //     <LoginScreen />
  //   </SafeAreaView>
  // );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//      alignItems: 'center',
//      justifyContent: 'center',
//   },
// });
