import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Pressable, Image, Dimensions} from 'react-native';
import { Text, View } from '../components/Themed';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Rosario_400Regular } from '@expo-google-fonts/rosario';
import Modal from "react-native-modal";

const ChangePasswordScreen = ({ navigation }: any) => {
  const [email, onChangeEmail] = React.useState("");
  const [newpass, onChangeNewPass] = React.useState('');
  const [newpassConf, onChangeNewPassConf] = React.useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText ] = useState('');
  const [changeStatus, setChangeStatus] = useState(true);
  const [changeText, setChangeText] = useState("");

  let [fontsLoaded] = useFonts({ Rosario_400Regular });
  
  const cambioPasswordText = () =>{
    if(changeStatus){
      setModalText("Contraseña Cambiada");
      setChangeText("Volver a Inicio de sesión")
    }else{
      setModalText("Error");
      setChangeText("Cerrar")
    }
  }

  const manejarCambio = () =>{
    if(changeStatus){
      setModalVisible(!modalVisible);
      navigation.navigate("Login");
    }else{
      setModalVisible(!modalVisible);
    }
  }
  return (
    <SafeAreaView style={styles.container}>

      <Modal
         hasBackdrop={true}
         isVisible={modalVisible}
         onBackdropPress={() => {
         setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.container2}>
          <View style={styles.modalV}>
            <Text style={{padding:10, fontSize: 20, fontFamily: 'RosarioRegular',}}>{modalText}</Text>
            <Pressable
            style={styles.button_2}
              onPress={() => {
                manejarCambio();
              }}
            >
              <Text style={styles.text_2}>{changeText}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <LinearGradient style={styles.background} colors={['#f28e43', '#966bee']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0.7 }} locations={[0, 0.95]}>
        <Image style={styles.imageTitle} source={require('../assets/images/tarifans_palabra_color_blanco.png')} />
        <Text style={styles.title}>Cambio de contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo Electronico"
          placeholderTextColor={'white'}
          onChangeText={text => onChangeEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Nueva Contrasena"
          placeholderTextColor={'white'}
          secureTextEntry={true}
          onChangeText={text => onChangeNewPass(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar Nueva Contrasena"
          placeholderTextColor={'white'}
          secureTextEntry={true}
          onChangeText={text => {
            onChangeNewPassConf(text)
          }}
        />
        <View style={styles.buttons}>
        
          <Button
            title='Cambiar Contrasena'
            style_button={styles.button_2}
            style_text={styles.text_2}
            onPress={() => {
              /* Añadir aquí metodo para cambiar contraseña  
              cambiarPassword({
                user: {
                  email: email,
                  newpassword: newpass,
                  confirm_password: newpassConf
                },
                birth_date: birthDate.getFullYear()+'-' + (birthDate.getMonth()+1) + '-'+birthDate.getDate()
              }).then((data) => { console.log(data); navigation.navigate('Login') })*/
              setModalVisible(!modalVisible);
              cambioPasswordText();
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
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
  modalV:{
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  container2: {
    borderRadius: 25,
    borderStyle: "solid",
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
    paddingHorizontal: 12,
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


export default ChangePasswordScreen;