import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { View } from '../../components/Themed';
import styles from '../../components/Styles/BackButtomStyle';

export default function BackButton(props: { onPress: any }) {
  const navigation = useNavigation();
  const { onPress } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={styles.backStyleImage}
          source={require('../../assets/images/iconos/back.png')}
        />
      </TouchableOpacity>
    </View>
  );
}
