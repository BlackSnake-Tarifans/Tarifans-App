import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Pressable, Image, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import { Text, View } from '../components/Themed';
import { useFonts, Rosario_400Regular } from '@expo-google-fonts/rosario';
import Modal from "react-native-modal";
import HeaderDiferente from "../components/Elementos/HeaderDiferente";
import Boton from "../components/Elementos/Boton";

const deviceWidth = Dimensions.get('window').width;

//Datos de prueba
const SUSCRIPCIONES = [
    {
        id: 1,
        user: "Pepe",
        nombre: "Básica",
        desc: "Mira fotos y videos antes que todos",
        precio: "$7.5\n/mes",
        nivel: 1,
        icono: require('../assets/images/iconos/light.png')
    },
    {
        id: 2,
        user: "Pepe",
        nombre: "Premium",
        desc: "Fotos de arte exclusivas",
        precio: "$15\n/mes",
        nivel: 2,
        icono: require('../assets/images/iconos/star_icon.png')
    },
    {
        id: 3,
        user: "Pepe",
        nombre: "Master+",
        desc: "Más fotos y videos de arte a tu alcance.",
        precio: "$25\n/mes",
        nivel: 3,
        icono: require('../assets/images/iconos/crown.png')
    },
]

const SelectSuscripcionScreen = ({ route, navigation }: any) => {
    const Titulo = "Seleccione una categoría";
    let [fontsLoaded] = useFonts({ Rosario_400Regular });

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View style={styles.ViewTop}>
                    <HeaderDiferente props={Titulo} />
                </View>

                <Suscripciones navigation={navigation} res={SUSCRIPCIONES} />

                <View style={styles.ViewEnd}>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const Suscripciones = ({ navigation, res }: any) => {
    return (
        <ScrollView contentContainerStyle={styles.ViewMiddle}>
            {res.map((suscripcion: any, index: any) => (
                <SuscData suscripcion={suscripcion} key={index} navigation={navigation} />
            ))}
        </ScrollView>
    )
}

const SuscData = ({ suscripcion, navigation }: any) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.suscData}>
            <Modal
                hasBackdrop={true}
                isVisible={modalVisible}
                onBackdropPress={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.container2}>
                    <View style={styles.modalV}>
                        <View style={{ flexDirection: "row-reverse", justifyContent: "space-around" }}>
                            <Text style={styles.modalTitle}>Confirmación de Compra</Text>
                        </View>
                        <View>
                            <Text style={styles.modalText}>Suscripción: {suscripcion.nombre}</Text>
                            <Text style={styles.modalText}>Beneficios: {suscripcion.desc}</Text>
                            <Text style={styles.modalText}>Nivel de Suscripción: {suscripcion.nivel}</Text>
                            <Text style={styles.modalText}>Precio: {suscripcion.precio}</Text>
                            <Text style={styles.modalText2}>¿Desea confirmar su compra a la siguiente suscripción?</Text>
                        </View>

                        <View style={styles.ViewCancelar}>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.BotonCancelar}>
                                <Text style={styles.title}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ViewConfirmar}>
                            <Boton onPress={() => {
                                (!modalVisible);
                                navigation.navigate('Profile')
                            }}
                                title="Confirmar" anchura={240} altura={55} />
                        </View>
                    </View>
                </View>
            </Modal>

            <View style={styles.ViewSuscripciones}>

                <Text style={styles.TextoSuscripcionTitle}>{suscripcion.user} {suscripcion.nombre}</Text>

                <View style={{marginTop:10, backgroundColor:'transparent', marginBottom:10}}>
                    <Text style={styles.TextoSuscripcion}>{suscripcion.desc}</Text>
                    <Text style={styles.TextoSuscripcion}>Nivel: {suscripcion.nivel}</Text>
                </View>

                <View style={styles.ViewComprarSuscripcion}>
                    <Boton onPress={() => setModalVisible(!modalVisible)} title="Comprar" anchura={115} altura={55} />
                </View>
            </View>

            <View style={styles.ViewSuscripcionesDerecha}>
                <Image style={styles.backStyleImage} source={suscripcion.icono} />
                <Text style={styles.TextoSuscripcionPrecio}>{suscripcion.precio}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "space-between",
        width: deviceWidth
    },
    ViewTop: {
        backgroundColor: 'transparent',
        width: Dimensions.get('window').width,
        position: 'relative',
        top: 0,
    },
    ViewMiddle: {
        flexGrow: 1,
        backgroundColor: "transparent",
        width: deviceWidth,
        alignItems: 'center',
        marginTop:0
    },
    ViewEnd: {
        flexDirection: 'column',
        backgroundColor: 'transparent',
        width: Dimensions.get('window').width,
        position: 'relative',
        alignItems: 'center',
        height: Dimensions.get('window').width * 0.2
    },
    suscData: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 20,
        margin: 20,
        backgroundColor: 'white',
        width: deviceWidth * 0.85,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.50,
        shadowRadius: 2.22,
        elevation: 2,
    },
    ViewSuscripciones: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'transparent',
        width: deviceWidth,
        position: 'relative',
        padding: 20,
        height:220
    },
    ViewSuscripcionesDerecha: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        marginRight:20
    },
    TextoSuscripcionTitle: {
        fontSize: 25,
        color: '#949494',
        fontWeight: 'bold'
    },
    TextoSuscripcionPrecio: {
        fontSize: 25,
        color: '#949494',
        fontWeight: 'bold',
        width: deviceWidth * 0.3,
        textAlign: 'center',
        position: 'absolute',
        bottom: 20
    },
    TextoSuscripcion: {
        fontSize: 15,
        color: '#949494',
        width: deviceWidth * 0.4,

    },
    ViewComprarSuscripcion: {
        backgroundColor: 'transparent',
        width: 115,
        position:'absolute',
        bottom:0,
        marginLeft:20,
        marginBottom:20,
    },
    backStyleImage: {
        height: 100,
        width: 100,
        resizeMode: 'stretch',
        top: 20,
    },
    ViewCancelar: {
        backgroundColor: 'transparent'
    },
    ViewConfirmar: {
        marginTop: 15,
        backgroundColor: 'transparent'
    },
    BotonCancelar: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: 240,
        height: 55,
        borderRadius: 35,
        borderWidth: 1,
        borderColor: '#b3b3b3'
    },
    title: {
        fontSize: 20,
        fontFamily: 'RosarioRegular',
        color: '#949494',
        fontWeight: 'bold',
        textAlign: "center"
    },
    icons: {
        resizeMode: 'contain',
        marginTop: 2,
    },
    iconM: {
        resizeMode: 'cover',
        height: 13,
        width: 13,
        marginTop: 12,

    },
    textBar: {
        color: 'white',
        fontSize: 20,
        marginHorizontal: 25,
        fontFamily: "Rosario_400Regular"
    },
    modalV: {
        padding: 22,
        alignContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 20,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    container2: {
        borderRadius: 25,
        borderStyle: "solid",
        alignContent: 'flex-start'
    },
    modalTitle: {
        fontSize: 22,
        fontFamily: 'Rosario_400Regular',
        color: 'purple',
        marginRight: 35,
    },
    modalText: {
        padding: 5,
        fontSize: 17,
        fontFamily: 'Rosario_400Regular',
        marginTop: 5,
        textAlign: "justify"
    },
    modalText2: {
        padding: 5,
        fontSize: 18,
        fontFamily: 'Rosario_400Regular',
        marginTop: 5,
        textAlign: "justify",
        color: "purple",
    }
});

export default SelectSuscripcionScreen;