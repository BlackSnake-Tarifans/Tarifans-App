import React, { useReducer } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TextInput } from "react-native";
import { PostCaption } from "../components/Home/Post";
import { View } from "../components/Themed";
import { loadComments, commentPost } from "../hooks/postsAPI";

const[reducerValue, forceUpdate] = useReducer(x=>x+1,0)

const styles = StyleSheet.create({
    SectionStyle: {
        flexDirection: 'row',
        height: 50,
        width: Dimensions.get('window').width * 0.8,
        maxWidth: 800,
        marginTop: 10,
        borderRadius: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 10,
      },
    commentBlock:{
      marginTop: 10,
      marginHorizontal: 10,
      },
    comment:{
      marginBottom: 10
    },


});

async function Comments(post : any){
    const result = await loadComments(post.id)
    const comments = JSON.parse(result.data)

    return ( comments.map((item : any) => (
      <View>
        <Text><b>{item.username}</b> {"  "} {item.comment}</Text>
      </View>
    )))
}



function WriteComment(post : any){
  const [user, onChangeComment] = React.useState('');
    return(
        <View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={{ flex: 1 }}
                placeholder="Nombre de usuario"
                placeholderTextColor="#9D9D9E"
                onChangeText={text => onChangeComment(text)}
                onSubmitEditing={text => {
                    //commentPost(post.id)
                  }
                }
              />
            </View>
        </View>
    )
}

function CommentScreen({ navigation, post }: any) {
    return (
      <View style={{ marginBottom: 30, marginHorizontal: 30 }}>
         <ScrollView >
          <PostCaption post={post}/>
        </ScrollView>
        <View style={{ alignSelf: 'flex-end'}}>
          <WriteComment post={post}/>
        </View>
      </View>
    );
  }

export default CommentScreen;