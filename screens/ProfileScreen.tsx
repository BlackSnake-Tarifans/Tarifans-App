import React, { useState }  from "react";
import { Text, View } from './../components/Themed';
import { SafeAreaView , StyleSheet , Image , TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';
import Header from "../components/Home/Header";
import {consultainformacioncreador} from '../hooks/backendAPI';
import Button from "../components/Button";

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
    profile_pic: "/media/profile_pics/WhatsApp_Image_2022-01-16_at_09.05.22.jpeg",
    bio: null,
    num_subscribers: 0,
    num_subscribed: 0
} ;

const ProfileScreen = ({route ,navigation}: any) => {
    

    const { id } = route.params;
    
    //VALORES =  consultainformacioncreador(id).then((res) => {console.log(res.data); return res.data});
    return(
        <View>
            <Text>{}</Text>
            <Header navigation={navigation}/>
            <Cuerpo />
        </View>
    );
};

const Cuerpo = () => {
    var [color, setColor]=useState('#966bee')
    var [title, setTitle]=useState('Suscribirse')
    return(
    <View>
        <View style={{borderColor:'black', borderRadius:3, alignContent:'center'}}>
            <Image style={{width:'100%',height: '70%',resizeMode: 'contain',}} source={{uri: "https://25ae-190-63-212-143.ngrok.io" + VALORES.profile_pic}}/>
        </View>
        <View style={{flexDirection: "row", justifyContent: "space-between" , marginHorizontal:10,alignItems:'center'}}>
            <Text>{VALORES.user.first_name} {VALORES.user.last_name}</Text>
            <Button title={title} style_button={{alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,backgroundColor: color}} onPress={() => {setColor("grey"); setTitle("Suscrito")}}/>
        </View>
        <View>

        </View>
    </View>)
}

export default ProfileScreen;

const styles = StyleSheet.create({
    

})
