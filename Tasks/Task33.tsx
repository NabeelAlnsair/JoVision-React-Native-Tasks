import { VideoView, useVideoPlayer } from 'expo-video';
import { Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Task33() {
  const player = useVideoPlayer('https://www.w3schools.com/html/mov_bbb.mp4');
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Pressable
        onPress={() => {
          if (player.playing) {
            player.pause();
          } else {
            player.play();
          }
        }}
      >
        <VideoView
          player={player}
          style={{ width: 350, height: 220 }}
          nativeControls={false}
        />
      </Pressable>
    </SafeAreaView>
  );
}