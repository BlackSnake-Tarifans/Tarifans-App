import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import HeaderDiferente from '../components/Elementos/HeaderDiferente';

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
    fontSize: 30,
    fontFamily: 'RosarioRegular',
    color: '#949494',
    textAlign: 'center',
    width: deviceWidth * 0.7,
    backgroundColor: 'transparent',
    lineHeight: 32,
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
    paddingBottom: 20,
  },
  ViewMiddlePhoto: {
    position: 'relative',
    width: deviceWidth,
    alignItems: 'center',
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
  BotonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ad8feb',
    width: 240,
    height: 55,
    borderRadius: 35,
    margin: 7,
    // borderColor: '#b3b3b3',
  },
  title: {
    fontSize: 20,
    fontFamily: 'RosarioRegular',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
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
function OptionsScreen({ route, navigation, navigation: { goBack } }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ViewTop}>
        <HeaderDiferente props="Opciones" />
      </View>

      <View style={styles.ViewMiddle}>
        <Text style={styles.instructions}>Opciones de Usuario</Text>
      </View>

      <View style={styles.ViewEnd}>
        <View style={styles.ViewCancelar}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Saved');
            }}
            style={styles.BotonStyle}
          >
            <Text style={styles.title}>Favoritos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('MySubsPlans')}
            style={styles.BotonStyle}
          >
            <Text style={styles.title}>Mis Planes de Suscripción</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfile')}
            style={styles.BotonStyle}
          >
            <Text style={styles.title}>Editar Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Settings')}
            style={styles.BotonStyle}
          >
            <Text style={styles.title}>Configuración y Cuenta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              goBack();
            }}
            style={styles.BotonStyle}
          >
            <Text style={styles.title}>Volver</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default OptionsScreen;
