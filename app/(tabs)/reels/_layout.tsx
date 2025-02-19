import { Stack } from "expo-router";

export default function ReelLayout() {
  return (
    <Stack 
      screenOptions={{ 
        animation: "none", // Correct way to disable animations in expo-router
        contentStyle: { backgroundColor: "black" }, // Ensures proper background
        headerShown: false, // Hides the header
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="hotel" />
    </Stack>
  );
}
