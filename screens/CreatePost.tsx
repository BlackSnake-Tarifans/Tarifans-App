import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput, ScrollView } from "react-native";
import HeaderDiferente from "../components/Elementos/HeaderDiferente";
import { Dimensions } from 'react-native';
import Boton from "../components/Elementos/Boton";
import MultiSelector from "../components/Elementos/MultiSelector";

const deviceWidth = Dimensions.get('window').width;

const CreateCateScreen = ({ route, navigation }: any) => {
  //const { id } = route.params;


  const [name, onChangeName] = useState("New Category");
  const [desc, onChangeDesc] = useState("Todo lo que deseas y más");
  const [price, onChangePrice] = useState(0);
  const [nivel, onChangeNivel] = useState(1);
  const titulo = "Crear Nueva Publicación";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.ViewTop}>
          <HeaderDiferente props={titulo} />
        </View>

        <View style={styles.ViewMiddle}>

          <View style={styles.SectionStyle}>
            <Text style={styles.TextfileTitle}>Título</Text>
            <TextInput
              placeholder="Ingrese el título..."
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
            <Text style={styles.TextfileTitle}>Archivo adjunto</Text>
            <TextInput
              placeholder="Ingrese un archivo adjunto..."
              placeholderTextColor={'#b3b3b3'}
              onChangeText={text => onChangeName(text)}
            />
          </View>
          <View style={styles.SectionStyleCategory}>
            <MultiSelector/>
          </View>
        </View>

        <View style={styles.ViewEnd}>
          <View style={styles.Botones}>
            <Boton onPress={() => navigation.navigate('Profile')} title="Crear Publicación" anchura={190} altura={45} />
          </View>
        </View>
      </ScrollView>
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
    alignItems: 'center',
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
    height: 100,
    width: Dimensions.get('window').width * 0.8,
    margin: 10,
    borderRadius: 15,
    backgroundColor: 'rgba(52, 52, 52, 0.04)',
    padding: 10,
  },
  SectionStyleCategory:{
    flexDirection: 'column',
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
  Botones: {
    marginTop: 30,
    backgroundColor: 'transparent',
  },
});

export default CreateCateScreen;
