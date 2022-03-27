import React from 'react'
import { View, Text, StyleSheet, Dimensions } from "react-native"
import { ImgCard } from './ImgCard'

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({ item, index }: any) => {
  return (
    <View style={styles.container} key={index}>
      <ImgCard source={item.source}/>
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: ITEM_WIDTH,
    paddingBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 4,
    marginTop:10
  },
  header: {
    color: "#F28E43",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default CarouselCardItem