import React, { useState } from 'react';
import { Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { View } from '../../components/Themed';
import styles from '../../components/Styles/HeaderStyle';

function onChangeUser(text: string): void {
  // throw new Error("Function not implemented.");
}

function Header({ navigation }: any) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/assetsTarifans/tarifans_palabra_color_blanco.png')}
        />
      </TouchableOpacity>
      <View style={styles.SectionStyle}>
        <Image
          style={styles.ImageStyle}
          source={require('../../assets/images/iconos/lupa.png')}
        />
        <TextInput
          style={{ flex: 1, fontSize: 15 }}
          placeholder="Busca un usuario..."
          placeholderTextColor="#9D9D9E"
          onFocus={() => {
            navigation.navigate('Search');
          }}
          onChangeText={() => {}}
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Image
          style={styles.imagenSettigns}
          source={require('../../assets/images/assetsTarifans/settings.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

export default Header;
