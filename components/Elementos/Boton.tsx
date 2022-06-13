import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import styles from '../../components/Styles/ButtonStyle';

export default function Boton(props: {
  onPress: any;
  title: string;
  anchura: number;
  altura: number;
}) {
  const { onPress, title, anchura, altura } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 32,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.5,
          shadowRadius: 2.22,
          backgroundColor: '#ad8feb',
          width: anchura,
          height: altura,
        }}
      >
        <Text style={styles.title}> {title} </Text>
      </TouchableOpacity>
    </View>
  );
}
