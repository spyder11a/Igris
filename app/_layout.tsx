import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from'react';

export default function RootLayout() {

  return (
    <Stack
    
     initialRouteName="(tabs)"
    
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        animation: "none", // Correct way to disable animations in expo-router
        contentStyle: { backgroundColor: "black" }, // Ensures proper background
        headerTintColor: '#000000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown: false, // Hide the header
      }}>
  
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
