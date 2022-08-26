import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
import { PostCaption } from '../components/Home/Post';
import { View } from '../components/Themed';
import { loadComments, Comments } from '../hooks/postsAPI';
import BackHeader from '../components/Elementos/BackHeader';

const stylesComment = StyleSheet.create({
  SectionStyle: {
    // : 30,
    width: Dimensions.get('window').width * 0.9,
    marginHorizontal: 20,
    // maxWidth: 800,
    marginTop: 10,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    // padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  commentBlock: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  comment: {
    marginBottom: 10,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  vistascreen: {
    marginBottom: 30,
    marginHorizontal: 30,
    height: '90%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  writeComment: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#F28E43',
    height: 30,
    width: '90%',
    marginBottom: 20,
    borderRadius: 20,
    marginTop: 5,
  },
});

function CommentItem(comment: any) {
  return (
    <Text style={{ marginBottom: 5 }}>
      <Text style={{ fontWeight: 'bold' }}>{comment.comment.username} </Text>
      <Text style={{}}>
        {comment.comment.comment} {}
      </Text>
    </Text>
  );
}

function WriteComment({ update, onSubmitComment, id }: any) {
  const [comentario, onChangeComment] = React.useState('');
  return (
    <View style={stylesComment.SectionStyle}>
      <TextInput
        style={stylesComment.writeComment}
        value={comentario}
        placeholder=" Comentario "
        placeholderTextColor="#9D9D9E"
        onChangeText={text => onChangeComment(text)}
        onSubmitEditing={() => {
          Comments(id, {
            comment: comentario,
          });
          onChangeComment('');
          onSubmitComment(update + 1);
        }}
      />
    </View>
  );
}

function CommentScreen({ route, navigation }: any) {
  const [COMMENTS, setCOMMENTS]: any = useState([]);
  const [update, onSubmitComment] = React.useState(0);
  useEffect(() => {
    loadComments(post.id).then((data: any) => {
      console.log(data);
      setCOMMENTS(data.data);
    });
  }, [update]);
  const { post } = route.params;

  return (
    <SafeAreaView style={stylesComment.container}>
      <BackHeader />
      <View style={stylesComment.vistascreen}>
        <ScrollView>
          <View style={{ marginBottom: 9, marginTop: 9 }}>
            <PostCaption post={post} />
          </View>
          {COMMENTS.map((comment: any) => (
            <CommentItem comment={comment} />
          ))}
        </ScrollView>
        <WriteComment
          update={update}
          onSubmitComment={onSubmitComment}
          id={post.id}
          style={{}}
        />
      </View>
    </SafeAreaView>
  );
}

export default CommentScreen;
