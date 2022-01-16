import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Alert, Pressable, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from "../constants/Colors";
import { RootTabScreenProps } from '../types';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Rosario_400Regular } from '@expo-google-fonts/rosario';
import DateTimePicker from '@react-native-community/datetimepicker';


const RegisterScreen = ({ navigation }: any) => {
  const [email, onChangeEmail] = React.useState("");
  const [user, onChangeUser] = React.useState("");
  const [pass, onChangePass] = React.useState('');
  const [passConf, onChangePassConf] = React.useState('');
  const [birthDate, onChangeDate] = React.useState(new Date());

  const [text1, onChangeNumber] = React.useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  let [fontsLoaded] = useFonts({ Rosario_400Regular });

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient style={styles.background} colors={['#f28e43', '#966bee']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0.7 }} locations={[0, 0.95]}>
        <Image style={styles.imageTitle} source={require('../assets/images/tarifans_palabra_color_blanco.png')} />
        <Text style={styles.title}>Registro de Usuarios</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor={'white'}
          onChangeText={text => onChangeUser(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo Electronico"
          placeholderTextColor={'white'}
          onChangeText={text => onChangeEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contrasena"
          placeholderTextColor={'white'}
          secureTextEntry={true}
          onChangeText={text => onChangePass(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar Contrasena"
          placeholderTextColor={'white'}
          secureTextEntry={true}
          onChangeText={text => onChangePassConf(text)}
        />
        <DateTimePicker
          value={birthDate}
          mode="date"
          display="default"
          onChange={ (selectedDate : any) => onChangeDate(selectedDate)}
        />
        <TextInput
          style={styles.input}
          placeholder="Fecha de Nacimiento dd/mm/aa"
          placeholderTextColor={'white'}
        />
        <View>
          <Button
            title='Registrarse'
            onPress={() => navigation.navigate('Root')}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

function Button(props: { onPress: any; title: string | undefined }) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  title: {
    fontSize: 20,
    fontFamily: 'Rosario_400Regular',
    color: 'white'
  },
  imageTitle: {
    width: '60vw',
    height: '24vw',
    maxWidth: 540,
    maxHeight: '216px'
  },
  /*separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },*/
  input: {
    height: 40,
    width: '60%',
    margin: 12,
    borderWidth: 3,
    padding: 10,
    color: 'white',
    borderColor: 'white'
  },
  button: {
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'gray',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

});


export default RegisterScreen;