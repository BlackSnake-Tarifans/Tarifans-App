import { Video, VideoFullscreenUpdateEvent } from 'expo-av';
import { StyleSheet } from 'react-native';
import React from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import { ITEM_WIDTH, ImgCard } from './ImgCard';

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: ITEM_WIDTH,
    height: ITEM_WIDTH > 1000 ? ITEM_WIDTH / 2 : ITEM_WIDTH,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function MediaElement({ source }: any) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const onFullscreenUpdate = async ({
    fullscreenUpdate,
  }: VideoFullscreenUpdateEvent) => {
    if (fullscreenUpdate === Video.FULLSCREEN_UPDATE_PLAYER_DID_PRESENT) {
      await ScreenOrientation.unlockAsync();
    } else if (
      fullscreenUpdate === Video.FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS
    ) {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT,
      );
    }
  };

  const extension = source.toString().endsWith('mp4');
  const prefix = source.toString().substring(0, 15);
  if (extension || prefix == 'data:video/mp4;') {
    return (
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
        onFullscreenUpdate={onFullscreenUpdate}
      />
    );
  }
  return <ImgCard source={source} />;
}

export default MediaElement;
