import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Alert, Pressable, Image, Dimensions, Platform, TouchableOpacity, ImageBackground } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from "../constants/Colors";
import { RootTabScreenProps } from '../types';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Rosario_400Regular } from '@expo-google-fonts/rosario';
import DateTimePicker from '@react-native-community/datetimepicker';
import { register } from '../hooks/backendAPI';



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
  const dimensions = Dimensions.get('window');
  const imageHeight = Math.round(dimensions.width * 13 / 16);
  const imageWidth = dimensions.width;

  const [text1, onChangeNumber] = React.useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  let [fontsLoaded] = useFonts({ Rosario_400Regular });

  return (
    <SafeAreaView style={styles.container}>        
      <View style={styles.ViewTop}>
        <ImageBackground
        style={{height: imageHeight, width: imageWidth, borderStartColor:'transparent',alignItems:'flex-start'}}
        resizeMode='cover'        
        source={require('../assets/images/iconos/header_purple.png')}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Image style={styles.backStyleImage} source={require('../assets/images/iconos/back.png')} />
        </TouchableOpacity>
        <Text style={styles.title}>Crear{"\n"}Cuenta</Text>
        </ImageBackground>
      </View>
        
      <View style={styles.ViewMiddle}>
          <View style={styles.SectionStyle}>
            <Image style={styles.ImageStyle} source={require('../assets/images/iconos/nombre_usuario.png')} />
            <TextInput
                style={{ flex: 1 }}
                placeholder="Nombre de usuario"
                placeholderTextColor={'#9D9D9E'}
                onChangeText={text => onChangeUser(text)}
            />
          </View>
          <View style={styles.SectionStyle}>
            <Image style={styles.ImageStyle} source={require('../assets/images/iconos/email.png')} />
            <TextInput
                style={{ flex: 1 }}
                placeholder="Correo electrónico"
                placeholderTextColor={'#9D9D9E'}
                onChangeText={text => onChangeEmail(text)}
            />
          </View>
          <View style={styles.SectionStyle}>
            <Image style={styles.ImageStyle} source={require('../assets/images/iconos/password.png')} />
            <TextInput
                style={{ flex: 1 }}
                placeholder="Contraseña"
                placeholderTextColor={'#9D9D9E'}
                secureTextEntry={true}
                onChangeText={text => onChangePass(text)}
            />
          </View>
          <View style={styles.SectionStyle}>
            <Image style={styles.ImageStyle} source={require('../assets/images/iconos/password.png')} />
            <TextInput
                style={{ flex: 1 }}
                placeholder="Confirmar contraseña"
                placeholderTextColor={'#9D9D9E'}
                secureTextEntry={true}
                onChangeText={text => {

                  onChangePassConf(text)
                }}
            />
          </View>
          <View style={styles.SectionStyle}>
            <Image style={styles.ImageStyle} source={require('../assets/images/iconos/date.png')} />
            <TextInput
                style={{ flex: 1 }}
                placeholder="Fecha de nacimiento dd/mm/aa"
                placeholderTextColor={'#9D9D9E'}
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
          </View>
        </View>
        
        <View style={styles.ViewEnd}>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button_2} activeOpacity={0.5}
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
            >                      
              <Text style={styles.text_2}> Registrarse </Text>
              <Image style={styles.ImageStyle} source={require('../assets/images/iconos/right-arrow.png')} />
            </TouchableOpacity>      
          </View> 
          <View style={styles.vistaFinal}>
          <Text style={styles.textoFinal1}>¿Ya tienes una cuenta? </Text>
          <Text style={styles.textoFinal2} onPress={() => navigation.navigate('Login')}>Inicia Sesión</Text>
        </View>
      </View>     
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
    justifyContent: 'center',
    backgroundColor:'white'
  },
  backStyleImage:{
    padding: 0,
    marginTop:50,
    marginLeft: 40,
    marginBottom: 20,
    height: 40,
    width: 40,
    resizeMode: 'stretch',
    alignItems: 'center',
    alignSelf: 'center'
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: 'RosarioRegular',
    color: 'white',
    marginLeft:40,
    lineHeight: 50    
  },  
  /*separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },*/
  SectionStyle: {
    flexDirection: 'row',
    height: 50,
    width: Dimensions.get('window').width * 0.8,
    margin:10,
    borderRadius: 15,
    backgroundColor: 'rgba(52, 52, 52, 0.04)',
    padding: 10,
  },
  ViewTop:{
    backgroundColor:'white',
    width: Dimensions.get('window').width,
    position: 'absolute',
    top:0
  },  
  ViewMiddle:{
    alignItems: 'center',
    backgroundColor:'transparent',
    width: Dimensions.get('window').width,
    position: 'relative',
    top:40
  },
  ViewEnd:{
    alignItems: 'center',
    backgroundColor:'transparent',
    width: Dimensions.get('window').width,
    position: 'absolute',
    bottom:0
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
  input: {
    flex:1,
    height: 40,
    width: Dimensions.get('window').width * 0.7,
    marginLeft:40,
    marginTop: 25,
    borderRadius: 5,
    backgroundColor: 'rgba(52, 52, 52, 0.05)',
    padding: 10,
    color: 'green',
    borderColor: 'white'
  },
  buttons: {
    backgroundColor: 'rgba(0,0,0,0)',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginBottom:140,
    marginRight:40
  },    
  button_2: {
    flexDirection: 'row',
    position:'relative',
    height:60,
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
    width: Dimensions.get('window').width * 0.4,
    maxWidth: 540,
  },
  text_2: {
    fontSize: 20,
    marginLeft:5,
    lineHeight: 21,
    letterSpacing: 0.25,
    fontFamily: 'RosarioRegular',
    color: 'white',
  },
  vistaFinal:{
    backgroundColor: 'transparent',
    alignSelf:'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 50
  },
  textoFinal1:{
    fontSize: 15,
    letterSpacing: 0.25,
    fontFamily: 'RosarioRegular',
    color: '#9D9D9E',
  },
  textoFinal2:{
    fontSize: 15,
    letterSpacing: 0.25,
    fontFamily: 'RosarioRegular',
    color: '#f28e43',
  }
});


export default RegisterScreen;