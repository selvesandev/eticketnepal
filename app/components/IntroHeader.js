import React from 'react'
import { h1_styles, paragraph_styles, primary_color } from '../assets/styles';

import { Text } from 'react-native';
import { GRAY, LIGHT, PRIMARY } from '../config/colors';
const IntroHeader = ({ title, subTitle, titleSpecial }) => {
    return (
        <React.Fragment>
            <Text style={{ ...h1_styles, color: '#555' }}>
                <Text>{title}</Text>&nbsp;
                {titleSpecial ? <Text style={{ color: PRIMARY, fontStyle: 'italic' }}>{titleSpecial}</Text> : null}
            </Text>
            {subTitle ? <Text style={{ ...paragraph_styles, color: LIGHT, opacity: 0.7, marginTop: 0, color: GRAY }}>{subTitle}
            </Text> : null}
        </React.Fragment>
    )
}


export { IntroHeader };