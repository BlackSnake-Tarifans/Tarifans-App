import React from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-web-swiper';

const dimensions = Dimensions.get('window');
const deviceWidth = dimensions.width;
const SLIDER_WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
function ImgSwiper({ images }: any) {
  return (
    <View
      style={{
        backgroundColor: "white",
        borderColor: 'purple',
        borderWidth: 1,
        height: deviceWidth > 500 ? deviceWidth / 2.25 : deviceWidth*1.25,
        width: deviceWidth > 500 ? deviceWidth / 2 : deviceWidth * 0.9,
      }}
    >
      <Swiper
        from={0}
        loop
        timeout={0}
        controlsProps={{
          dotsTouchable: true,
          dotActiveStyle: { backgroundColor: '#f28e43' },
          nextTitleStyle: { color: '#f28e43' },
          prevTitleStyle: { color: '#f28e43' },
        }}
      >
        {images.map((img: any, index: any) => (
          <View
            key={index}
            style={{  
              
      
          }}
          >
            <Image
              style={{
                maxWidth: '100%',
                resizeMode: "contain",
                width: '100%',
                height: deviceWidth > 500 ? deviceWidth / 2.25 : deviceWidth*1.25,
                alignSelf: 'center',
              }}
              source={{ uri: img }}
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
}

export default ImgSwiper;
