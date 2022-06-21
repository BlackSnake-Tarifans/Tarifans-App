import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import Swiper from 'react-native-web-swiper';
import { Text, View } from '../components/Themed';
import HeaderDiferente from '../components/Elementos/HeaderDiferente';
import Boton from '../components/Elementos/Boton';
import CarouselCards from '../components/Elementos/CarouselCards';
import ImgSwiper from '../components/Elementos/ImgSwiper';

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
    backgroundColor: 'transparent',
  },
  ViewMiddle: {
    position: 'relative',
    top: 0,
    width: deviceWidth,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  ViewEnd: {
    marginTop: 20,
    marginBottom: 70,
    position: 'relative',
    width: deviceWidth,
    height: 100,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  ViewBotonEditar:{
    marginTop: 20
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
  Botones: {
    marginTop: 10,
    backgroundColor: 'transparent',
  },
  Info: {
    width: deviceWidth - 80,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginTop: 10,
  },
  ViewInfoSeguidores: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent',
    margin: 20,
  },
  ViewInfoSeguidos: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent',
    margin: 20,
  },
  ViewInfoPublicaciones: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent',
    margin: 20,
  },
  cabecerasInfo: {
    color: '#9D9D9E',
    fontSize: 15,
  },
  datosCabeceraInfo: {
    color: '#f28e43',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20
  },
  textoBio: {
    marginTop: 20,
    marginBottom: 20,
    width: deviceWidth - 80,
    color: '#9D9D9E',
    fontSize: 15,
    textAlign: 'justify',
  },
  textoEmail: {
    marginTop: 5,
    width: deviceWidth,
    color: '#9D9D9E',
    fontSize: 15,
    textAlign: 'center',
  },
  textoUsername: {
    marginTop: 10,
    width: deviceWidth,
    color: '#ad8feb',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  ViewPublicaciones: {
    flex: 1,
    width: deviceWidth,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 0,
    backgroundColor: 'transparent',
  },
});

const data = [
  {
    title: 'Coral Reef',
    description: 'Location: Red Sea',
    source:
      'https://images.unsplash.com/photo-1633205719979-e47958ff6d93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
  },
  {
    title: 'Phone',
    description: 'iPhone 6 on the table',
    source:
      'https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
  },

  {
    title: 'Old building',
    description: 'Location: Germany',
    source:
      'https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/06/Anime-Demon-Slayer.jpeg?fit=1200%2C1048&ssl=1',
  },
];
const uris = [
  'https://www.pdvg.it/wp-content/uploads/2019/03/neon-genesis-evangelion-netflix-pdvg-1024x576.jpg',
  'https://cdn.vox-cdn.com/thumbor/8MxxvqA5HpSR0tGnqISBf3AADZI=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23314861/Anime_SpyxFamily_Featured_1.jpg',
  'https://www.masgamers.com/wp-content/uploads/2022/04/suzume-no-tojimari-1-1085x1536.jpg',
  'https://gruposaedal.com/wp-content/uploads/2022/01/1643485169_965_Como-ver-el-anime-de-Hyouka-y-la-lista-de.jpg',
];
/*
const Cuerpo = () => {
    var [color, setColor]=useState('#966bee')
    var [title, setTitle]=useState('Suscribirse')
    return(
    <View>
        <View style={{borderColor:'black', borderRadius:3, alignContent:'center'}}>
            <Image style={{width:'100%',height: '70%',resizeMode: 'contain',}} source={{uri: "http://503a-191-99-93-242.ngrok.io" + VALORES.profile_pic}}/>
        </View>
        <View style={{flexDirection: "row", justifyContent: "space-between" , marginHorizontal:10,alignItems:'center'}}>
            <Text>{VALORES.user.first_name} {VALORES.user.last_name}</Text>
            <Button title={title} style_button={{alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,backgroundColor: color}} onPress={() => {setColor("grey"); setTitle("Suscrito")}}/>
        </View>
        <View> */
function ProfileScreen({ route, navigation }: any) {
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
          <Text style={styles.textoUsername}>{VALORES.user.username}</Text>
          <Text style={styles.textoEmail}>{VALORES.user.email}</Text>
          <View style={styles.ViewBotonEditar}>
            <Boton
              onPress={() => navigation.navigate('EditProfile')}
              title="Editar perfil"
              anchura={140}
              altura={40}
            />
          </View>
          <View style={styles.Info}>
            <View style={styles.ViewInfoSeguidores}>
              <Text style={styles.datosCabeceraInfo}>
                {VALORES.num_subscribers}
              </Text>
              <Text style={styles.cabecerasInfo}>Seguidores</Text>
            </View>
            <View style={styles.ViewInfoSeguidos}>
              <Text style={styles.datosCabeceraInfo}>
                {VALORES.num_subscribed}
              </Text>
              <Text style={styles.cabecerasInfo}>Seguidos</Text>
            </View>
            <View style={styles.ViewInfoPublicaciones}>
              <Text style={styles.datosCabeceraInfo}>{VALORES.id}</Text>
              <Text style={styles.cabecerasInfo}>Publicaciones</Text>
            </View>
          </View>
          <Text style={styles.textoBio}>{VALORES.bio}</Text>
        </View>

        <View style={styles.ViewPublicaciones}>
          <Text style={styles.datosCabeceraInfo}>Publicaciones</Text>
          <ImgSwiper images={uris} />
        </View>

        <View style={styles.ViewEnd}>
          <Boton
            onPress={() => navigation.navigate('Gallery')}
            title="Ver más publicaciones"
            anchura={190}
            altura={60}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProfileScreen;
