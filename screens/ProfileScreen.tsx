import React, { useState } from "react";
import { Text, View } from '../components/Themed';
import { SafeAreaView, StyleSheet, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import HeaderDiferente from "../components/Elementos/HeaderDiferente";
import Boton from "../components/Elementos/Boton";
import CarouselCards from "../components/Elementos/CarouselCards";
import Swiper from "react-native-web-swiper";
import ImgSwiper from "../components/Elementos/ImgSwiper";

const VALORES = {
    id: 1,
    user: {
        id: 1,
        username: "cajifan",
        email: "cjimenezf17@gmail.com",
        first_name: "Carlos",
        last_name: "Jiménez Farfán",
        is_superuser: false
    },
    birth_date: "2000-01-17",
    profile_pic: "/media/profile_pics/WhatsApp_Image_2022-01-16_at_09.05.22.jpeg",
    bio: "Aquí va la biografía del usuario: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    num_subscribers: 654,
    num_subscribed: 32
};
const dimensions = Dimensions.get('window');
const deviceWidth = dimensions.width;
const deviceHeight = dimensions.height;

const data = [
    {
        title: "Coral Reef",
        description: "Location: Red Sea",
        source:
            "https://images.unsplash.com/photo-1633205719979-e47958ff6d93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    },
    {
        title: "Phone",
        description: "iPhone 6 on the table",
        source:
            "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    },

    {
        title: "Old building",
        description: "Location: Germany",
        source:
            "https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/06/Anime-Demon-Slayer.jpeg?fit=1200%2C1048&ssl=1",
    },
];
const uris = [
    "https://static.zerochan.net/Vladilena.Milizé.full.3601354.jpg",
    "https://static.zerochan.net/Kaguya-sama.wa.Kokurasetai.full.3596676.jpg",
    "https://static.zerochan.net/Sword.Art.Online.Progressive%3A.Hoshi.Naki.Yoru.no.Aria.full.3379738.jpg",
    "https://static.zerochan.net/Spy.x.Family.full.3493445.jpg",
    "https://static.zerochan.net/Fate.Grand.Order%3A.Solomon.full.3419130.png",
    "https://static.zerochan.net/Miyazono.Kaori.full.2311362.jpg",
    "https://static.zerochan.net/Horimiya.full.3259444.jpg",
    "https://static.zerochan.net/Horimiya.full.3282799.jpg"
  ]
/*
const Cuerpo = () => {
    var [color, setColor]=useState('#966bee')
    var [title, setTitle]=useState('Suscribirse')
    return(
    <View>
        <View style={{borderColor:'black', borderRadius:3, alignContent:'center'}}>
            <Image style={{width:'100%',height: '70%',resizeMode: 'contain',}} source={{uri: "http://1c0a-190-63-213-187.ngrok.io" + VALORES.profile_pic}}/>
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
const ProfileScreen = ({ route, navigation }: any) => {
    return (


        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.ViewTop}>
                    <HeaderDiferente props={VALORES.user.first_name + " " + VALORES.user.last_name} />
                    <View style={styles.ProfileView}>
                        <Image style={styles.profileImage} source={require('../assets/images/fotos/profile_picture.png')} />
                    </View>
                </View>
                <View style={styles.ViewMiddle}>
                    <View style={styles.Botones}>
                        <Boton onPress={() => navigation.navigate('SelectSusc')} title="Seguir" anchura={100} altura={45} />
                    </View>
                    <View style={styles.Info}>
                        <View style={styles.ViewInfoSeguidores}>
                            <Text style={styles.datosCabeceraInfo}>{VALORES.num_subscribers}</Text>
                            <Text style={styles.cabecerasInfo}>Seguidores</Text>
                        </View>
                        <View style={styles.ViewInfoSeguidos}>
                            <Text style={styles.datosCabeceraInfo}>{VALORES.num_subscribed}</Text>
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
                   <Text style={styles.datosCabeceraInfo}>Mis creaciones</Text>
                   <ImgSwiper images={uris}></ImgSwiper>
              </View>
              


                <View style={styles.ViewEnd}>

                    <Boton onPress={() => navigation.navigate('Gallery')} title="Ver más publicaciones" anchura={190} altura={60} />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

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
        backgroundColor: 'transparent'
    },
    ViewMiddle: {
        position: 'relative',
        top: 0,
        width: deviceWidth,
        alignItems: 'center',
        backgroundColor: 'transparent'

    },
    ViewEnd: {
        position: 'relative',
        bottom: 0,
        top: 0,
        width: deviceWidth,
        height:100,
        padding: 10,
        alignItems: "center",
        backgroundColor:'transparent'
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
        backgroundColor: 'transparent'
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
        margin: 20
    },
    ViewInfoSeguidos: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'transparent',
        margin: 20
    },
    ViewInfoPublicaciones: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'transparent',
        margin: 20
    },
    cabecerasInfo: {
        color: '#9D9D9E',
        fontSize: 15
    },
    datosCabeceraInfo: {
        color: '#f28e43',
        fontWeight: 'bold',
        fontSize: 20,
    },
    textoBio: {
        marginTop: 20,
        width: deviceWidth - 80,
        color: '#9D9D9E',
        fontSize: 15,
        textAlign: 'justify'
    },
    ViewPublicaciones: {
        flex: 1,
        width: deviceWidth,
        alignItems: 'center',
        marginBottom: 10,
        marginTop:20,
        backgroundColor:'transparent'
    },
})

export default ProfileScreen;

