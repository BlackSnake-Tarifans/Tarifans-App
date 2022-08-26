import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import { MultipleSelectPicker } from 'react-native-multi-select-picker';
import Modal from 'react-native-modal';
import HeaderDiferente from '../components/Elementos/HeaderDiferente';
import Boton from '../components/Elementos/Boton';

const VALORES = {
  id: 1,
  user: {
    id: 1,
    username: 'cajifan',
    email: 'cjimenezf17@gmail.com',
    first_name: 'Carlos',
    last_name: 'Jiménez Farfán',
    is_superuser: false,
  },
  birth_date: '2000-01-17',
  profile_pic: '/media/profile_pics/WhatsApp_Image_2022-01-16_at_09.05.22.jpeg',
  bio: "Aquí va la biografía del usuario: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  num_subscribers: 654,
  num_subscribed: 32,
};

const OBSERVACIONES = {
  obs: '* No pueda acceder a tu perfil\n* No pueda enviarte mensajes privados\n* No pueda ver ni interactuar con tus publicaciones\n* No pueda acceder a la información de tu perfil',
};
const dimensions = Dimensions.get('window');
const deviceWidth = dimensions.width;
const deviceHeight = dimensions.height;

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
    top: 40,
    left: 40,
    right: 40,
    width: deviceWidth,
    alignItems: 'flex-start',
  },
  ViewEnd: {
    position: 'relative',
    alignItems: 'center',
    marginBottom: 70,
    marginTop: 20,
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
    color: '#f28e43',
  },
  Botones: {
    marginTop: 30,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  ProfileView: {
    backgroundColor: 'transparent',
    position: 'absolute',
    width: deviceWidth,
    bottom: 0,
    alignItems: 'center',
  },
  profileImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
    borderColor: 'white',
    borderWidth: 5,
  },
  textoCamposObligatorios: {
    marginTop: 5,
    width: deviceWidth,
    color: '#9D9D9E',
    fontSize: 15,
    textAlign: 'left',
  },
  textoCamposEditables: {
    marginTop: 5,
    width: deviceWidth,
    color: '#b3b3b3',
    fontSize: 15,
    textAlign: 'left',
  },
  textoBio: {
    width: deviceWidth - 80,
    color: '#9D9D9E',
    fontSize: 15,
    textAlign: 'left',
  },
  CheckBoxStyle: {
    width: 20,
    height: 20,
    backgroundColor: '#edd4ff',
    borderRadius: 20,
  },
  BotonAcciones: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: 140,
    height: 45,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#b3b3b3',
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'RosarioRegular',
    color: '#949494',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalV: {
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
  },
});

function CreateCateScreen({ route, navigation }: any) {
  // const { id } = route.params;

  const [name, onChangeName] = useState('New Category');
  const [description, onChangeDescription] = useState(
    'Todo lo que deseas y más',
  );
  const [price, onChangePrice] = useState(0);
  // const [nivel, onChangeNivel] = useState(1);
  const titulo = 'Registro Categoría Suscripción';
  const [selectectedItems, setSelectedItems] = React.useState([]);
  const [isShownPicker, setIsShownPicker] = React.useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [changeStatus, setChangeStatus] = useState(true);
  const [modalText, setModalText] = useState('');
  const [changeText, setChangeText] = useState('');
  const BloqueoTexto = () => {
    if (changeStatus) {
      setModalText('El usuario ha sido bloqueado con éxito');
      setChangeText('Volver');
    } else {
      setModalText('Error');
      setChangeText('Cerrar');
    }
  };
  const manejarCambio = () => {
    if (changeStatus) {
      setModalVisible(!modalVisible);
      navigation.navigate('Login');
    } else {
      setModalVisible(!modalVisible);
    }
  };
  const items = [{ label: 'Bloquear a este usuario para que:', value: '1' }];

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        hasBackdrop
        isVisible={modalVisible}
        onBackdropPress={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalV}>
          <Text
            style={{
              padding: 10,
              fontSize: 20,
              fontFamily: 'RosarioRegular',
              color: '#949494',
              textAlign: 'center',
            }}
          >
            {modalText}
          </Text>
          <Boton
            onPress={() => {
              manejarCambio();
            }}
            title={changeText}
            anchura={120}
            altura={45}
          />
        </View>
      </Modal>
      <ScrollView>
        <View style={styles.ViewTop}>
          <HeaderDiferente
            props={`${VALORES.user.first_name} ${VALORES.user.last_name}`}
          />
          <View style={styles.ProfileView}>
            <Image
              style={styles.profileImage}
              source={require('../assets/images/fotos/profile_picture.png')}
            />
          </View>
        </View>

        <View style={styles.ViewMiddle}>
          <ScrollView>
            <TouchableOpacity
              onPress={() => {
                setIsShownPicker(!isShownPicker);
              }}
            />
            {isShownPicker ? (
              <MultipleSelectPicker
                items={items}
                onSelectionsChange={(ele: any) => {
                  setSelectedItems(ele);
                }}
                selectedItems={selectectedItems}
                buttonStyle={{
                  height: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                buttonText="hello"
                checkboxStyle={styles.CheckBoxStyle}
                rowStyle={{ backgroundColor: 'transparent' }}
              />
            ) : null}

            {(selectectedItems || []).map((item: any, index) => {
              return (
                <Text style={{ color: '#b3b3b3' }} key={index}>
                  {item.label}
                </Text>
              );
            })}
          </ScrollView>
          <Text style={styles.textoBio}>{OBSERVACIONES.obs}</Text>
        </View>

        <View style={styles.ViewEnd}>
          <View style={styles.Botones}>
            <Boton
              onPress={async () => {
                setModalVisible(!modalVisible);
                BloqueoTexto();
              }}
              title="Continuar"
              anchura={140}
              altura={45}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('Profile')}
              style={styles.BotonAcciones}
            >
              <Text style={styles.title}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CreateCateScreen;
