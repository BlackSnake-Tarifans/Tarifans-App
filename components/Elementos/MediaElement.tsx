import { ImgCard } from "./ImgCard";
import { Video } from 'expo-av';
import { View } from "react-native";
import { StyleSheet } from "react-native";
import React from "react";
import { ITEM_WIDTH } from "./ImgCard";

const MediaElement = ({source}: any) =>{
    const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

    let extension = source.toString().split(".")[3]
    if(extension =="mp4"){
        return(
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: source,
                }}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
      )
    }else{
        return(
        <ImgCard source={source}/>
        )
    }
   
}

const styles = StyleSheet.create({
    container2: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    video: {
      alignSelf: 'center',
      width: ITEM_WIDTH,
      height: 350,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
  
  });
export default MediaElement;