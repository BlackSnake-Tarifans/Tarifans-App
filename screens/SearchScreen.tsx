import React, { useState } from 'react';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
} from 'react-native';

import { useSelector } from 'react-redux';
import { consultarCreadores } from '../hooks/backendAPI';
import { Text, View } from '../components/Themed';
import Navigation from '../navigation';

const styles = StyleSheet.create({
  headercontainer: {
    height:Dimensions.get('window').height*0.15,
    backgroundColor: '#F28E43',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  resultcontainer: {
    margin: 25,
  },
  top: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icons: {
    resizeMode: 'contain',
    width: "10%",
    marginTop: "10%",
    marginRight: "5%",
  },
  logo:{
    marginLeft: "5%",
    width: '20%',
    resizeMode: 'contain',
    marginTop: "10%",
  },
  logo_image:{
    width: "100%",
    resizeMode: 'contain',
  },
  SectionStyle: {
    flexDirection: 'row',
    width: '50%',
    borderRadius: 20,
    backgroundColor: '#ededed',
    alignItems: 'center',
    padding: 10,
    marginTop: "10%",
  },
  input: {
    height: 40,
    width: '60%',
  },
  resultHead: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resultadoimg: {
    borderRadius: 50,
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginRight: 25,
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
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

function SearchScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" />
      <View style={{ flex: 1 }}>
        <Header navigation={navigation} />
        <Result navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

function Header({ navigation }: any) {
  return (
    <View style={styles.headercontainer}>
      <TouchableOpacity  style={styles.logo} onPress={() => navigation.navigate('Home')}>
        <Image
          style={styles.logo_image}
          source={require('../assets/images/assetsTarifans/tarifans_palabra_color_blanco.png')}
        />
      </TouchableOpacity>
      <View style={styles.SectionStyle}>
            <Image
              style={styles.ImageStyle}
              source={require('../assets/images/iconos/lupa.png')}
            />
            <TextInput
              style={{ flex: 1, fontSize: 17 }}
              placeholder="Busca un usuario..."
              placeholderTextColor="#9D9D9E"
              onFocus={() => {
                //navigation.navigate();
              }}
              onChangeText={() => { }}
            />
        </View>
      <TouchableOpacity style={styles.icons} onPress={() => navigation.navigate('Home')}>
        <Image
          //style={styles.icons}
          source={require('../assets/images/iconos/carbon_settings.png')}
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
