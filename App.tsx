import React from "react";
import StackNavigator from "./src/navigation/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import store from "./src/store/store";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
