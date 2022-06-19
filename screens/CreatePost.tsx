import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import HeaderDiferente from '../components/Elementos/HeaderDiferente';
import Boton from '../components/Elementos/Boton';
import Multiselector from '../components/Elementos/MultiSelector';
import { MultipleSelectPicker } from 'react-native-multi-select-picker';

const deviceWidth = Dimensions.get('window').width;

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
    top: -30,
    width: deviceWidth,
    alignItems: 'center',
  },
  ViewEnd: {
    position: 'relative',
    alignItems: 'center',
    width: deviceWidth,
    //height: 100,
    marginBottom: 20,
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
  SectionStyleAdjunto: {
    flexDirection: 'column',
    height: 100,
    width: Dimensions.get('window').width * 0.8,
    margin: 10,
    borderRadius: 15,
    backgroundColor: 'rgba(52, 52, 52, 0.04)',
    alignContent: 'flex-start',
  },
  TextfileTitle: {
    fontWeight: 'bold',
    color: '#f28e43',
  },
  TextfileTitleAdjunto: {
    fontWeight: 'bold',
    color: '#f28e43',
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  BotonSubirImagen: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.22,
    backgroundColor: '#ad8feb',
    width: 150,
    height: 45,
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25,
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
});

function CreateCateScreen({ route, navigation }: any) {
  // const { id } = route.params;

  const [name, onChangeName] = useState('Title');
  const [description, onChangeDesc] = useState('Todo lo que deseas y más');
  const titulo = 'Crear Nueva Publicación';

  /*Arreglo de Items para el multiselector, usar useState para traer el plan de suscripción */
  const items = [
    { label: 'Básica', value: '1' },
    { label: 'Premium', value: '2' },
    { label: 'Platinum', value: '3' },
  ];

  let [selectectedItems, setSelectedItems] = React.useState([]);
  let [isShownPicker, setIsShownPicker] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.ViewTop}>
          <HeaderDiferente props={titulo} />
        </View>

        <View style={styles.ViewMiddle}>
          <View style={styles.SectionStyle}>
            <Text style={styles.TextfileTitle2}>Título</Text>
            <TextInput
              placeholder="Ingrese el título..."
              placeholderTextColor="#b3b3b3"
              onChangeText={text => onChangeName(text)}
            />
          </View>
          <View style={styles.SectionStyleDescripcion}>
            <Text style={styles.TextfileTitle2}>Descripcion</Text>
            <TextInput
              placeholder="Ingrese una descripcion..."
              placeholderTextColor="#b3b3b3"
              onChangeText={text => onChangeDesc(text)}
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
          <Text style={styles.TextfileTitle2}>Categorías</Text>
        </TouchableOpacity>
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
            labelStyle={styles.TextfileCate}
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
          </View>
        </View>

        <View style={styles.ViewEnd}>
          <Boton
            onPress={()=> 
              {navigation.navigate('UploadImg', 
              { name: name, 
                description: description,
                selected: selectectedItems,
              }
            )}
            }
            title="Adjuntar archivo a la publicación"
            anchura={220}
            altura={65}
          />
          {
                /*
                Aqui en este botón se mandaría a crear la publicación.

                
              */}
          <View style={{margin: 10}}/>
          <Boton
            onPress={() => navigation.navigate('Profile')}
            title="Crear Publicación"
            anchura={220}
            altura={65}
          />
          <View style={{margin: 10}}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CreateCateScreen;
