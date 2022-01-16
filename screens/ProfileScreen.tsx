import React, { useState }  from "react";
import { Text, View } from './../components/Themed';
import { SafeAreaView , StyleSheet , Image , TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';
import Header from "../components/Home/Header";
import {consultainformacioncreador} from '../hooks/backendAPI';

var VALORES ;

const ProfileScreen = ({route ,navigation}) => {
    const { id } = route.params;
    consultainformacioncreador(id).then((res) => {console.log(res.data); return res.data}).then( (data) => {VALORES=data});
    console.log("before");
    return(
        <View>
            <Text>{VALORES.id}</Text>
            <Header navigation={navigation}/>
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    

})
