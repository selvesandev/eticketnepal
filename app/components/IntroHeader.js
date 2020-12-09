import React from 'react'
import { h1_styles, paragraph_styles, primary_color } from '../assets/styles';

import { Text } from 'react-native';
import { LIGHT } from '../config/colors';
const IntroHeader = ({ title, subTitle }) => {
    return (
        <React.Fragment>
            <Text style={{ ...h1_styles, ...primary_color }}>{title}</Text>
            {subTitle ? <Text style={{ ...paragraph_styles, color: LIGHT, opacity: 0.7 }}>{subTitle}
            </Text> : null}
        </React.Fragment>
    )
}


export { IntroHeader };