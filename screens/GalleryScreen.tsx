import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import HeaderDiferente from '../components/Elementos/HeaderDiferente';
import { ImgCard } from '../components/Elementos/ImgCard';

const SLIDER_WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width * 0.95;

const uris = [
  'https://c.wallhere.com/photos/2c/fa/Shigatsu_wa_Kimi_no_Uso_Miyazono_Kaori_Sawabe_Tsubaki_Arima_Kousei-41795.jpg!d',
  'https://br.atsit.in/es/wp-content/uploads/2022/01/fecha-y-hora-de-lanzamiento-del-episodio-4-de-my-dress-up-darling-confirmadas.jpg',
  'https://img1.ak.crunchyroll.com/i/spire4/aca67c20cfebb66369acb168168d0bdc1637343068_main.png',
  'https://as01.epimg.net/meristation/imagenes/2021/03/13/reportajes/1615633069_923466_1616262218_noticia_normal.jpg',
  'https://safebooru.org//images/3836/c398b5408cfc2d1d5dc1872fdf183bfaf3a7e636.jpg',
  'https://safebooru.org//images/3836/0bfdd3df7805936d96fff0df7bcae59ab1a59c79.jpg',
  'https://safebooru.org//images/3822/d8e9dc75d495439a5c396950c0f977c267c1ac20.jpg',
  'https://safebooru.org//images/379/616e6e9819af08ecb7191260d0d0ac4ccc7814f5.jpg',
];
function GalleryScreen({ route, navigation }: any) {
  const [ref, setRef] = React.useState(null);
  /* let { uris } = route.params */
  const [url, setUrl] = React.useState(uris);
  const [selectedImg, setSelectedImg] = React.useState('');
  const [indexF, setIndexF] = React.useState(0);
  const [modalVisible, setModalVisible] = React.useState(false);
  const tituloHeader = 'Galeria de fotos';

  const handleTap = (
    url: React.SetStateAction<string>,
    index: React.SetStateAction<number>,
  ) => {
    setSelectedImg(url), setModalVisible(!modalVisible), setIndexF(index);
  };

  const handleTapModal = (url: React.SetStateAction<string>) => {
    setSelectedImg(url);
  };

  if (url.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.ScrollContainter}>
          <HeaderDiferente props={tituloHeader} />
          <View style={styles.container}>
            <Text style={styles.instructions}>
              No hay archivos por cargar{'\n'}
            </Text>
          </View>

          <View style={{ margin: 10 }} />
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.ScrollContainter}>
        <Modal
          hasBackdrop
          isVisible={modalVisible}
          onBackdropPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <ScrollView contentContainerStyle={styles.ScrollContainter}>
            <View style={styles.modalV}>
              <View style={styles.containerImg}>
                <ImgCard source={selectedImg} />
              </View>
              <View style={{ flex: 1 }}>
                <FlatList
                  ref={ref => {
                    setRef(ref);
                  }}
                  initialScrollIndex={indexF}
                  style={{ width: ITEM_WIDTH }}
                  data={url}
                  keyExtractor={item => item}
                  contentContainerStyle={{}}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  renderItem={({ item, index }) => {
                    return (
                      <View style={{ margin: 1 }}>
                        <TouchableOpacity
                          activeOpacity={1}
                          onPress={() => {
                            handleTapModal(item),
                              ref.scrollToIndex({
                                animated: true,
                                index,
                                viewPosition: 0,
                              });
                            setIndexF(index);
                          }}
                        >
                          <Image
                            source={{ uri: item }}
                            style={{
                              width: ITEM_WIDTH / 4 - 2,
                              height: 75,
                              borderColor:
                                selectedImg === item ? 'green' : 'purple',
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
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}
            >
              <View style={styles.modalButton}>
                <TouchableOpacity
                  onPress={() => {
                    if (indexF === 0) {
                      return;
                    }
                    const prev = indexF - 1;
                    const img = url[prev];
                    ref.scrollToIndex({
                      animated: true,
                      index: prev,
                      viewPosition: 0,
                    });
                    setSelectedImg(img);
                    setIndexF(prev);
                  }}
                >
                  <Text style={styles.instructions}>Prev</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.modalButton}>
                <TouchableOpacity
                  onPress={() => {
                    if (indexF === url.length - 1) {
                      return;
                    }
                    const next = indexF + 1;
                    const img = url[next];
                    ref.scrollToIndex({
                      animated: true,
                      index: next,
                      viewPosition: 0,
                    });
                    setSelectedImg(img);
                    setIndexF(next);
                  }}
                >
                  <Text style={styles.instructions}>Next</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.modalButton}>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.instructions}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </Modal>
        <HeaderDiferente props={tituloHeader} />
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {url.map((urls: any, index: any) => (
            <View key={index} style={{ margin: 1 }}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => handleTap(urls, index)}
              >
                <Image source={{ uri: urls }} style={styles.thumbnail} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={{ margin: 10 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerPhoto: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  instructions: {
    color: 'black',
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: deviceWidth / 2 - 6,
    height: deviceHeight / 3,
    borderColor: 'purple',
    borderWidth: 1,
    borderRadius: 10,
    margin: 2,
  },
  ScrollContainter: {
    flexGrow: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    borderRadius: 20,
  },
  modalV: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  container2: {
    borderRadius: 25,
    borderStyle: 'solid',
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
    alignSelf: 'center',
    width: 80,
    height: 80,
    borderColor: 'purple',
    borderWidth: 1,
    borderRadius: 10,
    margin: 2,
  },
  containerImg: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    borderColor: 'purple',
    borderWidth: 1,
    marginBottom: 10,
    width: ITEM_WIDTH,
  },
  modalButton: {
    justifyContent: 'center',
    borderColor: 'purple',
    borderRadius: 10,
    borderWidth: 1,
    margin: 15,
    flex: 1,
  },
});

export default GalleryScreen;
