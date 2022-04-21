import React from "react";
import { Text, View, Image, Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";
const dimensions = Dimensions.get('window');
const deviceWidth = dimensions.width;

const ImgSwiper = ({ images }: any) => {

    return (
        <View style={{
            borderColor: "purple",
            borderWidth: 1,
            borderRadius: 10, 
            marginTop: 10, 
            height: deviceWidth>500?deviceWidth/2.25:deviceWidth, 
            width: deviceWidth>500?deviceWidth/2:deviceWidth * 0.9,
        }}>
            <Swiper
                from={0}
                loop
                timeout={5.5}
                controlsProps={{
                    dotsTouchable: true,
                    dotActiveStyle: { backgroundColor: '#f28e43' },
                    nextTitleStyle: { color: '#f28e43', },
                    prevTitleStyle: { color: '#f28e43', }
                }}
            >
                {images.map((img: any, index: any) => (
                    <View key={index} style={{ flex: 1, alignItems: "center", justifyContent: "center", }}>
                        <Image style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: "contain"
                        }} source={{ uri: img }} />
                    </View>
                ))}
            </Swiper>
        </View>

    )
}


export default ImgSwiper;