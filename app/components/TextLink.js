import React from 'react'
import { paragraph_styles } from '../assets/styles';

import { Text } from 'react-native';
import { PRIMARY } from '../config/colors';
import { useNavigation } from '@react-navigation/native';

const TextLink = ({ onClick, href, children }) => {
    const navigation = useNavigation();

    return (<Text style={{ ...paragraph_styles, color: PRIMARY, textDecorationLine: 'underline' }} onPress={() => {
        if (href) {
            navigation.navigate(href);
        }
        if (onClick) {
            onClick();
        }
    }}>{children}</Text>);
}


export { TextLink };