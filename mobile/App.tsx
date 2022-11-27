import React from "react";
import { StatusBar } from "react-native";

import {
  useFonts,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";

import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/routes";




export default function App() {

  const [fontsLoaded] = useFonts({
    "Quicksand-500":Quicksand_500Medium ,
    "Quicksand-600":Quicksand_600SemiBold,
    "Quicksand-700":Quicksand_700Bold,
  });

  if(!fontsLoaded){
    return null;
  }
  else{
    return (
      <NavigationContainer>
        <StatusBar backgroundColor="#38A69D" barStyle="light-content" />
        <Routes />
      </NavigationContainer>
    );
  }
}

