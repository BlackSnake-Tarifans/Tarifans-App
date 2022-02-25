import React, { useState } from "react";
import { Text, View } from '../../components/Themed';
import { SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


/*<Image
                style={styles.rectangulo}
                source={require('../../assets/images/assetsTarifans/RectangleHeader.png')}
                />*/
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

const deviceScale = Dimensions.get('window').scale;
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#f28e43',
        height: wp('30 %'),
        position: 'relative',
        top: 0
    },
    logo: {
        width: hp('12%'),
        height: wp('10 %'),
        resizeMode: 'contain',
        top: 15,
        left: 15,
    },
    SectionStyle: {
        flexDirection: 'row',
        width: hp('24%'),
        height: wp('10 %'),
        marginTop: 0,
        borderRadius: 25,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 10,
        right: 0,
        top: 15,
    },
    ImageStyle: {
        padding: 10,
        marginRight: 10,
        marginLeft: 5,
        height: 20,
        width: 20,
        resizeMode: 'stretch',
        alignItems: 'center',
        alignSelf: 'center',
        opacity: 0.4
    },
    imagenSettigns: {
        width: hp('5%'),
        height: wp('8 %'),
        resizeMode: 'contain',
        top: 15,
        right: 14,
    }
})
function onChangeUser(text: string): void {
    throw new Error("Function not implemented.");
}

