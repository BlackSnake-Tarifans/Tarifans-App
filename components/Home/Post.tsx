import React, { useState } from 'react';
import { Divider } from 'react-native-paper';
import { Image, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import { Text, View } from '../../components/Themed';
import { deletesavePost, dislikePost, likePost, savePost } from '../../hooks/postsAPI';
import { ImgCard } from '../Elementos/ImgCard';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width * 0.95;

const styles = StyleSheet.create({
  footerIcon: {
    width: 33,
    height: 33,
    resizeMode: 'contain',
    marginHorizontal: 4,
  },
  leftFooterIconsContainer: {
    flexDirection: 'row',
    width: '32%',
    justifyContent: 'flex-start',
  },
  rightFooterIconsContainer: {
    flexDirection: 'row',
    width: '32%',
    justifyContent: 'flex-end',
    marginLeft: 'auto',
  },
  thumbnail: {
    width: (deviceWidth -1) / 2.5,
    height: deviceHeight / 1.5,
    borderColor: 'purple',
    borderWidth: 1,
    borderRadius: 10,
    margin: 2,
    resizeMode: "contain"
  }
});

const postFooterIcons = [
  {
    name: 'Like',
    imageUrl: require('../../assets/images/iconos/heart.png'),
    likedImageUrl: require('../../assets/images/iconos/heartColored.png'),
  },
  {
    name: 'Comment',
    imageUrl: require('../../assets/images/iconos/comment.png'),
  },
  {
    name: 'Favorito',
    imageUrl: require('../../assets/images/iconos/star.png'),
    savedImageUrl: require('../../assets/images/iconos/starColored.png'),
  },
  {
    name: 'Opciones',
    imageUrl: require('../../assets/images/iconos/opciones.png'),
  },
];

function Post({ post, navigation }: any) {
  return (
    <View style={{ marginBottom: 30, marginHorizontal: 30 }}>
      <Divider />
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter post={post} navigation={navigation}/>
      <PostCaption post={post} />
    </View>
  );
}
function PostHeader({ post }: any) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: 5,
        alignItems: 'center',
      }}
    >
      <View>
        <Text style={{ color: 'gray', marginLeft: 5, fontWeight: '700' }}>
          {post.fecha}
        </Text>
      </View>
    </View>
  );
}

function PostImage({ post }: any) {
  return (
    <View style={{ justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap', }}>
       {post.multimedia.map((urls: any, index: any) => (
            <View key={index} style={{ margin: 1 }}>
              <TouchableOpacity
                activeOpacity={1}
               
              >
                <Image source={{ uri: urls.file }} style={styles.thumbnail} />
              </TouchableOpacity>
            </View>
          ))}
    </View>
  );
}



function PostFooter({ navigation, post }: any) {
  const [liked,setLiked] = useState(post.liked_by_me)
  const [fav, setFavorite] = useState(post.saved_to_favs)
  console.log(post.saved_to_favs)
  return (
    <View style={{ flexDirection: 'row', marginVertical: 7 }}>
      <View style={styles.leftFooterIconsContainer}>
        <Icon
          imgStyle={styles.footerIcon}
          imgUrl={liked?postFooterIcons[0].likedImageUrl:postFooterIcons[0].imageUrl}
          onpress={()=>{
            if(!liked){
              console.log("liking")
              likePost(post.id)
            }else{
              console.log("disliking")
              dislikePost(post.id)
            }
            setLiked(!liked);
            
          }}
        />
        <Icon
          imgStyle={styles.footerIcon}
          imgUrl={postFooterIcons[1].imageUrl}
          onpress={()=>{
            navigation.navigate('Comment',{post});
          }}
        />
        <Icon
          imgStyle={styles.footerIcon}
          imgUrl={fav?postFooterIcons[2].savedImageUrl:postFooterIcons[2].imageUrl}
          onpress={()=>{
            if(!fav){
              savePost(post.id)
            }else{
              deletesavePost(post.id)
            }
            setFavorite(!fav);
          }}
        />
      </View>
      <View style={styles.rightFooterIconsContainer}>
        <Icon
          imgStyle={styles.footerIcon}
          imgUrl={postFooterIcons[3].imageUrl}
        />
      </View>
    </View>
  );
}

export function PostCaption({ post }: any) {
  return (
    <View style={{}}>
      <Text>
        <Text style={{ fontWeight: 'bold' }}>{post.title}</Text>
      </Text>
      <Text>{`${post.description}`}</Text>
    </View>
  );
}

function Icon({ imgStyle, imgUrl , onpress}: any) {
  return (
    <TouchableOpacity 
      onPress = {onpress}>
      <Image style={imgStyle} source={imgUrl} />
    </TouchableOpacity>
  );
}

export default Post;
