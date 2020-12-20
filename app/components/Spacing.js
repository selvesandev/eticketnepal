import React from 'react'
import { View } from 'react-native';
const VerticalSpacing = ({ height }) => {
    return (
        <View style={{ height }} />
    )
}


const HorizontalSpacing = ({ width }) => {
    return (
        <View style={{ width }} />
    )
}


export { VerticalSpacing, HorizontalSpacing };