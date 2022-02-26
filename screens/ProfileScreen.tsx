import React, { useState } from "react";
import { Text, View } from '../components/Themed';
import { SafeAreaView, StyleSheet, Image} from 'react-native';
import { Dimensions } from 'react-native';
import HeaderDiferente from "../components/Elementos/HeaderDiferente";
import Boton from "../components/Elementos/Boton";

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


const ProfileScreen = ({ route, navigation }: any) => {
    return (
        <>
            <SafeAreaView style={styles.container}>

                <View style={styles.ViewTop}>
                    <HeaderDiferente props={VALORES.user.first_name + " " + VALORES.user.last_name} />
                    <View style={styles.ProfileView}>
                        <Image style={styles.profileImage} source={require('../assets/images/fotos/profile_picture.png')} />
                    </View>
                </View>
                <View style={styles.ViewMiddle}>
                    <View style={styles.Botones}>
                        <Boton onPress={() => navigation.navigate('Register')} title="Seguir" anchura={100} altura={45} />
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

                <View style={styles.ViewEnd}>
                </View>
            </SafeAreaView>
        </>
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
    },
    ProfileView: {
        backgroundColor: 'transparent',
        position: 'absolute',
        width: deviceWidth,
        bottom: 0,
        alignItems: 'center'
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
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        marginTop: 10,
    },
    ViewInfoSeguidores: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    ViewInfoSeguidos: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    ViewInfoPublicaciones: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    cabecerasInfo: {
        color: '#9D9D9E',
        fontSize:15
    },
    datosCabeceraInfo: {
        color: '#f28e43',
        fontWeight:'bold',
        fontSize:20
    },
    textoBio:{
        marginTop: 20,
        width:deviceWidth -80,
        color: '#9D9D9E',
        fontSize:15,
        textAlign:'justify'
    }
})

export default ProfileScreen;

