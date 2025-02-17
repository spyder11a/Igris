import { Stack,Tabs } from 'expo-router';
export default function HomeLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="a"  />
      <Tabs.Screen name="b"  />
      <Tabs.Screen name="c"  />
      <Tabs.Screen name="d"  />
    </Tabs>
  );
}
