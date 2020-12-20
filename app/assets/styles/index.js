import { DARK, GRAY, PRIMARY } from "../../config/colors"
import Constants from 'expo-constants';
export const page_style = {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 20,
    // paddingTop: Constants.statusBarHeight
};

export const auth_container = {
    justifyContent: 'center',
    alignItems: 'center',
    ...page_style
};

export const auth_input_container = {
    width: '80%',
};


export const h1_styles = {
    fontSize: 24,
    fontWeight: 'bold',
    color: DARK
}

export const primary_color = {
    color: PRIMARY
}


export const paragraph_styles = {
    fontSize: 13,
    lineHeight: 18,
    marginTop: 10,
    color: GRAY
}

export const title_style = {
    fontWeight: 'bold',
    color: '#444'
}