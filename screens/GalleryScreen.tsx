import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import HeaderDiferente from "../components/Elementos/HeaderDiferente";
import Modal from "react-native-modal";
import { ImgCard } from '../components/Elementos/CarouselCardItem';
export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width * 0.95;

const uris = [
  "https://static.zerochan.net/Vladilena.Milizé.full.3601354.jpg",
  "https://static.zerochan.net/Kaguya-sama.wa.Kokurasetai.full.3596676.jpg",
  "https://static.zerochan.net/Sword.Art.Online.Progressive%3A.Hoshi.Naki.Yoru.no.Aria.full.3379738.jpg",
  "https://static.zerochan.net/Spy.x.Family.full.3493445.jpg",
  "https://static.zerochan.net/Fate.Grand.Order%3A.Solomon.full.3419130.png",
  "https://static.zerochan.net/Miyazono.Kaori.full.2311362.jpg",
  "https://static.zerochan.net/Horimiya.full.3259444.jpg",
  "https://static.zerochan.net/Horimiya.full.3282799.jpg"
]
const GalleryScreen = ({ route, navigation }: any) => {
  const [ref, setRef] = React.useState(null);
  //let { uris } = route.params
  let [url, setUrl] = React.useState(uris);
  let [selectedImg, setSelectedImg] = React.useState("");
  let [indexF, setIndexF] = React.useState(0);
  const [modalVisible, setModalVisible] = React.useState(false);
  const tituloHeader = "Galeria de fotos"


  const handleTap = (url: React.SetStateAction<string>, index: React.SetStateAction<number>) => {
    setSelectedImg(url), 
    setModalVisible(!modalVisible), 
    setIndexF(index);
  }

  const handleTapModal = (url: React.SetStateAction<string>) => {
    setSelectedImg(url);
  }

  if (url.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.ScrollContainter}>
          <HeaderDiferente props={tituloHeader} />
          <View style={styles.container}>
          <Text style={styles.instructions}>
            No hay archivos por cargar{"\n"}
          </Text>
          </View>


          <View style={{ margin: 10 }}></View>


        </ScrollView>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.ScrollContainter}>
        <Modal
           hasBackdrop={true}
           isVisible={modalVisible}
           onBackdropPress={() => {
           setModalVisible(!modalVisible);
           }}
        >
          <View style={styles.container2}>
          <ScrollView contentContainerStyle={styles.ScrollContainter}>
            <View style={styles.modalV}>
              <View style={{ flexDirection: "row-reverse", justifyContent: "space-around" }}>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} >
                  <Image style={styles.iconM} source={require('../assets/images/iconos/cerrar_x.png')} />
                </TouchableOpacity>
                <Text style={styles.modalTitle}>Confirmación de Compra</Text>
              </View>
              <View style={styles.containerImg}>
                <ImgCard source={selectedImg} />
              </View>
              <FlatList
                ref={(ref) => { setRef(ref) }}
                initialScrollIndex={indexF}
                style={{width: ITEM_WIDTH}}
                data={url}
                keyExtractor={(item) => item}
                contentContainerStyle={{}}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={({ item, index }) => {
                  return (
                    <View style={{margin: 1}}>
                      <TouchableOpacity activeOpacity={1} onPress={() => {
                        handleTapModal(item), 
                        ref.scrollToIndex({
                          animated: true,
                          index: index,
                          viewPosition: 0
                        })
                      }}>
                        <Image
                          source={{ uri: item }}
                          style={{
                            width: ITEM_WIDTH / 4 - 2,
                            height: 90,
                            borderColor: selectedImg === item ? "green" : "purple",
                            borderWidth: selectedImg === item ? 2 : 1,
                            borderRadius: 10,
                          }}

                        />
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
            </View>
            </ScrollView>
          </View>
        </Modal>
        <HeaderDiferente props={tituloHeader} />
        <View style={{ justifyContent: "center", flexDirection: "row", flexWrap: "wrap", }}>
          {url.map((url: any, index: any) => (
            <View key={index} style={{ margin: 1 }}>
              <TouchableOpacity activeOpacity={1} onPress={() => handleTap(url, index)}>
                <Image source={{ uri: url }} style={styles.thumbnail} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={{ margin: 10 }}></View>


      </ScrollView>
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
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  instructions: {
    color: '#9D9D9E',
    fontSize: 15,
    marginBottom: 20,
    textAlign: "center",
    lineHeight: 25,
    width: Dimensions.get('window').width * 0.8,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {

    width: deviceWidth / 2 - 6,
    height: deviceHeight / 3,
    borderColor: "purple",
    borderWidth: 1,
    borderRadius: 10,
    margin: 2,
  },
  ScrollContainter: {
    flexGrow: 1,
    backgroundColor: "white",
    justifyContent: 'flex-start',
    borderRadius: 20,
  },
  modalV: {
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  container2: {
    borderRadius: 25,
    borderStyle: "solid",
    backgroundColor: '#fff',
  },
  iconM: {
    resizeMode: 'cover',
    height: 13,
    width: 13,


  },
  modalTitle: {
    fontSize: 20,
    color: 'white',
    marginRight: 35,
  },
  thumbnail2: {
    alignSelf: "center",
    width: 80,
    height: 80,
    borderColor: "purple",
    borderWidth: 1,
    borderRadius: 10,
    margin: 2,

  },
  containerImg: {
    backgroundColor: 'white',
    width: ITEM_WIDTH + 2,
    paddingBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    borderColor: "purple",
    borderWidth: 1,
    marginBottom: 10,
    height: 352,


  }
});

export default GalleryScreen;
