import React from "react";
import { Text, View } from '../../components/Themed';
import { Divider } from 'react-native-paper';
import { Image , TouchableOpacity , StyleSheet } from 'react-native';

const postFooterIcons=[{
    name: 'Like',
    imageUrl: require('../../assets/images/iconos/heart.png'),
    likedImageUrl: require('../../assets/images/iconos/heartColored.png'),
},{
    name: 'Comment',
    imageUrl: require('../../assets/images/iconos/comment.png'),
},{
    name: 'Favorito',
    imageUrl: require('../../assets/images/iconos/star.png'),
    savedImageUrl: require('../../assets/images/iconos/starColored.png'),
},{
    name: 'Opciones',
    imageUrl: require('../../assets/images/iconos/opciones.png'),
}]



const Post= ({post}: any) => {
    return (
        <View style={{marginBottom:30, marginHorizontal: 30}}>  
            <Divider />
            <PostHeader post={post}/>
            <PostImage post={post}/>
            <PostFooter/>
            <PostCaption post={post}/>
        </View>
    );
}
const PostHeader=({post}: any)=>(
        <View style={{flexDirection:'row',justifyContent:'flex-end',margin:5,alignItems:'center'}}>
            <View>
                <Text style={{color:'gray', marginLeft: 5,fontWeight: '700'}}>{post.fecha}</Text>
            </View>
        </View>
    )

const PostImage=({post}: any)=>{
    return(
        <View style={{width: '100%', height: 450}}>
            <Image source={post.imageUrl} style={{width: '100%', height:'100%', resizeMode: 'cover'}}/>
        </View>
    );
}

const PostFooter=()=>{
    return(
        <View style={{flexDirection: 'row', marginVertical: 7}}>
            <View style={styles.leftFooterIconsContainer}>  
                <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl}/>
                <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl}/>
                <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl}/>
            </View>
            <View style={styles.rightFooterIconsContainer}>
                <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl}/>
            </View>
        </View>
    );
}

const PostCaption=({post}: any)=>{
    return(
        <View style={{}}>
            <Text>
                <Text style={{ fontWeight: 'bold'}}>
                {post.user}
                </Text>
                <Text>{" " + post.caption}</Text>
            </Text>
        </View>
    )
}

const Icon=({imgStyle, imgUrl}: any)=>(
    <TouchableOpacity>
        <Image style={imgStyle} source={imgUrl}/>
    </TouchableOpacity>
);


const styles=StyleSheet.create({
    footerIcon:{
        width: 33,
        height: 33,
        resizeMode: "contain",
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

});

export default Post;