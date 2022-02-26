import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#f28e43',
        height: wp('30 %'),
        position: 'relative',
        top: 0
    },
    logo: {
        width: hp('12%'),
        height: wp('10 %'),
        resizeMode: 'contain',
        top: 15,
        left: 15,
    },
    SectionStyle: {
        flexDirection: 'row',
        width: hp('24%'),
        height: wp('10 %'),
        marginTop: 0,
        borderRadius: 25,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 10,
        right: 0,
        top: 15,
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
        opacity: 0.4
    },
    imagenSettigns: {
        width: hp('5%'),
        height: wp('8 %'),
        resizeMode: 'contain',
        top: 15,
        right: 14,
    }
});