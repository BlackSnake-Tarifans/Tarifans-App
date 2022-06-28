import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';

import HeaderDiferente from '../components/Elementos/HeaderDiferente';
import Boton from '../components/Elementos/Boton';

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
    width: Dimensions.get('window').width * 0.8,
    margin: 10,
    borderRadius: 15,
    backgroundColor: 'rgba(52, 52, 52, 0.04)',
    padding: 10,
  },
  SectionStyleDescripcion: {
    flexDirection: 'column',
    height: 100,
    width: Dimensions.get('window').width * 0.8,
    margin: 10,
    borderRadius: 15,
    backgroundColor: 'rgba(52, 52, 52, 0.04)',
    padding: 10,
  },
  TextfileTitle: {
    fontWeight: 'bold',
    color: '#f28e43',
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
});

function CreateCateScreen({ route, navigation }: any) {
  // const { id } = route.params;

  const [name, onChangeName] = useState('New Category');
  const [description, onChangeDescription] = useState(
    'Todo lo que deseas y más',
  );
  const [price, onChangePrice] = useState(0);
  // const [nivel, onChangeNivel] = useState(1);
  const titulo = 'Registro Categoría Suscripción';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
          <View style={styles.SectionStyle}>
            <Text style={styles.TextfileTitle}>Contraseña</Text>
            <TextInput
              placeholder="********"
              placeholderTextColor="#b3b3b3"
              onChangeText={text => onChangeName(text)}
              style={[{ fontSize: 20, marginTop: 5 }]}
            />
          </View>
          <View style={styles.SectionStyle}>
            <Text style={styles.TextfileTitle}>Correo Electrónico</Text>
            <TextInput
              placeholder={VALORES.user.email}
              placeholderTextColor="#b3b3b3"
              onChangeText={text => onChangeName(text)}
              style={[{ fontSize: 15, marginTop: 5 }]}
            />
          </View>
          <View style={styles.SectionStyleDescripcion}>
            <Text style={styles.TextfileTitle}>Biografía</Text>
            <TextInput
              placeholder={VALORES.bio}
              multiline
              placeholderTextColor="#b3b3b3"
              onChangeText={text => onChangeName(text)}
              style={[{ fontSize: 15, marginTop: 5 }]}
            />
          </View>

          {/*  <View style={styles.SectionStyle}>
            <Text style={styles.TextfileTitle}>Nivel</Text>
            <TextInput
              placeholder="NivelAAA"
              placeholderTextColor={'#b3b3b3'}
              keyboardType='numeric'
              maxLength={10}
              onChangeText={text => onChangeNivel(parseInt(text))}
            />
          </View> */}
        </View>

        <View style={styles.ViewEnd}>
          <View style={styles.Botones}>
            <Boton
              onPress={async () => {
                /* Añadir aquí metodo para crear sincronizar cambios con el backend */
              }}
              title="Guardar cambios"
              anchura={180}
              altura={45}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CreateCateScreen;
