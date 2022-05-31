import React, { useState }  from "react";
import { Text, View } from './../components/Themed';
import {  StyleSheet , Image , TouchableOpacity, ScrollView} from 'react-native';
import { Dimensions } from 'react-native';
import { TextInput } from "react-native";
import {consultarCreadores} from '../hooks/backendAPI';
import {useSelector} from 'react-redux';
import Navigation from "../navigation";

const SearchScreen = ({navigation}: any) => {
    return(
        <View style={{flex: 1,}}>
            <Header navigation={navigation}/>
            <Result navigation={navigation}/>
            
        </View>
    );
};





const Header = ({navigation}: any) =>(
    <View style={styles.headercontainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} >
            <Image style={styles.icons} source={require('../assets/images/iconos/atras.png')} />
        </TouchableOpacity>
        <View style={{backgroundColor: "#F28E43", marginTop: 2,}}>
            <Text style={{color: 'white', fontSize: 20,marginTop: 2,}}>Buscar Creador</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} >
            <Image style={styles.icons} source={require('../assets/images/iconos/filter.png')}/>
        </TouchableOpacity>
    </View>
)

const Result = ({navigation}: any) => {
    var [RESULTS, setResults]=useState([])
    const al = useSelector((state) => {return state})
    return(
    <View style={styles.resultcontainer}>
        <View style={styles.top}>
            <View style={{flexDirection: 'row', alignItems: "center"}}>
                <Image 
                    style={{position:"absolute", width: '90%' ,  resizeMode: 'stretch'}} 
                    source={require('../assets/images/iconos/RectangleSearch.png')}/>
                <Image style={{marginLeft: 15, marginRight: 10}}
                    source={require('../assets/images/iconos/lupa.png')}/>
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese el nombre del creador..."
                    placeholderTextColor={'gray'}
                    onChangeText={text => {consultarCreadores(text, al as string).
                        then((res) => {
                        return res.data
                        })
                        .then( (data) => {
                            setResults(data);
                            //refresh();
                        }).catch((error) => console.log(error))}}
                />
            </View>
            <Text style={{color: '#966BEE', fontSize: 15,}}>Cancelar</Text>
        </View>
        <Presentacion navigation={navigation} res={RESULTS}/>
    </View>
)}

const Presentacion=({navigation, res}: any)=>(
        <ScrollView style={{marginHorizontal: 25,}}>
                {res.map((result: any,index: any)=> (
                <TouchableOpacity key={result.id} onPress={() => {navigation.navigate('Profile', {id:result.id})}} >
                    <Perfil result={result} key={index}/> 
                </TouchableOpacity>
                ))}
        </ScrollView>
)
const Perfil=({result}: any)=>(
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image style={styles.resultadoimg} source={{uri: "http://1c0a-190-63-213-187.ngrok.io"+result.profile_pic}}/>
        <Text>{result.first_name} {result.last_name}</Text>
    </View>
)

const styles = StyleSheet.create({
    headercontainer:{
        height: 70,
        backgroundColor: "#F28E43",
        flexDirection: "row",
        alignItems:  "center",
        justifyContent: "space-between",
        
        //height: Dimensions.get('window').height,
        
    },
    resultcontainer:{
        margin: 25,
        //height: Dimensions.get('window').height,
    },
    top:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    icons:{
        marginHorizontal: 15,
        //width: '15%',
        resizeMode: 'contain',
        marginTop: 2,

    },input: {
        height: 40,
        width: '60%',
        //margin: 12,
        //borderWidth: 3,
        //padding: 10,
        //color: 'black',
        //borderColor: 'black'
      },
    resultHead:{
        flexDirection: "row",
        alignItems:  "center",
       // height: ,

    },
    resultadoimg:{
        borderRadius: 50,
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginRight: 25,

    }
})



export default SearchScreen;