import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import Header from '../components/Elementos/Header';
import Post from '../components/Home/Post';

const POSTS = [
  {
    imageUrl: require('../assets/images/fotos/fotoejemplo.png'),
    user: 'dylan',
    likes: 999,
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
    imageUrl: require('../assets/images/fotos/fotoejemplo.png'),
    user: 'david',
    likes: 999,
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
];
// const POSTS={POST.map((post,index)=> (<Post post={post} key={index}/> ))}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
