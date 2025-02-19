import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from'react';

export default function RootLayout() {

  return (
    <Stack
     initialRouteName="(tabs)"
     backBehavior="history"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown: false, // Hide the header
      }}>
  
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
