import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions, Button, SafeAreaView, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import HeaderDiferente from "../components/Elementos/HeaderDiferente";
import Boton from '../components/Elementos/Boton';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const deviceWidth = Dimensions.get('window').width;
const UploadImgScreen = ({ navigation }: any) => {
  let [selectedImage, setSelectedImage] = React.useState(null);
  const tituloHeader1 = "Cargar archivo";
  const tituloHeader2 = "Previsualización:"



  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({

      mediaTypes: ImagePicker.MediaTypeOptions.All,

    });
    if (pickerResult.cancelled === true) {
      return;
    }


    setSelectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {
    return (
      <SafeAreaView style={styles.containerPhoto}>
        <ScrollView>

          <View style={styles.ViewTop}>
            <HeaderDiferente props={tituloHeader2} />
          </View>

          <View style={styles.ViewMiddlePhoto}>
            <View style={styles.imgContainer}>
              <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
            </View>
          </View>

          <View style={styles.ViewEndPhoto}>

            <View style={styles.ViewCancelar}>
              <TouchableOpacity onPress={openImagePickerAsync} style={styles.BotonCancelar}>
                <Text style={styles.title}>Añadir nuevo archivo</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.ViewConfirmar}>
              <Boton onPress={() => navigation.navigate("CreatePost", { uri: selectedImage.localUri })} title="Continuar" anchura={240} altura={55} />
            </View>

          </View>

        </ScrollView>
      </SafeAreaView>
    )

  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.ViewTop}>
        <HeaderDiferente props={tituloHeader1} />
      </View>

      <View style={styles.ViewMiddle}>
        <Text style={styles.instructions}>
          ¡Carga los archivos que deseas compartir con tu comunidad!
        </Text>
      </View>

      <View style={styles.ViewEnd}>

        <View style={styles.ViewCancelar}>
          <TouchableOpacity onPress={() => navigation.navigate('CreatePost')} style={styles.BotonCancelar}>
            <Text style={styles.title}>Cancelar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ViewConfirmar}>
          <Boton onPress={openImagePickerAsync} title="Cargar archivo" anchura={240} altura={55} />
        </View>

      </View>


    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: 'flex-start',
  },
  containerPhoto: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  instructions: {
    fontSize: 20,
    fontFamily: 'RosarioRegular',
    color: '#949494',
    textAlign: "center",
    width: deviceWidth * 0.7,
    backgroundColor: 'transparent',
    lineHeight: 32
  },
  ViewTop: {
    position: 'relative',
    width: deviceWidth,
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  ViewMiddle: {
    position: 'relative',
    top: -30,
    width: deviceWidth,
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  ViewEnd: {
    position: 'relative',
    alignItems: 'center',
    bottom: 0,
    top: 0,
    backgroundColor: 'transparent',
  },
  ViewMiddlePhoto:{
    position: 'relative',
    width: deviceWidth,
    alignItems: 'center',
  },
  ViewEndPhoto:{
    position: 'relative',
    alignItems: 'center',
    bottom: 0,
    top: 0,
    backgroundColor: 'transparent',
    marginTop:30
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
  thumbnail: {
    width: deviceWidth*0.8,
    height: deviceWidth*0.8,
    alignSelf: "center",
    borderRadius:25
  },  
  imgContainer: {
    backgroundColor:'green',
    borderRadius:25
  }
});

export default UploadImgScreen;