import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import bai1 from "../components/bai1";
import bai2 from "../components/bai2";
import bai3 from "../components/bai3"
const Stack = createNativeStackNavigator();

export default function Stack_Navigation() {
    return (
        // Make sure NavigationContainer is only in the root file
     
            <Stack.Navigator screenOptions={{headerShown : false} }>
                <Stack.Screen name="bai1" component={bai1} />
                <Stack.Screen name="bai2" component={bai2} />
                <Stack.Screen name="bai3" component={bai3} />
            </Stack.Navigator>
        
    );
}
