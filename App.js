import * as React from "react";
import { createSwitchNavigator,createAppContainer } from "react-navigation";

import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";

import * as firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
export default function App() {
  return (
   <AppContainer/>
  );
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen : LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen : DashboardScreen
})
const AppContainer = createAppContainer(AppSwitchNavigator)