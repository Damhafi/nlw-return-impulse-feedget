//REACT
import React from 'react';
import 'react-native-gesture-handler'
import { StyleSheet, Text, View } from "react-native";

//EXPO
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { useFonts, Inter_400Regular, Inter_500Medium, } from "@expo-google-fonts/inter";

//IMPORTS
import { theme } from "./src/theme";
import * as SplashScreen from 'expo-splash-screen';

//COMPONENTES
import Widget from "./src/components/Widget";


export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <Widget />

      <StatusBar style="light" backgroundColor="transparent" translucent />
    </View>
  );
}
