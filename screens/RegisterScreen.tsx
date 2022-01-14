import React, { useState }  from "react";
import { SafeAreaView, StyleSheet, TextInput , Alert , Pressable , Modal } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from "../constants/Colors";
import { RootTabScreenProps } from '../types';

const RegisterScreen = ({navigation}) => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [text1, onChangeNumber] = React.useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Registro de Usuarios</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          placeholder="Correo Electronico"
        />
        <TextInput
          style={styles.input}
          placeholder="Contrasena"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar Contrasena"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Fecha de Nacimiento dd/mm/aa"
        />
        <View>
          <Button
            title='Registrarse'
            onPress={() => navigation.navigate('Root')}
          />
        </View>
      </SafeAreaView>
  );
};

function Button(props: { onPress: any; title: string | undefined }) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.button}  onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  /*separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },*/
  input: {
    height: 40,
    width: '50%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
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