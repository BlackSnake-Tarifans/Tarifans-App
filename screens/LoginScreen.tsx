import React from "react";
import { SafeAreaView, StyleSheet, TextInput , Alert , Pressable } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';


const LoginScreen = ({ navigation }) => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [text1, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title }>Inicio de sesión</Text>
      <Text style={styles.title}>Usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
      />
      <Text style={styles.title}>Contrasena</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <View>
        <Button
            onPress={() => {}}
            title="Iniciar Sesión"
          />
        <Button
          onPress={() => navigation.navigate('Modal')}
          title="Registrarse"
        />
        <Button
          title='Iniciar Sesión con Google'
          onPress={() => {}}
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


export default LoginScreen;