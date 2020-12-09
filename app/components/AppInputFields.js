import React, { useState } from 'react'
import { View, TextInput, Button, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { PRIMARY, DIMLIGHT, GRAY } from '../config/colors';
import CheckBox from '@react-native-community/checkbox';

export const AuthInputField = ({ value, placeholder, keyboardType, icon, isPassword = false, onChangeText }) => {
    const [focusInput, setfocusInput] = useState('');

    return <View style={{}}>
        <AntDesign
            color={(focusInput !== 'email' ? '#ccc' : PRIMARY)}
            name={icon || 'question'}
            style={{ position: 'absolute', top: 15 }} />
        <TextInput
            value={value}
            onFocus={() => {
                setfocusInput('email')
            }}
            onChangeText={onChangeText}
            onBlur={() => {
                setfocusInput('');
            }}
            fontWeight="bold"
            secureTextEntry={isPassword}
            keyboardType={keyboardType}
            placeholder={placeholder}
            style={{ borderBottomColor: (focusInput !== 'email' ? '#ccc' : PRIMARY), borderBottomWidth: 1, height: 40, position: 'relative', width: '100%', paddingLeft: 20, fontWeight: 'bold' }} />
    </View>;
}


export const AppButton = ({ onClick, label, disabled, loading = false }) => {
    return <View style={{ backgroundColor: (loading || disabled ? DIMLIGHT : PRIMARY), textAlign: 'center', paddingTop: 10, paddingBottom: 10 }}>
        <TouchableOpacity disabled={disabled || loading} onPress={onClick}>

            {loading ? <ActivityIndicator animating={true} color="white" /> : <Text style={{ color: 'white', textAlign: 'center' }}>{label}</Text>}

        </TouchableOpacity>
        {/* <Button title={label} onPress={onClick} disabled={disabled} color={PRIMARY} /> */}
    </View>;
}


export const AppCheckBoxField = ({ disabled = false, value, onChange, children }) => {
    const [isChecked, updateIsChecked] = useState(false)

    return <View style={{ display: 'flex', flexDirection: 'row' }}>

        {/* style={{ height: 20, width: 20 }} */}

        <CheckBox

            disabled={disabled}
            value={isChecked}
            onFillColor={PRIMARY}
            tintColors={{ true: PRIMARY, false: GRAY }}
            onValueChange={(newValue) => {
                updateIsChecked(newValue);
                if (onChange) onChange(newValue);
            }}
        />
        <Text style={{ marginTop: 10 }} onPress={() => {
            if (onChange) onChange(!isChecked);
            updateIsChecked(!isChecked);

        }}>{children}</Text>
        {/* <Text style={{ lineHeight: 35, fontSize: 13.4, color: '#444' }}>I Agree to terms and conditions</Text> */}
    </View>
}