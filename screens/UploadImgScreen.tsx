import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions, Button, SafeAreaView, ScrollView} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import HeaderDiferente from "../components/Elementos/HeaderDiferente";
import Boton from '../components/Elementos/Boton';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)


const UploadImgScreen = ({navigation}: any ) =>{
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

      mediaTypes:ImagePicker.MediaTypeOptions.All,
      
      });
    if (pickerResult.cancelled === true) {
      return;
    }
    

    setSelectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {
    return (
      <SafeAreaView style={styles.containerPhoto}>
        
        <ScrollView contentContainerStyle={styles.suscContainter}>
        <HeaderDiferente props={tituloHeader2}/>
      <View style={styles.imgContainer}>
      <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
      </View>

      <Boton onPress={openImagePickerAsync} title="Cargar una foto distinta" altura={70} anchura={200}/>
      <View style={{margin: 12}}></View>
      <Boton onPress={()=>{setSelectedImage(null)} } title="Volver" altura={70} anchura={200}/>
      <View style={{margin: 12}}></View>
      <Boton onPress={()=>navigation.navigate("CreatePost", { uri: selectedImage.localUri })} title="Continuar" altura={70} anchura={200}/>
      <View style={{margin: 12}}></View>
      </ScrollView>
    </SafeAreaView>
  )
   
  }

  return (
    <SafeAreaView style={styles.container}>
       
        <HeaderDiferente props={tituloHeader1}/>
      <Text style={styles.instructions}>
        Selecciona la foto que quieras subir (Videos disponibles en una proxima actualización)
      </Text>

        <Boton onPress={openImagePickerAsync} title="Subir una foto" altura={70} anchura={200}/>
        <View style={{margin: 10}}></View>
        <Boton onPress={()=>navigation.navigate("CreatePost")} title="Volver" altura={70} anchura={200}/>
     
    
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
  containerPhoto:{
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  instructions: {
    color: 'black',
    fontSize: 18.5,
    marginHorizontal: 15,
    marginBottom: 20,
    textAlign: "justify",
    lineHeight: 35
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: ITEM_WIDTH,
      height: 500,
      resizeMode: 'contain',
      alignSelf: "center"
  },
  suscContainter:{
    flexGrow: 1,
        backgroundColor: "white", 
        justifyContent: 'flex-start',
        alignItems: "center" 
 },imgContainer:{
    marginBottom: 25,
    borderColor: "black",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 3,
    
 }
    
    

});

export default UploadImgScreen;