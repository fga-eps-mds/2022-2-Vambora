import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../screens/Welcome";
import SignIn from "../screens/SignIn";
import Register from "../screens/Register";
import { VerificationCode } from "../screens/VerificationCode";
import { Home } from "../screens/Home";
// import Loading from "../pages/Loading";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="Loading"
        component={Loading}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VerificationCode"
        component={VerificationCode}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
