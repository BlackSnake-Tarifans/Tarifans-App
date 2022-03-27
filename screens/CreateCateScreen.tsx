import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput, ScrollView } from "react-native";
import HeaderDiferente from "../components/Elementos/HeaderDiferente";
import { Dimensions } from 'react-native';
import Boton from "../components/Elementos/Boton";

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
      <ScrollView>
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
          <View style={styles.Botones}>
            <Boton onPress={() => navigation.navigate('Profile')} title="Crear Categoría" anchura={180} altura={45} />
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
