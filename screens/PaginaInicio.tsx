import React from "react";
import { SafeAreaView, StyleSheet, TextInput , Alert , Pressable, Platform, Image, Dimensions } from 'react-native';


import { TOKEN_CHANGE } from '../redux/AuthToken';
import {useDispatch} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {login} from '../hooks/backendAPI';
import AppLoading from 'expo-app-loading';


import { Text, View } from '../components/Themed';
import { LinearGradient }  from 'expo-linear-gradient';
import { useFonts } from 'expo-font';



/*const LinearGradient =  Platform.select({
  ios: () => require("react-native-linear-gradient"),
  android: () => require("react-native-linear-gradient"),
  default: () => require("react-native-web-linear-gradient")
})().default*/

import {useRoute} from '@react-navigation/native';


const LoginScreen = ({ navigation } : any) => {
  const route = useRoute();
  const [user, onChangeUser] = React.useState("");
  const [pass, onChangePass] = React.useState('');
  let [fontsLoaded] = useFonts({
      RosarioRegular: require('@expo-google-fonts/rosario/Rosario_400Regular.ttf'),
    });
  const dispatch = useDispatch();
  const changeToken = (item: any) => dispatch({ type: TOKEN_CHANGE, payload: item });

  if(!fontsLoaded){
    return <AppLoading />;
  }else{
    return  (
      <SafeAreaView style={styles.container}>
        <LinearGradient style={styles.background} colors={['#f28e43','#966bee']} start={{x:0, y:0}} end={{x:1, y:0.7}} locations={[0,0.95]}>
          <Text style={styles.titleInicio }>Bienvenidos a:</Text>
          <Image style={styles.imageTitle1 } source={require('../assets/images/tarifans_palabra_color_blanco.png')}/>
          <Image style={styles.imageTitle2 } source={require('../assets/images/tarifans_logo_blanca.png')}/>          
          
          <View style={styles.buttons}>
            <Button
              onPress={() => navigation.navigate('Login')}
              title="Iniciar Sesión"
              style_button={styles.button_1}
              style_text={styles.text_1}
              />
            <Button
              onPress={() => navigation.navigate('Register')}
              title="Registrarse"
              style_button={styles.button_2}
              style_text={styles.text_2}
            />
          </View>
        </LinearGradient>
      </SafeAreaView>
    ) ;
  }
  
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
  titleInicio: {
    fontSize: 30,
    fontFamily: 'RosarioRegular',
    color: 'white',
    marginBottom:5
  },
  titleInicioMensaje: {
    fontSize: 14,
    fontFamily: 'RosarioRegular',
    color: 'white'
  },
  imageTitle1: {
    width: 250, 
    height: 100,
    maxWidth: 540,
    maxHeight: 216
  },
  imageTitle2: {
    width: 300, 
    height: 300,
    maxWidth: 540,
    maxHeight: 216,
    marginTop: -20
  },
  /*separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },*/
  input: {
    height: 40,
    width: Dimensions.get('window').width * 0.7,
    margin: 12,
    borderWidth: 0,
    borderRadius: 25,
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    borderColor: 'transparent',
    padding: 10,
    color: 'white'    
  },
  buttons: {
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 0,
    flexBasis: 'auto',
    marginTop:10
  },
  button_1: {
    margin:8,
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


export default LoginScreen;