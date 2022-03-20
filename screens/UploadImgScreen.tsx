import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions, Button, SafeAreaView, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import HeaderDiferente from "../components/Elementos/HeaderDiferente";
import Boton from '../components/Elementos/Boton';
import { ImgCard } from '../components/Elementos/CarouselCardItem';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const deviceWidth = Dimensions.get('window').width;
const UploadImgScreen = ({ navigation }: any) => {
  let [selectedImage, setSelectedImage] = React.useState(null);
  let [url, setUrl] = React.useState([]);
  const tituloHeader1 = "Cargar archivo";
  const tituloHeader2 = "Previsualización"



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
    setUrl([...url, pickerResult.uri.toString()]);
  };

  const deleteFile = (urlFile: any) => {
    const newURL = url.filter((item) => item !== urlFile);
    setUrl(newURL);
  }

  if (selectedImage !== null && url.length != 0) {
    return (
      <SafeAreaView style={styles.containerPhoto}>
        <ScrollView contentContainerStyle={styles.suscContainter}>

          <View style={styles.ViewTop}>
            <HeaderDiferente props={tituloHeader2} />
          </View>

          <View style={styles.ViewMiddlePhoto}>
            <View style={styles.instructions}>
              <Text style={styles.instructions}>
                Archivos cargados
              </Text>
            </View>
            {url.map((url: any, index: any) => (
              <View style={{ margin: 10 }} key={url}>
                <View style={styles.imgContainer2}>
                  <Image source={{ uri: url }} style={styles.thumbnail2} />
                  <View style={{ margin: 5 }}></View>
                  <Boton onPress={() => deleteFile(url)} title="Quitar" altura={50} anchura={100} />
                </View>
                <View style={styles.imgContainer}>
                  <ImgCard source={url}/>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.ViewEndPhoto}>

            <View style={styles.ViewCancelar}>
              <TouchableOpacity onPress={openImagePickerAsync} style={styles.BotonCancelar}>
                <Text style={styles.title}>Añadir nuevo archivo</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.ViewConfirmar}>
              <Boton onPress={() => { setSelectedImage(null), navigation.navigate("CreatePost", { uris: url }) }} title="Continuar" anchura={240} altura={55} />
            </View>

          </View>

        </ScrollView>
      </SafeAreaView>
    )

  }

  if (selectedImage !== null && url.length === 0) {
    return (

      <SafeAreaView style={styles.container}>

        <ScrollView contentContainerStyle={styles.suscContainter}>
          <HeaderDiferente props={tituloHeader2} />
          <Text style={styles.instructions}>
            No hay archivos cargados.{"\n"}¡Te invitamos a subir uno!
          </Text>
          <Boton onPress={openImagePickerAsync} title="Añadir archivo a la publicación" altura={70} anchura={280} />
          <View style={{ margin: 12 }}></View>
          <Boton onPress={() => { setSelectedImage(null), navigation.navigate("CreatePost") }} title="Volver" altura={70} anchura={280} />
          <View style={{ margin: 12 }}></View>

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
    lineHeight: 32,
    marginBottom: 12,
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
  ViewMiddlePhoto: {
    position: 'relative',
    width: deviceWidth,
    alignItems: 'center',
  },
  ViewEndPhoto: {
    position: 'relative',
    alignItems: 'center',
    bottom: 0,
    top: 0,
    backgroundColor: 'transparent',
    marginTop: 30
  },
  ViewCancelar: {
    backgroundColor: 'transparent'
  },
  ViewConfirmar: {
    marginTop: 15,
    backgroundColor: 'transparent',
    marginBottom: 30,
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
    width: deviceWidth * 0.9,
    height: (deviceWidth),
    alignSelf: "center",
    borderRadius: 25,
    resizeMode: "contain"
  },
  imgContainer: {
    backgroundColor: 'white',
    borderRadius: 25,
    borderColor: "black",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 2,

  },
  suscContainter: {
    flexGrow: 1,
    backgroundColor: "white",
    justifyContent: 'flex-start',
    alignItems: "center"
  },
  imgContainer2: {
    flexDirection: "row",
    marginBottom: 25,
    borderColor: "black",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    elevation: 1,
    padding: "5.5%",
    marginHorizontal: 10,
    borderRadius: 25,

  },
  thumbnail2: {
    width: "55%",
    height: ITEM_WIDTH / 2,
    alignSelf: "center",
    borderRadius: 25,
    resizeMode: "contain"
  },


});

export default UploadImgScreen;