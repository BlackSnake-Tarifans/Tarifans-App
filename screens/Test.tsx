import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
//import { DocumentPicker, ImagePicker } from 'expo';
import * as DocumentPicker from 'expo-document-picker';
import Boton from '../components/Elementos/Boton';
import { postMedia, postText } from '../hooks/backendAPI';

/*const [selectedImage, setSelectedImage] = React.useState<any>({
  localUri: '',
});*/

export default class App extends React.Component {
    state = {
      image: null,
    };
    
  _pickDocument = async () => {
      let result = await DocumentPicker.getDocumentAsync({});
	}

   _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    alert(result.uri);
    console.log(result)

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  render() {
    const [selectedImage, setSelectedImage] = React.useState<any>({
      localUri: '',
    });
         let { image } = this.state;
    return (
      <View style={this.styles.container}>
        <Button
          title="Select Document"
          onPress={this._pickDocument}
        />

      <View style={{ 'marginTop': 20}}>
        <Button
          title="Select Image"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
      <View>
      <Button
                onPress={async() => {
                  
                  try {
                    /*const response = await postText({
                        subscription_plan: 1,
                        title: "prueba",
                        description: "description2",
                    })*/
                    
                      //console.log(localUri);
                    /*if (response.status == 201) { // 201 == HTTP_CREATED
                      console.log(selectedImage.localUri);
                      let data = response.data
                      console.log(data); 
                      
                      let localUri = selectedImage.localUri;
                      let filename = localUri.split('/').pop();

                      // Infer the type of the imag

                      console.log(filename);
                     

                      // Upload the image using the fetch and FormData APIs
                      let formData = new FormData();
                      // Assume "photo" is the name of the form field the server expects
                     
        
       
                      formData.append('file', {uri: localUri , name:`test.${localUri.split(".")[1]}`, type:`test/${localUri.split(".")[1]}`});
                      formData.append('type', '1')
                      formData.append("post", "3")
                      console.log(formData);
                      //const response2 = await postMedia(formData)
                    }*/
    
                  }catch (error) {
                    
                  }


                 
                }}
                title="Crear Publicación"
              />
      </View>
      </View>
    );
  }

  styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
}