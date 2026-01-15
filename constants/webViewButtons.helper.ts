import { ROUTES } from "@/constants/routes";
import { STRINGS } from "@/constants/strings";
import * as Notifications from "expo-notifications";
import { Router } from "expo-router";

type Params = {
  router: Router;
};

export type WebViewButtonItem = {
  key: string;
  label: string;
  onPress: () => void;
};

// 🔔 Notification helper
export const notify = (title: string, body: string, data?: any) =>
  Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
      data,
    },
    trigger: {
      seconds: 2,
      channelId: "default",
    },
  });

// 🎛 Buttons
export const getWebViewButtons = ({ router }: Params): WebViewButtonItem[] => [
  {
    key: "notify",
    label: STRINGS.WEBVIEW.BTN_NOTIFY,
    onPress: () =>
      notify(STRINGS.WEBVIEW.NOTIFY_TITLE, STRINGS.WEBVIEW.NOTIFY_BODY),
  },
  {
    key: "notify-video",
    label: STRINGS.WEBVIEW.BTN_NOTIFY_OPEN_VIDEO,
    onPress: () =>
      notify(
        STRINGS.WEBVIEW.VIDEO_NOTIFY_TITLE,
        STRINGS.WEBVIEW.VIDEO_NOTIFY_BODY,
        { route: "video" }
      ),
  },
  {
    key: "go-video",
    label: STRINGS.WEBVIEW.BTN_GO_TO_VIDEO,
    onPress: () => router.push(ROUTES.VIDEO),
  },
];
