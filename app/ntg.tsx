import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import '@walletconnect/react-native-compat';
import { useAppKit, useAppKitAccount } from '@reown/appkit-ethers-react-native';
import { createAppKit, defaultConfig, AppKit } from '@reown/appkit-ethers-react-native';
import { useWalletInfo } from '@reown/appkit-ethers-react-native'
import { useAppKitProvider } from '@reown/appkit-ethers-react-native'



// Configuration
const projectId = '601f223af2ea9581e48d6141eef1ecab';

const metadata = {
  name: 'AppKit RN',
  description: 'AppKit RN Example',
  url: 'https://reown.com/appkit',
  icons: ['https://avatars.githubusercontent.com/u/179229932'],
  redirect: {
    native: 'my-app://' // Replace with your actual app scheme
  }
};

// Chain configurations
const chains = [
  {
    chainId: 5201420,  // Converted from hex (0x4f5e0c) to decimal
    name: 'Electroneum Testnet',
    currency: 'ETN',
    explorerUrl: '', // Not provided in the image, you can add it if needed
    rpcUrl: 'https://rpc.ankr.com/electroneum_testnet'
}


  
];

// Initialize AppKit BEFORE the component
const config = defaultConfig({ metadata });

// Create AppKit instance immediately
createAppKit({
  projectId,
  chains,
  config,
  enableAnalytics: true
});

const ntg = () => {
  const [count, setCount] = useState(0);
  const { open  } = useAppKit();
  const { address, chainId, isConnected,} = useAppKitAccount()
  const { walletInfo } = useWalletInfo()
  const { walletProvider } = useAppKitProvider()

  
  console.log('Is connected:', isConnected);
  console.log('Wallet Provider:', walletProvider);
  const handleConnect = async () => {
    try {
      await open();
    } catch (error) {
      console.error('Failed to open wallet connection:', error);
    }
    console.log('Wallet info:', walletInfo);

  };

  return (
    <View style={styles.root}>
      <AppKit />
      <Text style={styles.text}>{address}
     
      </Text>

      <Button title="Connect Wallet" onPress={handleConnect} />
    


    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default ntg;