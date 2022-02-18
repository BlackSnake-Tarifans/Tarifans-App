import React, { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, SafeAreaView, StyleSheet, TextInput, Alert, Pressable, Image } from "react-native";
import Header from "../components/Home/Header";
const CreateCateScreen = ({route, navigation} : any) => {
    //const { id } = route.params;

    const [ name , onChangeName ] = useState("New Category");
    const [ desc , onChangeDesc ] = useState("Todo lo que deseas y más");
    const [ price, onChangePrice ] = useState(0);
    const [ nivel, onChangeNivel ] = useState(1);

    return (
        <SafeAreaView>
            <Header navigation={navigation}/>
            <LinearGradient colors={['#f28e43', '#966bee']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0.7 }} locations={[0, 0.95]}>
                <Text>Crear Categoría de Suscripción</Text>
                <Text>Nombre</Text>
                <TextInput
                    placeholder="Nombre"
                    placeholderTextColor={'white'}
                    onChangeText={text => onChangeName(text)}
                />
                <Text>Descripcion</Text>
                <TextInput
                    placeholder="Descripcion"
                    placeholderTextColor={'white'}
                    onChangeText={text => onChangeDesc(text)}
                />
                <Text>Precio ($)</Text>
                <TextInput
                    placeholder="Precio ($)"
                    placeholderTextColor={'white'}
                    keyboardType='numeric'
                    maxLength={10}
                    onChangeText={text => onChangePrice(parseFloat(text))}
                />
                <Text>Nivel</Text>
                <TextInput
                    placeholder="Nivel"
                    placeholderTextColor={'white'}
                    keyboardType='numeric'
                    maxLength={10}
                    onChangeText={text => onChangeNivel(parseInt(text))}
                />
                <View style={styles.buttons}>
                    <CateButton
                        title='Crear Categoría de Suscripción'
                        style_button={styles.button_2}
                        style_text={styles.text}
                        onPress={() => {
                            /* Aqui iria algun metodo para crear la suscripcion en el back: ejemplo con "crearCat"
                            crearCat({
                                categoria: {
                                    id: id,
                                    name: name,
                                    desc: desc,
                                    price: price,
                                    nivel: nivel
                                },
                            }).then((data) => { console.log(data); navigation.navigate('Profile') })*/
                            console.log("Nueva categoría");
                            navigation.navigate('Profile');
                        }}
                    />
                    <CateButton
                        onPress={() => navigation.navigate('Profile')}
                        title="Volver al perfil/Cerrar"
                        style_button={styles.button}
                        style_text={styles.text}
                    />
                </View>
            </LinearGradient>




        </SafeAreaView>

    );
}

function CateButton(props: { onPress: any; title: string | undefined; style_button: any, style_text: any }) {
    const { onPress, title, style_button, style_text } = props;
    return (
      <Pressable style={style_button} onPress={onPress}>
        <Text style={style_text}>{title}</Text>
      </Pressable>
    );
  }
  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    buttons: {
        backgroundColor: 'rgba(0,0,0,0)',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 0,
        flexBasis: 'auto'
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
        }},
  });

export default CreateCateScreen;
