import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "@/src/screens/index";

export type StackParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigator: FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
