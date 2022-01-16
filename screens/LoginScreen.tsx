import React from "react";
import { SafeAreaView, StyleSheet, TextInput , Alert , Pressable, Platform, Image } from 'react-native';


import { TOKEN_CHANGE } from '../redux/AuthToken'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {login} from '../hooks/backendAPI'

import { Text, View } from '../components/Themed';
import { LinearGradient }  from 'expo-linear-gradient';
import { useFonts, Rosario_400Regular} from '@expo-google-fonts/rosario'


/*const LinearGradient =  Platform.select({
  ios: () => require("react-native-linear-gradient"),
  android: () => require("react-native-linear-gradient"),
  default: () => require("react-native-web-linear-gradient")
})().default*/

console.log( LinearGradient )

const LoginScreen = ({ navigation } : any) => {
  const [user, onChangeUser] = React.useState("");
  const [pass, onChangePass] = React.useState('');
  let [fontsLoaded] = useFonts({Rosario_400Regular});

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient style={styles.background} colors={['#f28e43','#966bee']} start={{x:0, y:0}} end={{x:1, y:0.7}} locations={[0,0.95]}>
        <Image style={styles.imageTitle } source={require('../assets/images/tarifans_palabra_color_blanco.png')}/>
        <Text style={styles.title }>Inicio de sesión</Text>
        <Text style={styles.title}>Usuario</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor={'white'}
          onChangeText={text => onChangeUser(text)}
        />
        <Text style={styles.title}>Contrasena</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor={'white'}
          onChangeText={text => onChangePass(text)}
        />
        <View style={styles.buttons}>
          <Button
            onPress={() => {
              login({username: user, password: pass})
              .then((res) => {
                console.log(res.data)
              }
            )}}
            title="Iniciar Sesión"
            style_button={styles.button_1}
            style_text={styles.text_1}
            />
          <Button
            onPress={() => navigation.navigate('Modal')}
            title="Registrarse"
            style_button={styles.button_2}
            style_text={styles.text_2}
          />
          <Button
            title='Iniciar Sesión con Google'
            onPress={() => {}}
            style_button={styles.button_3}
            style_text={styles.text_3}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

function Button(props: { onPress: any; title: string | undefined; style_button : any, style_text : any }) {
  const { onPress, title = 'Save', style_button, style_text } = props;
  return (
    <Pressable style={style_button}  onPress={onPress}>
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
  buttons: {
    backgroundColor: 'rgba(0,0,0,0)',
    flex: 1,
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
    width: '60vw',
    maxWidth: 540,
    marginBottom: 5
  },
  text_1: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    fontFamily: 'Rosario_400Regular',
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
    width: '60vw',
    maxWidth: 540,
    marginBottom: 5
  },
  text_2: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    fontFamily: 'Rosario_400Regular',
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
    width: '60vw',
    maxWidth: 540,
    marginBottom: 5
  },
  text_3: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    fontFamily: 'Rosario_400Regular',
    color: 'white',
  }
  
  
});


export default LoginScreen;