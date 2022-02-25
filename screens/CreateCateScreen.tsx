import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput, Alert, Pressable, Image, ScrollView, TouchableOpacity } from "react-native";
import HeaderSinLogo from "../components/Home/HeaderSinLogo";
import HeaderDiferente from "../components/Home/HeaderDiferente";
import { Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

const CreateCateScreen = ({ route, navigation }: any) => {
  //const { id } = route.params;


  const [name, onChangeName] = useState("New Category");
  const [desc, onChangeDesc] = useState("Todo lo que deseas y más");
  const [price, onChangePrice] = useState(0);
  const [nivel, onChangeNivel] = useState(1);
  const titulo = "Registro Categoría Suscripción";

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.ViewTop}>
        <HeaderDiferente props={titulo} />
      </View>

      <View style={styles.ViewMiddle}>

        <View style={styles.SectionStyle}>
          <Text style={styles.TextfileTitle}>Nombre</Text>
          <TextInput
            placeholder="Ingrese el nombre de la categoría"
            placeholderTextColor={'#b3b3b3'}
            onChangeText={text => onChangeName(text)}
          />
        </View>
        <View style={styles.SectionStyleDescripcion}>
          <Text style={styles.TextfileTitle}>Descripcion</Text>
          <TextInput
            placeholder="Ingrese una descripcion..."
            placeholderTextColor={'#b3b3b3'}
            onChangeText={text => onChangeDesc(text)}
          />
        </View>
        <View style={styles.SectionStyle}>
          <Text style={styles.TextfileTitle}>Precio ($)</Text>
          <TextInput
            placeholder="Precio"
            placeholderTextColor={'#b3b3b3'}
            keyboardType='numeric'
            maxLength={10}
            onChangeText={text => onChangePrice(parseFloat(text))}
          />
        </View>
        <View style={styles.SectionStyle}>
          <Text style={styles.TextfileTitle}>Nivel</Text>
          <TextInput
            placeholder="NivelAAA"
            placeholderTextColor={'#b3b3b3'}
            keyboardType='numeric'
            maxLength={10}
            onChangeText={text => onChangeNivel(parseInt(text))}
          />
        </View>
      </View>

      <View style={styles.ViewEnd}>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button_2} activeOpacity={0.5}
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
            }}>
            <Text style={styles.text_2}> Crear Categoría </Text>
            <Image style={styles.ImageStyle} source={require('../assets/images/iconos/right-arrow.png')} />

          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>

  );
}

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
    top: -30,
    width: deviceWidth,
    alignItems: 'center',

  },
  ViewEnd: {
    position: 'relative',
    bottom: 0,
    top: -30,
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
    height: 140,
    width: Dimensions.get('window').width * 0.8,
    margin: 10,
    borderRadius: 15,
    backgroundColor: 'rgba(52, 52, 52, 0.04)',
    padding: 10,
  },
  TextfileTitle: {
    fontWeight: 'bold',
    color: '#f28e43'
  },
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
    fontSize: 10,
    marginLeft: 5,
    lineHeight: 21,
    letterSpacing: 0.25,
    fontFamily: 'RosarioRegular',
    color: 'white',
  },
  buttons: {
    backgroundColor: 'rgba(0,0,0,0)',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 140,
    marginRight: 40
  },
  button_2: {
    flexDirection: 'row',
    position: 'relative',
    height: 60,
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
    width: Dimensions.get('window').width * 0.4,
    maxWidth: 540,
  },
  text_2: {
    fontSize: 15,
    marginLeft: 5,
    lineHeight: 21,
    letterSpacing: 0.25,
    fontFamily: 'RosarioRegular',
    color: 'white',
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
    opacity: 0.4
  },
});

export default CreateCateScreen;
