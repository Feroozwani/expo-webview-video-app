import AppHeader from "@/components/layout/AppHeader";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { StreamSwitcher } from "../components/video/StreamSwitcher";
import { VideoControls } from "../components/video/VideoControls";
import { VideoPlayer } from "../components/video/VideoPlayer";
import { STREAMS } from "../constants/streams";
import { useVideoPlayerControls } from "../hooks/useVideoPlayerControls";

export default function VideoScreen() {
  const router = useRouter();
  const [stream, setStream] = useState(STREAMS[0]);

  const { player, isMuted, play, pause, skip, toggleMute } =
    useVideoPlayerControls(stream.url);

  return (
    <View style={styles.container}>
      <AppHeader title="Video Player" onBack={router.back} />
      <VideoPlayer player={player} />
      <VideoControls
        onPlay={play}
        onPause={pause}
        onSkip={skip}
        onMute={toggleMute}
        muted={isMuted}
      />
      <StreamSwitcher streams={STREAMS} current={stream} onSelect={setStream} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
