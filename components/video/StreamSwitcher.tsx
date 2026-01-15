import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

type Stream = { label: string; url: string };

export function StreamSwitcher({
  streams,
  current,
  onSelect,
}: {
  streams: Stream[];
  current: Stream;
  onSelect: (s: Stream) => void;
}) {
  return (
    <View style={styles.container}>
      {streams.map((stream) => (
        <Button
          key={stream.url}
          mode={stream.url === current.url ? "contained" : "outlined"}
          onPress={() => onSelect(stream)}
        >
          {stream.label}
        </Button>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 16,
  },
});
