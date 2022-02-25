import { Text, View } from '../../components/Themed';
import { StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Dimensions } from 'react-native';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 13 / 16);
const imageWidth = dimensions.width;

const HeaderDiferente = ({ props }: any) => {
    const navigation = useNavigation();
    return (
            <View style={styles.container}>
                    <ImageBackground
                        style={{ flexDirection: 'column', height: imageHeight, width: imageWidth, backgroundColor: 'transparent',alignItems:'flex-start'}}
                        resizeMode='cover'
                        source={require('../../assets/images/iconos/header_purple.png')}>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Image style={styles.backStyleImage} source={require('../../assets/images/iconos/back.png')} />
                        </TouchableOpacity>
                        <Text style={styles.title}>{props}</Text>
                    </ImageBackground>
                </View>
    );
};

export default HeaderDiferente;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems:'flex-start',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        position:'relative'
    },
    backStyleImage: {
        position:'relative',
        height: 40,
        width: 40,
        resizeMode: 'stretch',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop:60,
        left:40,
        bottom:7
    },
    title: {
        position:'relative',
        fontSize: 35,
        fontWeight: "bold",
        fontFamily: 'RosarioRegular',
        color: 'white',
        left:40,
    },
})