import { StyleSheet } from "react-native";
import * as Haptics from "expo-haptics";

export const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    marginBottom: 16,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 300,
    width: 300,
    marginBottom: 16,
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
});

export async function vibrate() {
  return Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
}

export default {};
