import React, { useState } from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Text, View } from '../../components/Themed';

function HeaderSinLogo({ navigation }: any) {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Image
            style={styles.backStyleImage}
            source={require('../../assets/images/elementos/back.png')}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Registrar Categoría</Text>
        <Image
          style={styles.imagenSettigns}
          source={require('../../assets/images/assetsTarifans/settings.png')}
        />
      </View>
    </View>
  );
}

export default HeaderSinLogo;

const deviceScale = Dimensions.get('window').scale;
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#f28e43',
    height: wp('30 %'),
    position: 'relative',
    top: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'RosarioRegular',
    color: 'white',
    lineHeight: 50,
    top: 15,
  },
  backStyleImage: {
    padding: 0,
    height: 35,
    width: 35,
    resizeMode: 'stretch',
    top: 15,
    position: 'relative',
    right: 55,
  },
  imagenSettigns: {
    width: hp('5%'),
    height: wp('8 %'),
    resizeMode: 'contain',
    top: 15,
    position: 'relative',
    right: 0,
    left: 55,
  },
});
function onChangeUser(text: string): void {
  throw new Error('Function not implemented.');
}
