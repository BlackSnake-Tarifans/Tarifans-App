import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#f28e43',
    height: wp('15 %'),
    position: 'relative',
    top: 0,
    maxHeight: '150px',
  },
  logo: {
    width: wp('18%'),
    height: wp('8 %'),
    resizeMode: 'contain',
    top: 15,
    left: 25,
    maxHeight: '50px',
    maxWidth: '120px',
  },
  SectionStyle: {
    flexDirection: 'row',
    width: wp('50%'),
    height: wp('6 %'),
    marginTop: 0,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    right: 0,
    top: 15,
    maxHeight: '50px',
  },
  ImageStyle: {
    padding: 10,
    marginRight: 10,
    marginLeft: 5,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
    alignSelf: 'center',
    opacity: 0.4,
  },
  imagenSettigns: {
    width: wp('6%'),
    height: wp('6 %'),
    resizeMode: 'contain',
    top: 15,
    right: 25,
    maxHeight: '25px',
  },
});
