import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Pressable, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Rosario_400Regular } from '@expo-google-fonts/rosario';
import Modal from "react-native-modal";
import HeaderDiferente from "../components/Elementos/HeaderDiferente";
import Boton from "../components/Elementos/Boton";


const deviceWidth = Dimensions.get('window').width;

const ChangePasswordScreen = ({ navigation }: any) => {
  const [email, onChangeEmail] = React.useState("");
  const [newpass, onChangeNewPass] = React.useState('');
  const [newpassConf, onChangeNewPassConf] = React.useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');
  const [changeStatus, setChangeStatus] = useState(true);
  const [changeText, setChangeText] = useState("");
  const titulo = "Cambia tu \nContraseña";

  let [fontsLoaded] = useFonts({ Rosario_400Regular });

  const cambioPasswordText = () => {
    if (changeStatus) {
      setModalText("¡Su contraseña ha sido restablecida con éxito!");
      setChangeText("Volver")
    } else {
      setModalText("Error");
      setChangeText("Cerrar")
    }
  }

  const manejarCambio = () => {
    if (changeStatus) {
      setModalVisible(!modalVisible);
      navigation.navigate("Login");
    } else {
      setModalVisible(!modalVisible);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <View style={styles.ViewTop}>
          <HeaderDiferente props={titulo} />
        </View>

        <Modal
          hasBackdrop={true}
          isVisible={modalVisible}
          onBackdropPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.modalV}>
            <Text style={{ padding: 10, fontSize: 20, fontFamily: 'RosarioRegular', color: '#949494', textAlign: 'center' }}>{modalText}</Text>
            <Boton onPress={() => { manejarCambio(); }} title={changeText} anchura={120} altura={45} />
          </View>
        </Modal>

        <View style={styles.ViewMiddle}>

          <View style={styles.SectionStyle}>

            <Text style={styles.TextfileTitle}>Correo Electrónico</Text>
            <TextInput
              placeholder="Ingrese su correo electrónico..."
              placeholderTextColor={'#b3b3b3'}
              onChangeText={text => onChangeEmail(text)}
            />
          </View>

          <View style={styles.SectionStyle}>
            <Text style={styles.TextfileTitle}>Nueva Contraseña</Text>
            <TextInput
              placeholder="Ingrese la nueva contraseña..."
              placeholderTextColor={'#b3b3b3'}
              secureTextEntry={true}
              onChangeText={text => onChangeNewPass(text)}
            />
          </View>

          <View style={styles.SectionStyle}>
            <Text style={styles.TextfileTitle}>Confirmar contraseña</Text>
            <TextInput
              placeholder="Ingrese la nueva contraseña..."
              placeholderTextColor={'#b3b3b3'}
              secureTextEntry={true}
              onChangeText={text => {
                onChangeNewPassConf(text)
              }}
            />
          </View>

        </View>

        <View style={styles.ViewEnd}>

          <View style={styles.ViewCancelar}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.BotonCancelar}>
              <Text style={styles.title}>Cancelar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ViewConfirmar}>
            <Boton onPress={() => {
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
            }} title="Confirmar Contraseña" anchura={240} altura={55} />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  SectionStyle: {
    flexDirection: 'column',
    height: 70,
    width: Dimensions.get('window').width * 0.8,
    margin: 10,
    borderRadius: 15,
    backgroundColor: 'rgba(52, 52, 52, 0.04)',
    padding: 10,
  },
  ViewTop: {
    position: 'relative',
    width: deviceWidth,
    backgroundColor: 'transparent'
  },
  ViewMiddle: {
    position: 'relative',
    top: -30,
    width: deviceWidth,
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  ViewEnd: {
    position: 'relative',
    alignItems: 'center',
    bottom: 0,
    top: 0,
    backgroundColor: 'transparent',
  },
  modalV: {
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white'
  },
  TextfileTitle: {
    fontWeight: 'bold',
    color: '#f28e43'
  },
  ViewCancelar:{
    backgroundColor:'transparent'
  },
  ViewConfirmar:{
    marginTop:15,
    backgroundColor:'transparent'
  },
  BotonCancelar:{
    alignItems: 'center',
    justifyContent: 'center',   
    backgroundColor: 'white',
    width: 240,
    height: 55,
    borderRadius:35,
    borderWidth:1,
    borderColor:'#b3b3b3'
  },
  title: {
    fontSize: 20,
    fontFamily: 'RosarioRegular',
    color: '#949494',
    fontWeight: 'bold',
    textAlign: "center"
}
});


export default ChangePasswordScreen;