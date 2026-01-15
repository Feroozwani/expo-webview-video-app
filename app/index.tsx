import AppHeader from "@/components/layout/AppHeader";
import {
  getWebViewButtons,
  notify,
  WebViewButtonItem,
} from "@/constants/webViewButtons.helper";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { WebView } from "react-native-webview";
import { STRINGS } from "../constants/strings";
import { useNotifications } from "../hooks/useNotifications";

export default function WebViewScreen() {
  useNotifications();
  const router = useRouter();

  const buttons: WebViewButtonItem[] = getWebViewButtons({ router });

  return (
    <View style={styles.container}>
      <AppHeader title={STRINGS.WEBVIEW.HEADER_TITLE} />
      <WebView
        source={{ uri: "https://expo.dev" }}
        style={styles.webview}
        onLoadEnd={() =>
          notify(
            STRINGS.WEBVIEW.WEBVIEW_LOADED_TITLE,
            STRINGS.WEBVIEW.WEBVIEW_LOADED_BODY
          )
        }
      />
      <View style={styles.buttons}>
        {buttons.map(({ key, label, onPress }) => (
          <Button key={key} onPress={onPress}>
            {label}
          </Button>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  webview: { flex: 1 },
  buttons: { padding: 16, gap: 10 },
});
