import { DefaultTheme } from '@react-navigation/native';
import { PRIMARY } from '../config/colors';

export default {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: PRIMARY,
        background: 'white'
    }
}
