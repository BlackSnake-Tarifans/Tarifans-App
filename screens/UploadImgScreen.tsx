import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TextInput,
  ActivityIndicator,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Modal from 'react-native-modal';
import { MultipleSelectPicker } from 'react-native-multi-select-picker';
import HeaderDiferente from '../components/Elementos/HeaderDiferente';
import Boton from '../components/Elementos/Boton';
import MediaElement from '../components/Elementos/MediaElement';
import { postMedia, postText } from '../hooks/postsAPI';

const SLIDER_WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerPhoto: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  instructions: {
    fontSize: 20,
    fontFamily: 'RosarioRegular',
    color: '#949494',
    textAlign: 'center',
    width: deviceWidth * 0.7,
    backgroundColor: 'transparent',
    lineHeight: 32,
    marginBottom: 12,
  },
  ViewTop: {
    position: 'relative',
    width: deviceWidth,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  ViewMiddle: {
    position: 'relative',
    top: -30,
    width: deviceWidth,
    alignItems: 'center',
    backgroundColor: 'transparent',
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
    marginTop: 30,
  },
  ViewCancelar: {
    backgroundColor: 'transparent',
    margin: 5,
  },
  ViewConfirmar: {
    margin: 10,
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
    borderColor: '#b3b3b3',
  },
  title: {
    fontSize: 20,
    fontFamily: 'RosarioRegular',
    color: '#949494',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  thumbnail: {
    width: deviceWidth * 0.9,
    height: deviceWidth,
    alignSelf: 'center',
    borderRadius: 25,
    resizeMode: 'contain',
  },
  imgContainer: {
    backgroundColor: 'white',
    width: ITEM_WIDTH + 2,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    borderColor: 'purple',
    borderWidth: 1,
  },
  modalTitle: {
    fontSize: 22,
    color: 'black',
    padding: 10,
    textAlign: 'center',
  },
  suscContainter: {
    flexGrow: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imgContainer2: {
    flexDirection: 'row',
    marginBottom: 25,
    borderColor: 'black',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    elevation: 1,
    padding: '5.5%',
    marginHorizontal: 10,
    borderRadius: 10,
  },
  thumbnail2: {
    width: '55%',
    height: ITEM_WIDTH / 2,
    alignSelf: 'center',
    borderRadius: 25,
    resizeMode: 'contain',
  },
  modalV: {
    padding: 22,
    alignContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  TextfileTitle2: {
    fontWeight: 'bold',
    color: '#f28e43',
  },
  ViewPicker: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
  TextfileCate: {
    fontWeight: 'bold',
    color: '#949494',
  },
  CheckBoxStyle: {
    width: 20,
    height: 20,
    backgroundColor: '#edd4ff',
    borderRadius: 20,
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
});

function UploadImgScreen({ route, navigation, navigation: { goBack } }: any) {
  const { name, description, selected } = route.params;

  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState<any>({
    localUri: '',
  });
  const [url, setUrl] = React.useState([] as any);

  const [animating, setAnimating] = React.useState(false);

  const tituloHeader1 = 'Cargar archivo';
  const tituloHeader2 = 'Previsualización';

  const [name2, onChangeName2] = React.useState(name);
  const [description2, onChangeDescription2] = React.useState(description);
  /* Arreglo de Items para el multiselector, usar useState para traer el plan de suscripción */
  const items = [
    { label: 'Básica', value: '1' },
    { label: 'Premium', value: '2' },
    { label: 'Platinum', value: '3' },
  ];

  const [selectedItems, setSelectedItems] = React.useState(selected);
  const [isShownPicker, setIsShownPicker] = React.useState(false);

  const handleTap = (url: React.SetStateAction<string>) => {
    setSelectedImage({ localUri: url } as any);
  };

  const openImagePickerAsync = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri } as any);
    setUrl([...url, pickerResult.uri.toString()]);
  };

  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage({ localUri: result.uri } as any);
      setUrl([...url, result.uri.toString()]);
    }
  };

  const deleteFileF = (urlFile: any) => {
    const index = url.lastIndexOf(urlFile);
    const newURL = url.filter((item: any) => {
      return item !== urlFile;
    });
    setUrl(newURL);
    if (index === 0) {
      setSelectedImage({ localUri: url[1] } as any);
    } else {
      setSelectedImage({ localUri: url[index - 1] } as any);
    }
  };

  if (selectedImage.localUri !== '' && url.length != 0) {
    return (
      <SafeAreaView style={styles.containerPhoto}>
        <Modal
          hasBackdrop
          isVisible={modalVisible}
          onBackdropPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View
            style={{
              borderRadius: 25,
              borderStyle: 'solid',
              alignContent: 'flex-start',
              backgroundColor: 'white',
            }}
          >
            <View style={styles.modalV}>
              <View
                style={{
                  flexDirection: 'row-reverse',
                  justifyContent: 'space-around',
                }}
              >
                <Text style={styles.modalTitle}>Cargar desde:</Text>
              </View>

              <View style={styles.ViewCancelar}>
                <Boton
                  onPress={() => {
                    openImagePickerAsync();
                    setModalVisible(!modalVisible);
                  }}
                  title="Galería"
                  anchura={240}
                  altura={55}
                />
              </View>
              <View style={styles.ViewCancelar}>
                <Boton
                  onPress={() => {
                    openCamera();
                    setModalVisible(!modalVisible);
                  }}
                  title="Cámara"
                  anchura={240}
                  altura={55}
                />
              </View>
              <View style={styles.ViewCancelar}>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                  style={styles.BotonCancelar}
                >
                  <Text style={styles.title}>Cerrar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <ScrollView contentContainerStyle={styles.suscContainter}>
          <View style={styles.ViewTop}>
            <HeaderDiferente props={tituloHeader2} />
          </View>

          <View style={styles.ViewMiddlePhoto}>
            <View style={styles.instructions}>
              <Text style={styles.instructions}>Archivos cargados</Text>
            </View>
            <View style={styles.imgContainer}>
              <MediaElement source={selectedImage.localUri} />
            </View>
            <View style={styles.instructions} />
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            >
              {url.map((urls: any, index: any) => (
                <View key={index} style={{ margin: 1 }}>
                  <View style={{ margin: 1 }}>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => {
                        handleTap(urls);
                      }}
                    >
                      <Image
                        source={{ uri: urls }}
                        style={{
                          width: ITEM_WIDTH / 4 - 2,
                          height: 90,
                          borderColor:
                            selectedImage.localUri === urls
                              ? 'green'
                              : 'purple',
                          borderWidth: selectedImage.localUri === urls ? 2 : 1,
                          borderRadius: 10,
                        }}
                      />
                    </TouchableOpacity>
                    <View style={{ margin: 1 }} />
                    <Boton
                      onPress={() => deleteFileF(urls)}
                      title="X"
                      altura={30}
                      anchura={ITEM_WIDTH / 4 - 2}
                    />
                  </View>
                </View>
              ))}
            </View>

            <View style={styles.SectionStyle}>
              <Text style={styles.TextfileTitle2}>Título elegido: {name2}</Text>
              <TextInput
                placeholder="Ingrese un nuevo título si desea..."
                placeholderTextColor="#b3b3b3"
                onChangeText={text => onChangeName2(text)}
              />
            </View>
            <View style={styles.SectionStyleDescripcion}>
              <Text style={styles.TextfileTitle2}>
                Descripcion elegida: {description2}
              </Text>
              <TextInput
                placeholder="Ingrese una nueva descripcion si desea..."
                placeholderTextColor="#b3b3b3"
                onChangeText={text => onChangeDescription2(text)}
              />
            </View>

            <View style={styles.SectionStyleCategory}>
              <ScrollView>
                <TouchableOpacity
                  onPress={() => {
                    setIsShownPicker(!isShownPicker);
                  }}
                  style={styles.ViewPicker}
                >
                  <Text style={styles.TextfileTitle2}>
                    Categorías elegidas:
                  </Text>
                </TouchableOpacity>
                {isShownPicker ? (
                  <MultipleSelectPicker
                    items={items}
                    onSelectionsChange={(ele: any) => {
                      setSelectedItems(ele);
                    }}
                    selectedItems={selectedItems}
                    buttonStyle={{
                      height: 100,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    buttonText="hello"
                    checkboxStyle={styles.CheckBoxStyle}
                    rowStyle={{ backgroundColor: 'transparent' }}
                    labelStyle={styles.TextfileCate}
                  />
                ) : null}

                {(selectedItems || []).map((item: any, index) => {
                  return (
                    <Text style={{ color: '#b3b3b3' }} key={index}>
                      {item.label}
                    </Text>
                  );
                })}
              </ScrollView>
            </View>
          </View>

          <View style={styles.ViewEndPhoto}>
            <View style={styles.ViewCancelar}>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={styles.BotonCancelar}
              >
                <Text style={styles.title}>Añadir nuevo archivo</Text>
              </TouchableOpacity>
            </View>

            {/*
                Aqui en este botón se mandaría a crear la publicación.

                
              */}
            <View style={styles.ViewConfirmar}>
              <Boton
                onPress={async () => {
                  try {
                    setAnimating(true);
                    const response = await postText({
                      subscription_plan: 1,
                      title: name2,
                      description: description2,
                    });

                    if (response.status == 201) {
                      // 201 == HTTP_CREATED
                      console.log(selectedImage.localUri);
                      const { data } = response;
                      console.log(data);

                      const { localUri } = selectedImage;
                      const filename = localUri.split('/').pop();

                      // Infer the type of the imag

                      console.log(filename);

                      // Upload the image using the fetch and FormData APIs
                      const formData = new FormData();
                      // Assume "photo" is the name of the form field the server expects

                      formData.append('file', {
                        uri: localUri,
                        name: `test.${localUri.split('.')[1]}`,
                        type: `test/${localUri.split('.')[1]}`,
                      });
                      formData.append('type', '1');
                      formData.append('post', '3');
                      console.log(formData);
                      const response2 = await postMedia(formData);
                      if (response2.status == 201) {
                        setAnimating(false);
                        setSelectedImage({
                          localUri: '',
                        }),
                          navigation.navigate('MyProfile');
                      }
                    }
                  } catch (error) {
                    setAnimating(false);
                    Alert.alert(`Error: ${error}`);
                  }
                }}
                title="Crear Publicación"
                anchura={240}
                altura={55}
              />
              <View style={{ margin: 12 }} />
              <Boton
                onPress={() => {
                  setSelectedImage({
                    localUri: '',
                  }),
                    setUrl([]),
                    setSelectedItems([]),
                    onChangeDescription2(''),
                    onChangeName2(''),
                    goBack();
                }}
                title="Volver"
                altura={55}
                anchura={240}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (selectedImage.localUri !== '' && url.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <Modal
          hasBackdrop
          isVisible={modalVisible}
          onBackdropPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View
            style={{
              borderRadius: 25,
              borderStyle: 'solid',
              alignContent: 'flex-start',
              backgroundColor: 'white',
            }}
          >
            <View style={styles.modalV}>
              <View
                style={{
                  flexDirection: 'row-reverse',
                  justifyContent: 'space-around',
                }}
              >
                <Text style={styles.modalTitle}>Cargar desde:</Text>
              </View>

              <View style={styles.ViewCancelar}>
                <Boton
                  onPress={() => {
                    openImagePickerAsync();
                    setModalVisible(!modalVisible);
                  }}
                  title="Galería"
                  anchura={240}
                  altura={55}
                />
              </View>
              <View style={styles.ViewCancelar}>
                <Boton
                  onPress={() => {
                    openCamera();
                    setModalVisible(!modalVisible);
                  }}
                  title="Cámara"
                  anchura={240}
                  altura={55}
                />
              </View>
              <View style={styles.ViewCancelar}>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                  style={styles.BotonCancelar}
                >
                  <Text style={styles.title}>Cerrar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <ScrollView contentContainerStyle={styles.suscContainter}>
          <HeaderDiferente props={tituloHeader2} />
          <Text style={styles.instructions}>
            No hay archivos cargados.{'\n'}¡Te invitamos a subir uno!
          </Text>
          <Boton
            onPress={() => setModalVisible(!modalVisible)}
            title="Añadir archivo a la publicación"
            altura={70}
            anchura={280}
          />
          <View style={{ margin: 12 }} />
          <Boton
            onPress={() => {
              setSelectedImage({
                localUri: '',
              }),
                setSelectedItems([]),
                onChangeDescription2(''),
                onChangeName2(''),
                goBack();
            }}
            title="Volver"
            altura={70}
            anchura={280}
          />
          <View style={{ margin: 12 }} />
        </ScrollView>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ViewTop}>
        <HeaderDiferente props={tituloHeader1} />
      </View>

      <View style={styles.ViewMiddle}>
        <Modal
          hasBackdrop
          isVisible={modalVisible}
          onBackdropPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View
            style={{
              borderRadius: 25,
              borderStyle: 'solid',
              alignContent: 'flex-start',
              backgroundColor: 'white',
            }}
          >
            <View style={styles.modalV}>
              <View
                style={{
                  flexDirection: 'row-reverse',
                  justifyContent: 'space-around',
                }}
              >
                <Text style={styles.modalTitle}>Cargar desde:</Text>
              </View>

              <View style={styles.ViewCancelar}>
                <Boton
                  onPress={() => {
                    openImagePickerAsync();
                    setModalVisible(!modalVisible);
                  }}
                  title="Galería"
                  anchura={240}
                  altura={55}
                />
              </View>
              <View style={styles.ViewCancelar}>
                <Boton
                  onPress={() => {
                    openCamera();
                    setModalVisible(!modalVisible);
                  }}
                  title="Cámara"
                  anchura={240}
                  altura={55}
                />
              </View>
              <View style={styles.ViewCancelar}>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                  style={styles.BotonCancelar}
                >
                  <Text style={styles.title}>Cerrar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Text style={styles.instructions}>
          ¡Carga los archivos que deseas compartir con tu comunidad!
        </Text>
      </View>

      <View style={styles.ViewEnd}>
        <View style={styles.ViewCancelar}>
          <TouchableOpacity
            onPress={() => {
              setSelectedItems([]),
                onChangeDescription2(''),
                onChangeName2(''),
                goBack();
            }}
            style={styles.BotonCancelar}
          >
            <Text style={styles.title}>Cancelar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ViewConfirmar}>
          <Boton
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
            title="Cargar archivo"
            anchura={240}
            altura={55}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default UploadImgScreen;
