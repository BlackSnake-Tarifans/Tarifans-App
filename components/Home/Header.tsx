import React, { useState }  from "react";
import { Text, View } from '../../components/Themed';
import { SafeAreaView , StyleSheet , Image , TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';


/*<Image
                style={styles.rectangulo}
                source={require('../../assets/images/assetsTarifans/RectangleHeader.png')}
                />*/
const Header = ({navigation} : any) => {
    return(
        <View>
            
            <View style={styles.container}>
                <TouchableOpacity>
                    <Image 
                    style={styles.logo}
                    source={require('../../assets/images/assetsTarifans/tarifansICONO.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Search')}>
                    <Image 
                    style={styles.barra}
                    source={require('../../assets/images/assetsTarifans/SearchBar.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        marginTop: 20,
    },
    logo:{
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    barra:{
        width: Dimensions.get('window').width*2/3,
        height: 50,
        resizeMode: 'contain',
        marginRight: 30,
    },
    rectangulo:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: 'absolute',
        top: 0-(Dimensions.get('window').height/2.5),
        resizeMode: 'contain',
    },

})
