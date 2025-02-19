import { Stack,Tabs } from 'expo-router';
export default function HomeLayout() {
  return (
    <Tabs 
    screenOptions={{
      headerShown: false, // Hide header for tabs
      tabBarStyle: {
        backgroundColor: '#000000', // Tab bar background color
        borderTopWidth: 0, // Remove the border on top
        height: 60, // Tab bar height
      },
      tabBarActiveTintColor: '#fff', // Active tab icon and label color
      tabBarInactiveTintColor: '#888', // Inactive tab icon and label color
      
      tabBarLabelStyle: {
        fontSize: 14, // Tab label font size
        fontWeight: 'bold', // Tab label font weight
      },
    }}
    >
      <Tabs.Screen name="a"  />
      <Tabs.Screen 
      name="b"  
      options={{ tabBarStyle: { display: 'none' } }} // Hides tab bar
      />
      <Tabs.Screen name="c"  />
      <Tabs.Screen name="d"  />
    </Tabs>
  );
}
