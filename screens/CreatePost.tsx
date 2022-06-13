import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import HeaderDiferente from '../components/Elementos/HeaderDiferente';
import Boton from '../components/Elementos/Boton';
import MultiSelector from '../components/Elementos/MultiSelector';

const deviceWidth = Dimensions.get('window').width;

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
    width: deviceWidth,
    height: 100,
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
  SectionStyleCategory: {
    flexDirection: 'column',
    width: Dimensions.get('window').width * 0.8,
    margin: 10,
    borderRadius: 15,
    backgroundColor: 'rgba(52, 52, 52, 0.04)',
    padding: 10,
  },
  SectionStyleAdjunto: {
    flexDirection: 'column',
    height: 100,
    width: Dimensions.get('window').width * 0.8,
    margin: 10,
    borderRadius: 15,
    backgroundColor: 'rgba(52, 52, 52, 0.04)',
    alignContent: 'flex-start',
  },
  TextfileTitle: {
    fontWeight: 'bold',
    color: '#f28e43',
  },
  TextfileTitleAdjunto: {
    fontWeight: 'bold',
    color: '#f28e43',
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  BotonSubirImagen: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.22,
    backgroundColor: '#ad8feb',
    width: 150,
    height: 45,
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontSize: 20,
    fontFamily: 'RosarioRegular',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

function CreateCateScreen({ route, navigation }: any) {
  // const { id } = route.params;

  const [name, onChangeName] = useState('New Category');
  const [desc, onChangeDesc] = useState('Todo lo que deseas y más');
  const [price, onChangePrice] = useState(0);
  const [nivel, onChangeNivel] = useState(1);
  const titulo = 'Crear Nueva Publicación';

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
              placeholderTextColor="#b3b3b3"
              onChangeText={text => onChangeName(text)}
            />
          </View>
          <View style={styles.SectionStyleDescripcion}>
            <Text style={styles.TextfileTitle}>Descripcion</Text>
            <TextInput
              placeholder="Ingrese una descripcion..."
              placeholderTextColor="#b3b3b3"
              onChangeText={text => onChangeDesc(text)}
            />
          </View>
          <View style={styles.SectionStyleAdjunto}>
            <Text style={styles.TextfileTitleAdjunto}>Archivo adjunto</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('UploadImg')}
              style={styles.BotonSubirImagen}
            >
              <Text style={styles.title}>Subir archivo</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.SectionStyleCategory}>
            <MultiSelector />
          </View>
        </View>

        <View style={styles.ViewEnd}>
          <Boton
            onPress={() => navigation.navigate('Profile')}
            title="Crear Publicación"
            anchura={190}
            altura={45}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CreateCateScreen;
