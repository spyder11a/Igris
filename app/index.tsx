import '@walletconnect/react-native-compat';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WagmiProvider } from 'wagmi';
import { mainnet, polygon, arbitrum } from '@wagmi/core/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppKitButton } from '@reown/appkit-wagmi-react-native'
import { Pressable, Text } from 'react-native'
import { useAppKit } from '@reown/appkit-wagmi-react-native'

import { 
  createAppKit, 
  defaultWagmiConfig, 
  AppKit 
} from '@reown/appkit-wagmi-react-native';

// Initialize QueryClient
const queryClient = new QueryClient();

// Project configuration
const projectId = '07068456ab114ff0730f70171b11d743'; // Replace with your actual project ID

// Metadata configuration
const metadata = {
  name: 'AppKit RN',
  description: 'AppKit RN Example',
  url: 'https://reown.com/appkit',
  icons: ['https://avatars.githubusercontent.com/u/179229932'],
  redirect: {
    native: 'your-app-scheme://', // Replace with your app scheme
    universal: 'your-app-universal-link.com' // Replace with your universal link
  }
};

// Chain configuration
const chains = [mainnet, polygon, arbitrum] as const;

// Create Wagmi config
const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata
});

// Initialize AppKit
createAppKit({
  projectId,
  wagmiConfig,
  defaultChain: mainnet,
  enableAnalytics: true
});

// Main App component
const App = () => {
  const { open } = useAppKit()
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaView style={styles.container}>
          <AppKit />
          <Pressable  style={styles.container2} onPress={() => open()}>
              <Text>Open Connect Modal</Text>
        </Pressable>
        </SafeAreaView>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbb'
  },
  container2: {
    backgroundColor: '#ccc'
  }
});

export default App;