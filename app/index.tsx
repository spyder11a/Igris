import { Image,View,Text, StyleSheet, ScrollView, Platform } from 'react-native';
import {Link } from 'expo-router'

export default function Index() {
  return (
<View style={styles.root}>
<Text>
  intro page
</Text>
<Link style={styles.container3} href="/onboarding">Onboard</Link>
<Link style={styles.container3} href="/home">Home</Link>

</View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1, // Takes full screen space
    justifyContent: "center", // Centers vertically
    alignItems: "center", // Centers horizontally
   
  },
  container3:{

    backgroundColor: '#00ff00'
  }
});