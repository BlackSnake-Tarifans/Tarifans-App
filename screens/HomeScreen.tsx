import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import Header from '../components/Elementos/Header';
import Post from '../components/Home/Post';
import { getFeed } from '../hooks/backendAPI';

/*const POSTS = [
  {
    id: 1,
    imageUrl: require('../assets/images/fotos/fotoejemplo.png'),
    user: 'dylan',
    likes: 999,
    liked: true,
    caption: 'me mete y me saca de su closefriends',
    profile_picture: 'url',
    fecha: '12/12/12',
    comments: [
      {
        user: 'oalsla',
        comment: 'oaoa',
      },
    ],
  },
  {
    id: 2,
    imageUrl: require('../assets/images/fotos/fotoejemplo.png'),
    user: 'david',
    likes: 999,
    liked: false,
    caption: 'me mete y me saca de su closefriends',
    profile_picture: 'url',
    fecha: '12/12/12',
    comments: [
      {
        user: 'oalsla',
        comment: 'oaoa',
      },
    ],
  },
];*/
/*const POSTS = [
  {
      id: 1,
      multimedia: [
          {
              id: 1,
              type: 1,
              height: null,
              width: null,
              duration: null,
              file: "https://bb40-190-63-214-62.ngrok.io/media/posts/sakurai_14.jpg",
              post: 1
          },
          {
              id: 2,
              type: 1,
              height: null,
              width: null,
              duration: null,
              file: "https://bb40-190-63-214-62.ngrok.io/media/posts/natsu-lucy-happy-navidad.jpg",
              post: 1
          }
      ],
      created_at: "2022-01-15T22:18:58.912956-05:00",
      is_active: true,
      description: "Happy Holidays",
      title: "Nothing better than X-mas",
      tags: "",
      score: 0,
      total_likes: 0,
      total_comments: 0,
      subscription_plan: 1
  } ,{
      id: 9,
      multimedia: [],
      created_at: "2022-06-28T18:54:53.110279-05:00",
      is_active: true,
      description: "Z",
      title: "A",
      tags: "",
      score: 0,
      total_likes: 0,
      total_comments: 0,
      subscription_plan: 1
  },];*/
// const POSTS={POST.map((post,index)=> (<Post post={post} key={index}/> ))}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

function HomeScreen({ navigation }: any) {
  const [POSTS, setPOSTS] : any = useState([]);

  useEffect(() => {
    // Runs ONCE after initial rendering
    getFeed().then(
      (data : any) =>{
        console.log(data)
        setPOSTS(data.data)
      }
    )
  }, []);
  

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView>
        {POSTS.map((post:any) => (
          <Post post={post} navigation={navigation} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
