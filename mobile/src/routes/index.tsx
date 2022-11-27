import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome';
import SingIn from '../pages/SingIn';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name='Welcome'
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='SingIn'
                component={SingIn}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>

    );
};