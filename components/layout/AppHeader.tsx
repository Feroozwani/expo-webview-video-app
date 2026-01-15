import { Appbar } from "react-native-paper";

export default function AppHeader({ title, onBack }: any) {
  return (
    <Appbar.Header>
      {onBack && <Appbar.BackAction onPress={onBack} />}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}
