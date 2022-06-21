import React, { useState } from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { useSelector } from 'react-redux';
import { consultarCreadores } from '../hooks/backendAPI';
import { Text, View } from '../components/Themed';
import Navigation from '../navigation';

const styles = StyleSheet.create({
  headercontainer: {
    height: 70,
    backgroundColor: '#F28E43',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    // height: Dimensions.get('window').height,
  },
  resultcontainer: {
    margin: 25,
    // height: Dimensions.get('window').height,
  },
  top: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icons: {
    marginHorizontal: 15,
    // width: '15%',
    resizeMode: 'contain',
    marginTop: 2,
  },
  input: {
    height: 40,
    width: '60%',
    // margin: 12,
    // borderWidth: 3,
    // padding: 10,
    // color: 'black',
    // borderColor: 'black'
  },
  resultHead: {
    flexDirection: 'row',
    alignItems: 'center',
    // height: ,
  },
  resultadoimg: {
    borderRadius: 50,
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginRight: 25,
  },
  SectionStyle: {
    flexDirection: 'row',
    width: wp('50%'),
    height: wp('6 %'),
    borderRadius: 25,
    backgroundColor: '#ededed',
    padding: 10,
  },
  ImageStyle: {
    padding: 10,
    marginRight: 10,
    marginLeft: 5,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
    alignSelf: 'center',
    opacity: 0.4,
  },
});

function SearchScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <Result navigation={navigation} />
    </View>
  );
}

function Header({ navigation }: any) {
  return (
    <View style={styles.headercontainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          style={styles.icons}
          source={require('../assets/images/iconos/atras.png')}
        />
      </TouchableOpacity>
      <View style={{ backgroundColor: '#F28E43', marginTop: 2 }}>
        <Text style={{ color: 'white', fontSize: 20, marginTop: 2 }}>
          Buscar Creador
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          style={styles.icons}
          source={require('../assets/images/iconos/filter.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

function Result({ navigation }: any) {
  const [RESULTS, setResults] = useState([]);
  const al = useSelector(state => {
    return state;
  });
  return (
    <View style={styles.resultcontainer}>
      <View style={styles.top}>     
          <View style={styles.SectionStyle}>
            <Image
              style={styles.ImageStyle}
              source={require('../assets/images/iconos/lupa.png')}
            />
            <TextInput
              style={{ flex: 1, fontSize: 15 }}
              placeholder="Busca un usuario..."
              placeholderTextColor="#9D9D9E"
              onFocus={() => {
                navigation.navigate('Search');
              }}
              onChangeText={() => { }}
            />
        </View>
        <Text style={{ color: '#966BEE', fontSize: 15, marginLeft: 15 }}>Cancelar</Text>
      </View>
      <Presentacion navigation={navigation} res={RESULTS} />
    </View>
  );
}

function Presentacion({ navigation, res }: any) {
  return (
    <ScrollView style={{ marginHorizontal: 25 }}>
      {res.map((result: any, index: any) => (
        <TouchableOpacity
          key={result.id}
          onPress={() => {
            navigation.navigate('Profile', { id: result.id });
          }}
        >
          <Perfil result={result} key={index} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
function Perfil({ result }: any) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
        style={styles.resultadoimg}
        source={{
          uri: `http://1c0a-190-63-213-187.ngrok.io${result.profile_pic}`,
        }}
      />
      <Text>
        {result.first_name} {result.last_name}
      </Text>
    </View>
  );
}

export default SearchScreen;
