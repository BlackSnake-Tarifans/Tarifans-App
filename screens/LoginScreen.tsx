import React, { useContext, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Alert,
  Pressable,
  Platform,
  Image,
  Dimensions,
  TouchableHighlight,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { useDispatch } from 'react-redux';
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { useIsFocused, useRoute } from '@react-navigation/native';
import { Text, View } from '../components/Themed';
import { login } from '../hooks/backendAPI';
import { TOKEN_CHANGE } from '../redux/AuthToken';
import { AuthContext } from '../redux/AuthProvider';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 20,
  },
  ViewStart: {
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  ViewMiddle: {
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  ViewEnd: {
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
  imageTitle1: {
    width: 250,
    height: 100,
    maxWidth: 540,
    maxHeight: 216,
  },
  imageTitle2: {
    width: 300,
    height: 500,
    maxWidth: 540,
    maxHeight: 216,
    marginTop: -20,
  },
  titleInicio: {
    fontSize: 20,
    fontFamily: 'RosarioRegular',
    color: 'white',
    fontWeight: 'bold',
    margin: 7,
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 50,
    width: Dimensions.get('window').width * 0.8,
    maxWidth: 800,
    marginTop: 10,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
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
    opacity: 0.4,
  },
  ImageStyleDivider: {
    height: 25,
    width: 280,
    opacity: 0.2,
  },
  titleInicioMensaje: {
    fontSize: 14,
    fontFamily: 'RosarioRegular',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  imageTitle: {
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').width * 0.24,
    maxWidth: 540,
    maxHeight: 216,
  },
  input: {
    height: 40,
    width: Dimensions.get('window').width * 0.7,
    margin: 12,
    borderWidth: 0,
    borderRadius: 25,
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    borderColor: 'transparent',
    padding: 10,
    color: 'white',
  },
  buttons: {
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 0,
    flexBasis: 'auto',
  },

  button_1: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: '#f28e43',
    width: Dimensions.get('window').width * 0.8,
    maxWidth: 540,
    height: 50,
  },
  text_1: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    fontFamily: 'RosarioRegular',
    color: 'white',
  },
  vistaFinal: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  textoFinal1: {
    fontSize: 15,
    letterSpacing: 0.25,
    fontFamily: 'RosarioRegular',
    color: 'white',
  },
  textoFinal2: {
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    fontFamily: 'RosarioRegular',
    color: 'white',
  },
  imagenRedes: {
    width: 30,
    height: 30,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 1)',
    backgroundColor: 'white',
    margin: 10,
    marginTop: 20,
  },
  textoFinal3: {
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    fontFamily: 'RosarioRegular',
    color: 'white',
  },
  vistaRedes: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  scroll: {
    width: '100%',
  },
});

function LoginScreen({ navigation }: any) {
  const ctx: any = useContext(AuthContext);
  const isFocused = useIsFocused();
  useEffect(() => {
    // Runs ONCE after initial rendering
    if (isFocused) {
      ctx.clearAuth();
    }
  }, [isFocused]);

  const route = useRoute();
  const [user, onChangeUser] = React.useState('');
  const [pass, onChangePass] = React.useState('');
  const [animating, setAnimating] = React.useState(false);
  const auth: any = useContext(AuthContext);
  const [fontsLoaded] = useFonts({
    RosarioRegular: require('@expo-google-fonts/rosario/Rosario_400Regular.ttf'),
  });
  const dispatch = useDispatch();
  const changeToken = (item: any) =>
    dispatch({ type: TOKEN_CHANGE, payload: item });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll} contentContainerStyle={{ flexGrow: 1 }}>
        <LinearGradient
          style={styles.background}
          colors={['#f28e43', '#966bee']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0.7 }}
          locations={[0, 0.95]}
        >
          <View style={styles.ViewStart}>
            <Image
              style={styles.imageTitle1}
              source={require('../assets/images/tarifans_palabra_color_blanco.png')}
            />
            <Image
              style={styles.imageTitle2}
              source={require('../assets/images/tarifans_logo_blanca.png')}
            />
          </View>

          <View style={styles.ViewMiddle}>
            <Text style={styles.titleInicioMensaje}>
              Ingresa y obtén al momento noticias y {'\n'}actualizaciones de tus
              creadores favoritos.
            </Text>

            <View style={styles.SectionStyle}>
              <Image
                style={styles.ImageStyle}
                source={require('../assets/images/iconos/nombre_usuario.png')}
              />
              <TextInput
                style={{ flex: 1 }}
                placeholder="Nombre de usuario"
                placeholderTextColor="#9D9D9E"
                onChangeText={text => onChangeUser(text)}
              />
            </View>
            <View style={styles.SectionStyle}>
              <Image
                style={styles.ImageStyle}
                source={require('../assets/images/iconos/password.png')}
              />
              <TextInput
                style={{ flex: 1 }}
                placeholder="Contraseña"
                placeholderTextColor="#9D9D9E"
                secureTextEntry
                onChangeText={text => onChangePass(text)}
              />
            </View>

            <ActivityIndicator
              size="large"
              color="#00ff00"
              animating={animating}
            />

            <View style={styles.buttons}>
              <Button
                onPress={async () => {
                  // navigation.navigate('Home');
                  // console.log("Hola")

                  /* Añadir aquí metodo para crear categoría/plan de subscripción */
                  try {
                    setAnimating(true);
                    const response = await login({
                      username: user,
                      password: pass,
                    });

                    if (response.status == 200) {
                      // 201 == HTTP_CREATED
                      const { data } = response;
                      console.log(data);
                      // setAnimating(false);
                      auth.setAuth(data);
                      navigation.navigate('HomeTabs');
                    } else if (response.status >= 400) {
                      Alert.alert(
                        'Error: No se ha encontrado un usuario con dichas credenciales ',
                      );
                      setAnimating(false);
                    }
                  } catch (error) {
                    Alert.alert(
                      `Error:${error}(No se ha encontrado un usuario con dichas credenciales) `,
                    );
                    setAnimating(false);
                  }
                }}
                title="INICIAR SESIÓN"
                style_button={styles.button_1}
                style_text={styles.text_1}
              />
            </View>
          </View>

          <View style={styles.ViewEnd}>
            <View style={styles.vistaFinal}>
              <Text style={styles.textoFinal1}>¿No tienes una cuenta? </Text>
              <Text
                style={styles.textoFinal2}
                onPress={() => navigation.navigate('Register')}
              >
                ¡Regístrate aquí!
              </Text>
            </View>
            <View style={styles.vistaFinal}>
              <Text
                style={styles.textoFinal2}
                onPress={() => navigation.navigate('ChangePass')}
              >
                ¿Olvidaste tu contraseña?
              </Text>
            </View>
            <Image
              style={styles.ImageStyleDivider}
              source={require('../assets/images/iconos/divider.png')}
            />
            <View style={styles.vistaRedes}>
              <Image
                style={styles.imagenRedes}
                source={require('../assets/images/iconos/google.png')}
              />
              <Text
                style={styles.textoFinal3}
                onPress={() => navigation.navigate('Category')}
              >
                ¡Inicia sesión con Google!
              </Text>
            </View>
            <View style={styles.vistaRedes}>
              <Image
                style={styles.imagenRedes}
                source={require('../assets/images/iconos/facebook.png')}
              />
              <Text
                style={styles.textoFinal3}
                onPress={() => navigation.navigate('Profile')}
              >
                ¡Inicia sesión con Facebook!
              </Text>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}

function Button(props: {
  onPress: any;
  title: string | undefined;
  style_button: any;
  style_text: any;
}) {
  const { onPress, title = 'Save', style_button, style_text } = props;
  return (
    <Pressable style={style_button} onPress={onPress}>
      <Text style={style_text}>{title}</Text>
    </Pressable>
  );
}

export default LoginScreen;
