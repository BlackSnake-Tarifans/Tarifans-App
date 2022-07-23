import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import HeaderDiferente from '../components/Elementos/HeaderDiferente';

const deviceWidth = Dimensions.get('window').width;

const SUSCRIPCIONES = [
  {
    id: 1,
    user: 'Pepe',
    nombre: 'Básica',
    desc: 'Mira fotos y videos antes que todos',
    precio: '$7.5\n/mes',
    nivel: 1,
    icono: require('../assets/images/iconos/light.png'),
  },
  {
    id: 2,
    user: 'Pepe',
    nombre: 'Premium',
    desc: 'Fotos de arte exclusivas',
    precio: '$15\n/mes',
    nivel: 2,
    icono: require('../assets/images/iconos/star_icon.png'),
  },
  {
    id: 3,
    user: 'Pepe',
    nombre: 'Master+',
    desc: 'Más fotos y videos de arte a tu alcance.',
    precio: '$25\n/mes',
    nivel: 3,
    icono: require('../assets/images/iconos/crown.png'),
  },
];

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
  instructions2: {
    fontSize: 20,
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
  ScrollContainter: {
    flexGrow: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    borderRadius: 20,
  },
  suscData: {
    // flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    // alignContent: "flex-start",
    // flexDirection: "column",
    borderRadius: 20,
    margin: 20,
    backgroundColor: 'white',
    width: deviceWidth / 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.22,
    elevation: 2,
  },
  ViewSuscripciones: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: 'transparent',
    width: deviceWidth,
    // position: 'relative',
    padding: 20,
    height: 220,
  },
  ViewSuscripcionesDerecha: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'transparent',
    // marginRight: 20,
  },
  TextoSuscripcionTitle: {
    fontSize: 25,
    color: '#949494',
    fontWeight: 'bold',
  },
  TextoSuscripcionPrecio: {
    fontSize: 25,
    color: '#949494',
    fontWeight: 'bold',
    width: deviceWidth * 0.3,
    textAlign: 'center',
    // position: 'absolute',
    // bottom: 20,
  },
  TextoSuscripcion: {
    fontSize: 15,
    color: '#949494',
    width: deviceWidth * 0.4,
  },
  backStyleImage: {
    height: 100,
    width: 100,
    // resizeMode: 'cover',
    // top: 20,
  },
});
function MySubsPlansScreen({ route, navigation, navigation: { goBack } }: any) {
  const [plans, setPlans] = React.useState(SUSCRIPCIONES);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.ScrollContainter}>
        <View style={styles.ViewTop}>
          <HeaderDiferente props="Planes de Subscripción" />
        </View>

        <View style={styles.ViewMiddle}>
          <Text style={styles.instructions}>Mis Planes de Suscripcion</Text>
        </View>

        <View style={styles.ViewMiddle}>
          {plans.length == 0 ? (
            <Text style={styles.instructions2}>
              Parece que no has creado un plan de subscripción. ¡Te invitamos a
              crear uno nuevo!
            </Text>
          ) : (
            <View>
              <View style={{ justifyContent: 'space-between' }}>
                {plans.map((suscripcion: any, index: any) => (
                  <View key={index} style={styles.suscData}>
                    <Text style={styles.TextoSuscripcionTitle}>
                      {suscripcion.user} {suscripcion.nombre}
                    </Text>

                    <Text style={styles.TextoSuscripcion}>
                      {suscripcion.desc}
                    </Text>
                    <Text style={styles.TextoSuscripcion}>
                      Nivel: {suscripcion.nivel}
                    </Text>

                    <View style={styles.ViewSuscripcionesDerecha}>
                      <Image
                        style={styles.backStyleImage}
                        source={suscripcion.icono}
                      />

                      <Text style={styles.TextoSuscripcionPrecio}>
                        {suscripcion.precio}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>

        <View style={styles.ViewEnd}>
          <View style={styles.ViewCancelar}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Category');
              }}
              style={styles.BotonStyle}
            >
              <Text style={styles.title}>Crear nuevo plan de subscripción</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default MySubsPlansScreen;
