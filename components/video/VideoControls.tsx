import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import {
  getVideoControls,
  VideoControlItem,
} from "../../constants/videoControls.helper";

type Props = {
  onPlay: () => void;
  onPause: () => void;
  onSkip: (s: number) => void;
  onMute: () => void;
  muted: boolean;
};

export function VideoControls(props: Props) {
  const controls: VideoControlItem[] = getVideoControls(props);

  return (
    <View style={styles.container}>
      {controls.map(({ key, label, onPress }) => (
        <Button key={key} onPress={onPress}>
          {label}
        </Button>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8,
  },
});
