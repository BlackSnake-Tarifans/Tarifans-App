import { Dimensions, StyleSheet } from 'react-native';

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;
export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    position: 'relative',
    width: imageWidth,
  },
  backStyleImage: {
    position: 'relative',
    height: 40,
    width: 40,
    resizeMode: 'stretch',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 60,
    left: 40,
    bottom: 7,
  },
  title: {
    position: 'relative',
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'RosarioRegular',
    color: 'white',
    width: imageWidth - 40,
    textAlign: 'left',
    left: 40,
  },
  ViewBackButton: {
    left: 40,
    backgroundColor: 'transparent',
    marginTop: 60,
    marginBottom: 10,
  },
});
