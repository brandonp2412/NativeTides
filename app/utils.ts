import { StyleSheet } from "react-native";
import * as Notifications from "expo-notifications";
import * as Haptics from "expo-haptics";

export const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    textAlign: "center",
  },
  center: {
    gap: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  image: {
    height: 300,
    width: 300,
    marginBottom: 16,
    marginTop: 16,
  },
  input: {
    height: 50,
    width: "80%",
    borderColor: "#007AFF",
    borderWidth: 2,
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 18,
    color: "#333",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  link: {
    color: "#007AFF",
    fontSize: 18,
    fontWeight: "500",
  },
});

export async function vibrate() {
  return Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
}

// Request permissions for notifications
async function requestPermissionsAsync() {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== "granted") {
    alert("You need to enable permissions in settings");
    return;
  }
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

// Schedule a notification
export async function notify(title: string, body: string) {
  await requestPermissionsAsync(); // Ensure permissions are granted

  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
      priority: Notifications.AndroidNotificationPriority.HIGH, // Set the priority
    },
    trigger: null,
  });
}

export default {};
