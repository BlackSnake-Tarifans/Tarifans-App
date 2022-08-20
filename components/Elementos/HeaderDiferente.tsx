import {
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Text, View } from '../../components/Themed';
import BackButton from './BackButtom';
import styles from '../../components/Styles/HeaderDiferenteStyle';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round((dimensions.width * 13) / 16);
const imageWidth = dimensions.width;

function HeaderDiferente({ props }: any) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          flexDirection: 'column',
          height: imageHeight > 400 ? 400 : imageHeight,
          width: imageWidth,
          backgroundColor: 'transparent',
          alignItems: 'flex-start',
          maxHeight: 400,
        }}
        resizeMode="stretch"
        source={require('../../assets/images/iconos/header_purple.png')}
      >
        <View style={styles.ViewBackButton}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        <Text style={styles.title}>{props}</Text>
      </ImageBackground>
    </View>
  );
}

export default HeaderDiferente;
