import React from 'react';
import { View, StyleSheet } from 'react-native';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem';

function CarouselCards({ data }: any) {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <View style={styles.container}>
      <View style={styles.ViewPagination} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  ViewPagination: {
    backgroundColor: 'transparent',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
    position: 'relative',
    top: 0,
  },
});

export default CarouselCards;
