import { Platform } from "react-native";
import { io } from "socket.io-client";
// export const BaseUrl =
//   Platform.OS === "android" ? "http://192.168.1.27:3000/" : "http://localhost:3000";

// export const socket = io.connect("http://192.168.1.27:4000/");
export const BaseUrl = "https://866b-119-74-68-214.ngrok-free.app";
export const socket = io.connect(BaseUrl, {
  transports: ['websocket'], // Important for React Native
  forceNew: true,
  reconnectionAttempts: 5
});