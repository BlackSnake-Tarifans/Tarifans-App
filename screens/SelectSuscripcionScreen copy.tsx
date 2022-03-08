import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Pressable, Image, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import { Text, View } from '../components/Themed';
import { useFonts, Rosario_400Regular } from '@expo-google-fonts/rosario';
import Modal from "react-native-modal";


//Datos de prueba
const SUSCRIPCIONES = [
    {
        id: 1,
        user: "Pepe",
        nombre: "Básica",
        desc: "Mira fotos y videos antes que todos",
        precio: "$7.50 (mensual)",
        nivel: 1
    },
    {   
        id: 2,
        user: "Pepe",
        nombre: "Premium",
        desc: "Fotos de arte exclusivas",
        precio: "$15.00 (mensual)",
        nivel: 2
    },
    {   
        id: 3,
        user: "Pepe",
        nombre: "Master+",
        desc: "Más fotos y videos de arte a tu alcance. Regalias incluidas",
        precio: "$25.00 (mensual)",
        nivel: 3
    },
]

const SelectSuscripcionScreen = ({route, navigation} : any)=>{

    let [fontsLoaded] = useFonts({
        Rosario_400Regular,
      });
    
    // const { id } = route.params;
    // const [ SUSCRIPCIONES, setSuscripciones ] = useState([]);
    return(

        <SafeAreaView style={styles.container}>
                <Header navigation={navigation}/>
                <Suscripciones navigation={navigation} res={SUSCRIPCIONES}/>
        </SafeAreaView>

    );
}

const Header = ({navigation}: any) =>{
    return(
    <View style={styles.headercontainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} >
            <Image style={styles.icons} source={require('../assets/images/iconos/atras.png')} />
        </TouchableOpacity>
        <View style={{backgroundColor: "#F28E43"}}>
            <Text style={styles.textBar}>Seleccione su categoria de Suscripción</Text>
        </View>
    </View>
    )
}

const Suscripciones = ({ navigation, res }: any) =>{
    return(
        <ScrollView contentContainerStyle={styles.suscContainter}>
            {res.map((suscripcion: any, index: any) => (
                <SuscData suscripcion={suscripcion} key={index} navigation={navigation} />
            ))}
        </ScrollView>
    )
}

const SuscData = ({suscripcion, navigation}: any) => {
    const [modalVisible, setModalVisible] = useState(false);

    return(
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
                    <View style={{flexDirection: "row-reverse", justifyContent:"space-around"}}>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} >
                                    <Image style={styles.iconM} source={require('../assets/images/iconos/cerrar_x.png')} />
                        </TouchableOpacity>
                        <Text style={styles.modalTitle}>Confirmación de Compra</Text>
                    </View>
                    <View>
                        <Text style={styles.modalText}>Suscripción: {suscripcion.nombre}</Text>
                        <Text style={styles.modalText}>Beneficios: {suscripcion.desc}</Text>
                        <Text style={styles.modalText}>Nivel de Suscripción: {suscripcion.nivel}</Text>
                        <Text style={styles.modalText}>Precio: {suscripcion.precio}</Text>
                        <Text style={styles.modalText2}>¿Desea confirmar su compra a la siguiente suscripción?</Text>
                    </View>
                   
                        <Pressable
                            style={styles.button}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                                navigation.navigate('Profile')
                            }}
                        >
                            <Text style={styles.text_2}>Confirmar compra</Text>
                        </Pressable>
                </View>
            </View>
        </Modal>
        <View>
            <Text style={styles.susTitle}>{suscripcion.user} {suscripcion.nombre}</Text>
        </View>
        <View>
            <Text style={styles.susDesc}>{suscripcion.desc}</Text>
        </View>
        <View>
            <Text style={styles.susText}>Nivel: {suscripcion.nivel}</Text>
        </View>
        <View>
            <Text style={styles.susText}>Precio: {suscripcion.precio}</Text>
        </View>
        <View>
            
            <Button
            onPress={()=>setModalVisible(!modalVisible)}
            title="Comprar Suscripción"
            style_button={styles.button}
            style_text={styles.btext}
            />
        </View>
    </View>
    )
}

function Button(props: { onPress: any; title: string | undefined; style_button: any, style_text: any }) {
    const { onPress, title, style_button, style_text } = props;
    
    return (
      <Pressable style={style_button} onPress={onPress} >
        <Text style={style_text}>{title}</Text>
      </Pressable>
    );
}

const styles = StyleSheet.create({
    container :{
       flex: 1,
       backgroundColor: "white",
       justifyContent: "space-between",
    },
    headercontainer:{
        padding:17,
        backgroundColor: "#F28E43",
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row',
        marginTop: 22,
    },
    icons:{
        resizeMode: 'contain',
        marginTop: 2,
    },
    iconM:{
        resizeMode: 'cover',
        height: 13,
        width: 13,
        marginTop: 12,
      
    },
    textBar:{
        color: 'white',
        fontSize: 20,
        marginHorizontal:25,
        fontFamily: "Rosario_400Regular"
    },
    suscContainter:{
        flexGrow: 1,
        backgroundColor: "white",
        paddingTop: 10,
        justifyContent: 'flex-start' 
    },
    suscData:{
        alignItems: 'center',
        padding: 10,
        borderColor: "purple",
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
    },
    susText:{
        fontSize: 17.5,
        marginHorizontal:10,
        fontFamily: "Rosario_400Regular",
        padding: 5,
    },
    susDesc:{
        fontSize: 17.5,
        marginHorizontal:8,
        fontFamily: "Rosario_400Regular",
        padding: 5,
        lineHeight: 27
    },
    susTitle:{
        fontSize: 20,
        marginHorizontal:10,
        fontFamily: "Rosario_400Regular",
        padding: 5,
        color: "purple",
    },
    button: {
        marginTop: 7,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 32,
        elevation: 3,
        backgroundColor: '#966bee',
        width: Dimensions.get('window').width * 0.6,
        maxWidth: 540,
        marginBottom: 5
      },
      btext: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        fontFamily: 'Rosario_400Regular',
        color: 'white',
      },
      modalV:{
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
      container2: {
        borderRadius: 25,
        borderStyle: "solid",
      },
      text_2: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        fontFamily: 'Rosario_400Regular',
        color: 'white',
      },
      modalTitle:{
        fontSize: 22,
        fontFamily: 'Rosario_400Regular',
        color: 'purple',
        marginRight: 35,
      },
      modalText:{
        padding: 5 ,
        fontSize: 17,
        fontFamily: 'Rosario_400Regular',
        marginTop:5,
        textAlign:"justify"
    },
    modalText2:{
        padding: 5 ,
        fontSize: 18,
        fontFamily: 'Rosario_400Regular',
        marginTop:5,
        textAlign:"justify",
        color: "purple",
    }
   
});

export default SelectSuscripcionScreen;