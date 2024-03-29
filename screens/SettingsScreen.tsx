import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  Dimensions,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';

import HeaderDiferente from '../components/Elementos/HeaderDiferente';
import Boton from '../components/Elementos/Boton';
import { AuthContext, AuthProvider } from '../redux/AuthProvider';

const VALORES = {
  id: 1,
  user: {
    id: 1,
    username: 'cajifan',
    email: 'cjimenezf17@gmail.com',
    first_name: 'Carlos',
    last_name: 'Jiménez Farfán',
    is_superuser: false,
  },
  birth_date: '2000-01-17',
  profile_pic: '/media/profile_pics/WhatsApp_Image_2022-01-16_at_09.05.22.jpeg',
  bio: "Aquí va la biografía del usuario: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  num_subscribers: 654,
  num_subscribed: 32,
};
const dimensions = Dimensions.get('window');
const deviceWidth = dimensions.width;
const deviceHeight = dimensions.height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  ViewTop: {
    position: 'relative',
    width: deviceWidth,
  },
  ViewMiddle: {
    position: 'relative',
    top: 20,
    width: deviceWidth,
    alignItems: 'center',
  },
  ViewEnd: {
    position: 'relative',
    alignItems: 'center',
    marginBottom: 70,
    marginTop: 20,
    width: deviceWidth,
  },
  SectionStyle: {
    flexDirection: 'column',
    height: 70,
    width: Dimensions.get('window').width * 0.85,
    margin: 10,
    borderRadius: 15,
    backgroundColor: 'rgba(52, 52, 52, 0.04)',
    padding: 10,
  },
  SectionStyleButton: {
    flexDirection: 'column',
    height: 70,
    width: Dimensions.get('window').width * 0.85,
    margin: 10,
    borderRadius: 15,
    backgroundColor: '#F28E43',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextfileTitle: {
    fontWeight: 'bold',
    color: '#f28e43',
  },
  TextfileTitleButton: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  Botones: {
    marginTop: 30,
    backgroundColor: 'transparent',
  },
  ProfileView: {
    backgroundColor: 'transparent',
    position: 'absolute',
    width: deviceWidth,
    bottom: 0,
    alignItems: 'center',
  },
  profileImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
    borderColor: 'white',
    borderWidth: 5,
  },
  textoCamposObligatorios: {
    marginTop: 5,
    width: deviceWidth,
    color: '#9D9D9E',
    fontSize: 15,
    textAlign: 'left',
  },
  textoCamposEditables: {
    marginTop: 5,
    width: deviceWidth,
    color: '#b3b3b3',
    fontSize: 15,
    textAlign: 'left',
  },
  Info: {
    // width: deviceWidth ,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginTop: 10,
  },
  cabecerasInfo: {
    color: '#9D9D9E',
    fontSize: 15,
  },
  datosCabeceraInfo: {
    color: '#f28e43',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  ScrollContainter: {
    flexGrow: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    borderRadius: 20,
  },
});

function SettingsScreen({ route, navigation }: any) {
  // const { id } = route.params;

  const ctx: any = useContext(AuthContext);

  const [name, onChangeName] = useState('New Category');
  const [description, onChangeDescription] = useState(
    'Todo lo que deseas y más',
  );
  const [price, onChangePrice] = useState(0);
  // const [nivel, onChangeNivel] = useState(1);
  const titulo = 'Registro Categoría Suscripción';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.ScrollContainter}>
        <View style={styles.ViewTop}>
          <HeaderDiferente
            props={`${VALORES.user.first_name} ${VALORES.user.last_name}`}
          />
          <View style={styles.ProfileView}>
            <Image
              style={styles.profileImage}
              source={require('../assets/images/fotos/profile_picture.png')}
            />
          </View>
        </View>

        <View style={styles.ViewMiddle}>
          <View style={styles.Info}>
            <View style={styles.SectionStyle}>
              <Text style={styles.TextfileTitle}>Nombre</Text>
              <Text style={styles.textoCamposObligatorios}>
                {VALORES.user.first_name}
              </Text>
            </View>
            <View style={styles.SectionStyle}>
              <Text style={styles.TextfileTitle}>Apellido</Text>
              <Text style={styles.textoCamposObligatorios}>
                {VALORES.user.last_name}
              </Text>
            </View>
            <View style={styles.SectionStyle}>
              <Text style={styles.TextfileTitle}>Nombre de usuario</Text>
              <TextInput
                placeholder={VALORES.user.username}
                placeholderTextColor="#b3b3b3"
                onChangeText={text => onChangeName(text)}
                style={[{ fontSize: 15, marginTop: 5 }]}
              />
            </View>
            <TouchableOpacity
              style={styles.SectionStyleButton}
              onPress={() => {
                navigation.navigate('Saved');
              }}
            >
              <Text style={styles.TextfileTitleButton}>Posts Guardados</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.ViewEnd}>
          <View style={styles.Botones}>
            <Boton
              onPress={() => {
                navigation.navigate('Login');
                ctx.clearAuth();
              }}
              title="Cerrar sesión"
              anchura={180}
              altura={45}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SettingsScreen;
