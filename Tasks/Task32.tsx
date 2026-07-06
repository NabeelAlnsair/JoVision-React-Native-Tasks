import { VideoView, useVideoPlayer } from 'expo-video';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Task32() {
  const player = useVideoPlayer(
    'https://www.w3schools.com/html/mov_bbb.mp4'
  );

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <VideoView
        player={player}
        style={{ width: '100%', height: 250 }}
        nativeControls
      />
    </SafeAreaView>
  );
}