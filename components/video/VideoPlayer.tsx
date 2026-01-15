import { VideoView } from "expo-video";
import { StyleSheet } from "react-native";

export function VideoPlayer({ player }: { player: any }) {
  return (
    <VideoView
      style={styles.video}
      player={player}
      nativeControls
      allowsPictureInPicture
    />
  );
}

const styles = StyleSheet.create({
  video: { flex: 1 },
});
