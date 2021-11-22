import React, { FC } from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text } from "react-native";
import tw from "tailwind-rn";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../navigation/StackNavigator";

type HomeScreenProp = NativeStackNavigationProp<StackParamList, "Home">;
export const HomeScreen: FC = () => {
  const navigation = useNavigation<HomeScreenProp>();
  return (
    <View style={tw("flex-1 justify-center items-center bg-white")}>
      <Text style={tw("font-bold text-4xl ")}>Welcome to</Text>
      <Text style={tw("font-bold text-4xl ")}>winek app</Text>
    </View>
  );
};
