import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../screens/Welcome";
import SignIn from "../screens/SignIn";
import Register from "../screens/Register";
import { VerificationCode } from "../screens/VerificationCode";
import { Home } from "../screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FirstRoute } from "../screens/FirstRoute";
// import Loading from "../pages/Loading";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Início"
    >
      <Tab.Screen name="Início" component={Home} />
    </Tab.Navigator>
  );
}

function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Welcome"
    >
      <Stack.Screen name="BottomTabs" component={TabRoutes} />
      <Tab.Screen name="FirstRoute" component={FirstRoute} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Welcome" component={Welcome} />
      {/* <Stack.Screen
        name="Loading"
        component={Loading}
      /> */}
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="VerificationCode" component={VerificationCode} />
    </Stack.Navigator>
  );
}

export default function Routes() {
  return <StackRoutes />;
}
