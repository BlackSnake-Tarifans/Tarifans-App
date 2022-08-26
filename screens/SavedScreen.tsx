import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackHeader from '../components/Elementos/BackHeader';
import Post from '../components/Home/Post';
import { getFeed } from '../hooks/backendAPI';
import { loadSavedPosts } from '../hooks/postsAPI';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

function SavedScreen({ navigation }: any) {
  const [POSTS, setPOSTS]: any = useState([]);

  useEffect(() => {
    loadSavedPosts().then((data: any) => {
      console.log(data);
      setPOSTS(data.data);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <BackHeader />
      <ScrollView>
        {POSTS.map((post: any) => (
          <Post post={post} navigation={navigation} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default SavedScreen;
