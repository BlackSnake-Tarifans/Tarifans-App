import React from 'react';
import { StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

export function ImgCard({ source }: any) {
  const [mode, onChangeMode] = React.useState(false);
  return (
    <TouchableOpacity activeOpacity={1} onPress={() => onChangeMode(!mode)}>
      <Image
        source={{ uri: source }}
        style={{
          maxWidth: '100%',
          resizeMode: mode ? 'contain' : 'cover',
          width: '100%',
          height: ITEM_WIDTH > 500 ? ITEM_WIDTH / 1.75 : ITEM_WIDTH * 1.3,
          alignSelf: 'center',
        }}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: ITEM_WIDTH,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 4,
    marginTop: 10,
  },
  header: {
    color: '#F28E43',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  body: {
    color: '#222',
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
