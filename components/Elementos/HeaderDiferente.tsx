import { Text, View } from '../../components/Themed';
import { StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Dimensions } from 'react-native';
import BackButton from './BackButtom';
import styles from '../../components/Styles/HeaderDiferenteStyle';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 13 / 16);
const imageWidth = dimensions.width;

const HeaderDiferente = ({ props }: any) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ImageBackground
                style={{ flexDirection: 'column', height: imageHeight, width: imageWidth, backgroundColor: 'transparent', alignItems: 'flex-start' }}
                resizeMode='cover'
                source={require('../../assets/images/iconos/header_purple.png')}>
                <View style={styles.ViewBackButton}>
                    <BackButton onPress={() => navigation.navigate('Login')} />
                </View>
                <Text style={styles.title}>{props}</Text>
            </ImageBackground>
        </View>
    );
};

export default HeaderDiferente;