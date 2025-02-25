import { Image,View,Text, StyleSheet, ScrollView, Platform } from 'react-native';
import {Link } from 'expo-router'

export default function Index() {
  return (
<View  style={styles.root}>
<Text>
  
</Text>
<Link style={styles.container3} href="/Onboarding">Onboard</Link>
<Link style={styles.container3} href="/home">a</Link>
</View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1, // Takes full screen space
    justifyContent: "center", // Centers vertically
    alignItems: "center", // Centers horizontally
    gap: 20,
    backgroundColor: '#000000',
  },
  container3:{
    fontSize: 20,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    color: '#000000',
  }
});