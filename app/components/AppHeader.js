import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AppSearchField } from './AppInputFields';
import { HorizontalSpacing } from './Spacing';

const AppHeader = () => {
    const navigation = useNavigation();
    return (<View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }}>
        <View style={{ flex: 3.5 }}>
            <AppSearchField height={40} />
        </View>
        <HorizontalSpacing width={20} />
        <View style={{
            marginTop: 10,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Auth');
            }}>
                <AntDesign name="user" size={24} color="black" />
            </TouchableOpacity>
            <AntDesign name="menufold" size={24} color="black" />
        </View>
    </View>);
}

export { AppHeader };