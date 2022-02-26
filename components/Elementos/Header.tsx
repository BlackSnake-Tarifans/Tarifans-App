import React, { useState } from "react";
import { View } from '../../components/Themed';
import { Image, TouchableOpacity, TextInput } from 'react-native';
import styles from '../../components/Styles/HeaderStyle';

function onChangeUser(text: string): void {
    throw new Error("Function not implemented.");
}

const Header = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/images/assetsTarifans/tarifans palabra color blanco.png')}
                />
            </TouchableOpacity>
            <View style={styles.SectionStyle}>
                <TextInput
                    style={{ flex: 1 }}
                    placeholder="Nombre de usuario"
                    placeholderTextColor={'#9D9D9E'}
                    onChangeText={text => onChangeUser(text)}
                />
            </View>
            <Image style={styles.imagenSettigns} source={require('../../assets/images/assetsTarifans/settings.png')} />
        </View>
    );
};

export default Header;