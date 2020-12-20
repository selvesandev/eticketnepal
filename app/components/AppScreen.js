import React from 'react'
import { SafeAreaView, View, SrollView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { page_style } from '../assets/styles'

const AppScreen = ({ children, style }) => {
    return (
        <SafeAreaView style={{ ...page_style, ...style }}>
            <View>{children}</View>
        </SafeAreaView>
    )
}

export { AppScreen };
