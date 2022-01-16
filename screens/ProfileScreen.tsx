import React, { useState }  from "react";
import { Text, View } from './../components/Themed';
import { SafeAreaView , StyleSheet , Image , TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';
import Header from "../components/Home/Header";
import {consultainformacioncreador} from '../hooks/backendAPI';
import Button from "../components/Button";



const ProfileScreen = ({route ,navigation}) => {
    
var VALORES={
    id: 1,
    user: {
        id: 1,
        username: "cajifan",
        email: "cjimenezf17@gmail.com",
        first_name: "Carlos",
        last_name: "Jiménez Farfán",
        is_superuser: false
    },
    birth_date: "2000-01-17",
    profile_pic: "/media/profile_pics/default.png",
    bio: null,
    num_subscribers: 0,
    num_subscribed: 0
} ;
    const { id } = route.params;
    //VALORES =  consultainformacioncreador(id).then((res) => {console.log(res.data); return res.data});
    return(
        <View>
            <Text>{}</Text>
            <Header navigation={navigation}/>
            <Cuerpo vals={VALORES}/>
        </View>
    );
};

const Cuerpo = ({vals}) => (
    <View>
        <Text>{vals.user.first_name} {vals.user.last_name}</Text>
    </View>
)

export default ProfileScreen;

const styles = StyleSheet.create({
    

})
