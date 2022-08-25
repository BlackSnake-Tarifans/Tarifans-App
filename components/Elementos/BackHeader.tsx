
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import BackButton from "./BackButtom";

const style =  StyleSheet.create({
    container:{
        backgroundColor: "#F28E43", 
        justifyContent: "center", 
        padding: 8,
        height: "7%"
    }
})

function BackHeader(){

    const navigation = useNavigation();

    return (
        <View style={style.container}>
            <BackButton onPress={() => navigation.goBack()} />
        </View>
    );
}

export default BackHeader;