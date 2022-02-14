import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Alert, Pressable, Image, Dimensions, Platform } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from "../constants/Colors";
import { RootTabScreenProps } from '../types';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Rosario_400Regular } from '@expo-google-fonts/rosario';
import DateTimePicker from '@react-native-community/datetimepicker';
import { register } from '../hooks/backendAPI'

const RegisterScreen = ({ navigation }: any) => {
  const [email, onChangeEmail] = React.useState("");
  const [user, onChangeUser] = React.useState("");
  const [pass, onChangePass] = React.useState('');
  const [passConf, onChangePassConf] = React.useState('');
  const [birthDate, onChangeDate] = React.useState(new Date());
  const [show, setShow] = useState(true);
  const onDateChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || birthDate;
    setShow(Platform.OS === 'ios');
    onChangeDate(currentDate);
  };



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
          onChangeText={text => {

            onChangePassConf(text)
          }}
        />
        {show && <DateTimePicker
          value={birthDate}

          mode="date"
          display="default"
          onChange={(event: any, selectedDate: any) => selectedDate ? onDateChange(event, selectedDate) : ''}
        />}
        <TextInput
          style={styles.input}
          placeholder="Fecha de Nacimiento dd/mm/aa"
          placeholderTextColor={'white'}
          onChangeText={text => {
            var parts = text.split("/");
            var dt = new Date(parseInt(parts[2], 10),
              parseInt(parts[1], 10) - 1,
              parseInt(parts[0], 10));
            var dt2 = new Date(Date.parse(text))
            if(dt instanceof Date && !isNaN(dt as any)){
              onChangeDate(dt);
            } 
            if(dt2 instanceof Date && !isNaN(dt2 as any)){ 
              onChangeDate(dt2);
            }
          }}
        />
        <View style={styles.buttons}>
        
          <Button
            title='Registrarse'
            style_button={styles.button_2}
            style_text={styles.text_2}
            onPress={() => {
              register({
                user: {
                  email: email,
                  username: user,
                  password: pass,
                  confirm_password: passConf
                },
                birth_date: birthDate.getFullYear()+'-' + (birthDate.getMonth()+1) + '-'+birthDate.getDate()
              }).then((data) => { console.log(data); navigation.navigate('Login') })
            }}
          />
          <Button
              onPress={() => navigation.navigate('Login')}
              title="Volver a Iniciar Sesión"
              style_button={styles.button_1}
              style_text={styles.text_1}
              />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

function Button(props: { onPress: any; title: string | undefined; style_button: any, style_text: any }) {
  const { onPress, title = 'Save', style_button, style_text } = props;
  return (
    <Pressable style={style_button} onPress={onPress}>
      <Text style={style_text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  title: {
    fontSize: 20,
    fontFamily: 'RosarioRegular',
    color: 'white'
  },
  imageTitle: {
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').width * 0.24,
    maxWidth: 540,
    maxHeight: 216
  },
  /*separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },*/
  input: {
    height: 40,
    width: Dimensions.get('window').width * 0.6,
    margin: 12,
    borderWidth: 3,
    padding: 10,
    color: 'white',
    borderColor: 'white'
  },
  buttons: {
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 0,
    flexBasis: 'auto'
  },


  button_1: {
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    borderRadius: 32,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.50,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: 'white',
    width: Dimensions.get('window').width * 0.6,
    maxWidth: 540,
    marginBottom: 5
  },
  text_1: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    fontFamily: 'RosarioRegular',
    color: '#f28e43',
  },
  button_2: {
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    borderRadius: 32,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.50,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: '#966bee',
    width: Dimensions.get('window').width * 0.6,
    maxWidth: 540,
    marginBottom: 5
  },
  text_2: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    fontFamily: 'RosarioRegular',
    color: 'white',
  },
  button_3: {
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    borderRadius: 32,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.50,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: '#966bee',
    width: Dimensions.get('window').width * 0.6,
    maxWidth: 540,
    marginBottom: 5
  },
  text_3: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    fontFamily: 'RosarioRegular',
    color: 'white',
  }

});


export default RegisterScreen;