import React from 'react'
import { View, StyleSheet } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import { Button } from 'react-native'


const CarouselCards = ({data}: any) => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)


  return (
    <View style={styles.container}>
        <Carousel
        layout={"tinder"}
        layoutCardOffset={18}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
        <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        tappableDots={true}
        carouselRef={isCarousel}
        dotStyle={styles.dotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        
      />
      
      
    </View>

  )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 15,
    },
    dotStyle:{
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.92)'
    }
})



export default CarouselCards;