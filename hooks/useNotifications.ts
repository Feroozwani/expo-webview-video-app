import * as Notifications from "expo-notifications";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Platform } from "react-native";
import { ROUTES } from "../constants/routes";

export function useNotifications() {
  const router = useRouter();

  useEffect(() => {
    const setupNotifications = async () => {
      // 🔔 Ask permission
      const { status } = await Notifications.requestPermissionsAsync();

      if (status !== "granted") {
        console.warn("Notification permission not granted");
        return;
      }

      // 🤖 Android channel (MANDATORY)
      if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.HIGH,
        });
      }
    };

    setupNotifications();

    // 👉 Handle notification tap
    const subscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        const route = response.notification.request.content.data?.route;

        if (route === "video") {
          router.push(ROUTES.VIDEO);
        }
      }
    );

    return () => subscription.remove();
  }, []);
}
