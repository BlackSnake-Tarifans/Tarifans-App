import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Image, Dimensions, Platform, TouchableOpacity, Button } from 'react-native';
import { Text, View } from '../components/Themed';
import { register } from '../hooks/backendAPI';
const dimensions = Dimensions.get('window');

let props = {
    labelButtom: "/js.com",
    altura: 0
}

export default function Boton(props: { onPress: any; title:string; anchura:number; altura:number}) {
    const { onPress, title, anchura, altura} = props;
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 32,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.50,
                shadowRadius: 2.22,
                backgroundColor: '#ad8feb',
                width:anchura,
                height:altura
            }}>
                <Text style={styles.title}> {title} </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        position: 'relative',
    },
    title: {
        fontSize: 20,
        fontFamily: 'RosarioRegular',
        color: 'white',
        fontWeight: 'bold',
    }
})