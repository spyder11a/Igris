import { Image,SafeAreaView,View,Text,Pressable, StyleSheet, ScrollView, Platform, ImageBackground } from 'react-native';

import '@walletconnect/react-native-compat';
import { Link } from 'expo-router';
import React from 'react';
import { WagmiProvider } from 'wagmi';
import { mainnet, polygon, arbitrum } from '@wagmi/core/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppKitButton } from '@reown/appkit-wagmi-react-native'
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
  

  const Onboarding = () =>{
    const { open } = useAppKit()
    
  return (
    <WagmiProvider config={wagmiConfig}>
    <QueryClientProvider client={queryClient}>
      <SafeAreaView >
       <ScrollView  
       showsVerticalScrollIndicator={false} // Hides scroll bar
       bounces={false} // Prevents overscroll on iOS
       >
  <View style={styles.root} >
  <ImageBackground source={require("../assets/images/a.png")} style={styles.rectangle9} >
  <View style={styles.onboarding} testID="1260:2286">

<View style={styles.frame92} testID="1260:2287">
  <View style={styles.frame43} testID="1260:2288">
    <View style={styles.group48} testID="1260:2289">
      <View style={styles.frame91} testID="1260:2290">
        <Text style={styles.joinUsNow} testID="1260:2291">
          {`Join us Now`}
        </Text>
        <Text style={styles.decentralizedTrustVerifiedReviews} testID="1260:2292">
          {` Decentralized Trust, 
Verified Reviews.`}
        </Text>
        <Text style={styles.beAPartOfTheTransparentReviewRevolution} testID="1260:2293">
          {`"Be a Part of the Transparent Review Revolution!"`}
        </Text>
      </View>
    </View>
    <View style={styles.frame42} testID="1260:2294">
      <View style={styles.frame80} testID="1260:2295">
        <View style={styles.frame52} testID="1260:2296">
          <Text style={styles.user} testID="1260:2297">
            {`User`}
          </Text>
        </View>
        <View style={styles.frame50} testID="1260:2298">
          <Text style={styles.restaurant} testID="1260:2299">
            {`Restaurant`}
          </Text>
        </View>
      </View>
    </View>
  </View>
  <View style={styles.frame90} testID="1260:2300">
      <AppKit/>
      <Pressable  style={styles.frame10} onPress={() => open()}>
                    <Text  style={styles.connectWallet}>{}Open Connect Modal</Text>
              </Pressable>
   
    <Text style={styles.byMetamask} testID="1260:2303">
      {`By Metamask`}
    </Text>
    {/* <Link  href="/(home)">Home</Link> */}
  </View>
</View>
</View>
  

  </ImageBackground>

     
    </View>
    </ScrollView>
    </SafeAreaView>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

const styles = StyleSheet.create({rectangle9: {
   
   
  },
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        rowGap: 10,
        columnGap: 10,
        backgroundColor: 'rgba(0, 0, 0, 1)',
      },
      joinUsNow: {
        alignSelf: 'stretch',
        color: 'rgba(255, 255, 255, 1)',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 29.834,
        fontStyle: 'normal',
        fontWeight: '600',
      },
      decentralizedTrustVerifiedReviews: {
        height: 44.373,
        alignSelf: 'stretch',
        color: 'rgba(255, 255, 255, 1)',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 18.375,
        fontStyle: 'normal',
        fontWeight: '400',
      },
      beAPartOfTheTransparentReviewRevolution: {
        height: 45.067,
        alignSelf: 'stretch',
        color: 'rgba(255, 255, 255, 0.4000000059604645)',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 18.375,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 22.533,
        letterSpacing: 0.184,
      },
      onboarding: {
        flexDirection: 'row',
        width: 390,
        minHeight: 845.302,
        paddingTop: 32.587,
        paddingLeft: 32.24,
        paddingBottom: 32.587,
        paddingRight: 32.24,
        justifyContent: 'center',
        alignItems: 'flex-end',
        rowGap: 3.467,
        columnGap: 3.467,
       
      },
      frame92: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        rowGap: 97.413,
        columnGap: 97.413,
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
      },
      frame43: {
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: 91.173,
        columnGap: 91.173,
        alignSelf: 'stretch',
      },
      group48: {
        height: 174.66701,
        alignSelf: 'stretch',
      },
      frame91: {
        width: 325.51999,
        flexDirection: 'column',
        alignItems: 'flex-start',
        rowGap: 24.613,
        columnGap: 24.613,
      },
      user: {
        width: 157.38699,
        height: 18.875,
        flexShrink: 0,
        color: 'rgba(226, 226, 226, 0.9019607901573181)',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 17.333,
        fontStyle: 'normal',
        fontWeight: '600',
      },
      frame42: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 11.44,
        columnGap: 11.44,
        alignSelf: 'stretch',
      },
      frame80: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        rowGap: 10.053,
        columnGap: 10.053,
      },
      frame52: {
        flexDirection: 'row',
        width: 157.38699,
        height: 74.264,
        paddingTop: 27.733,
        paddingLeft: 0,
        paddingBottom: 27.733,
        paddingRight: 0,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 3.467,
        columnGap: 3.467,
        borderBottomLeftRadius: 21.493,
        borderBottomRightRadius: 21.493,
        borderTopLeftRadius: 21.493,
        borderTopRightRadius: 21.493,
        borderWidth: 1.387,
        borderStyle: 'solid',
        borderColor: 'rgba(226, 226, 226, 0.9019607901573181)',
      },
      restaurant: {
        width: 157.38699,
        height: 18.875,
        flexShrink: 0,
        color: 'rgba(255, 255, 255, 0.4000000059604645)',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 17.333,
        fontStyle: 'normal',
        fontWeight: '600',
      },
      frame50: {
        flexDirection: 'row',
        width: 157.38699,
        height: 74.264,
        paddingTop: 27.733,
        paddingLeft: 0,
        paddingBottom: 27.733,
        paddingRight: 0,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 3.467,
        columnGap: 3.467,
        borderBottomLeftRadius: 21.493,
        borderBottomRightRadius: 21.493,
        borderTopLeftRadius: 21.493,
        borderTopRightRadius: 21.493,
        borderWidth: 1.387,
        borderStyle: 'solid',
        borderColor: 'rgba(255, 255, 255, 0.4000000059604645)',
      },
      connectWallet: {
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
        color: 'rgba(0, 0, 0, 1)',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 14.56,
        fontStyle: 'normal',
        fontWeight: '600',
      },
      frame90: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        rowGap: 13.52,
        columnGap: 13.52,
        alignSelf: 'stretch',
      },
      frame10: {
        
        flexDirection: 'row',
        height: 60.32,
        paddingTop: 21.147,
        paddingLeft: 0,
        paddingBottom: 21.147,
        paddingRight: 0,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 3.467,
        columnGap: 3.467,
        alignSelf: 'stretch',
        borderBottomLeftRadius: 62.747,
        borderBottomRightRadius: 62.747,
        borderTopLeftRadius: 62.747,
        borderTopRightRadius: 62.747,
        backgroundColor: 'rgba(255, 255, 255, 1)',
      },
      byMetamask: {
        alignSelf: 'stretch',
        color: 'rgba(255, 255, 255, 0.4000000059604645)',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 11.093,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 22.533,
        letterSpacing: 0.111,
      },
});

export default Onboarding;