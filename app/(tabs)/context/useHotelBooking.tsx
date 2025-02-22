import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, Alert } from "react-native";
import { BrowserProvider, parseEther, Contract } from "ethers";
import { useAppKit, useAppKitAccount, useAppKitProvider } from "@reown/appkit-ethers-react-native";
import HotelBookingABI from "./useHotelBookingABI.json"; // Import the contract ABI

// Replace with your deployed smart contract address
const CONTRACT_ADDRESS = "0xe574C92e61579B3B77F5491a0C02C57157C915C1";

export function useHotelBooking() {
  const { open } = useAppKit(); // WalletConnect function
  const { walletProvider } = useAppKitProvider(); // Provider from AppKit
  const { address, isConnected } = useAppKitAccount(); // User wallet info

  const [hotelAddress, setHotelAddress] = useState(""); // For booking hotel

  async function getContract() {
    try {
      if (!walletProvider) {
        throw new Error("No wallet provider available. Please connect your wallet.");
      }
  
      const ethersProvider = new BrowserProvider(walletProvider)
      const signer = await ethersProvider.getSigner() // Directly get the signer
      return new Contract(CONTRACT_ADDRESS, HotelBookingABI, signer);
    } catch (error) {
      console.error("Error getting contract:", error.message);
      return null;
    }
  }
  

  // 🔹 Connect Wallet
  const connectWallet = async () => {
    try {
      await open();
    } catch (error) {
      console.error("Failed to connect wallet:", error.message);
      Alert.alert("Wallet Connection Error", "Could not connect to wallet. Please try again.");
    }
  };

  // 🔹 Subscribe as a Hotel
  const subscribeToPlatform = async () => {
    try {
      console.log("🔹 Step 1: Checking Wallet Connection...");
      if (!isConnected || !address) {
        throw new Error("Wallet not connected. Please connect your wallet first.");
      }
      console.log("✅ Wallet Connected:", address);
  
      console.log("🔹 Step 2: Fetching Contract Instance...");
      const contract = await getContract();
  
      if (!contract) {
        throw new Error("❌ Failed to get contract. Ensure wallet is connected and contract address is correct.");
      }
      console.log("✅ Contract Retrieved:", contract);
  
      console.log("🔹 Step 3: Checking Available Contract Methods...");
      console.log("📝 Available Methods:", Object.keys(contract)); // Print available methods
  
      if (!contract.subscribeToPlatform) {
        throw new Error("❌ Contract method 'subscribeToPlatform' not found. Check ABI.");
      }
      console.log("✅ 'subscribeToPlatform' method found.");
  
      console.log("🔹 Step 4: Sending Subscription Transaction...");
      const tx = await contract.subscribeToPlatform({
        value: parseEther("0.1"), // Minimum subscription fee
      });
  
      console.log("✅ Transaction Sent:", tx);
      console.log("🔹 Step 5: Waiting for Transaction Confirmation...");
      await tx.wait();
  
      console.log("✅ Transaction Confirmed!");
      Alert.alert("Success", "Subscription successful!");
    } catch (error) {
      console.error("❌ Subscription failed:", error.message);
      Alert.alert("Subscription Error", error.message);
    }
  };
  

  // 🔹 Book a Hotel
  const bookHotel = async () => {
    try {
      if (!isConnected || !address) {
        throw new Error("Wallet not connected. Please connect your wallet first.");
      }

      if (!hotelAddress) {
        throw new Error("Please enter a valid hotel address.");
      }

      const contract = await getContract();
      if (!contract) return;

      const tx = await contract.bookHotel(hotelAddress, {
        value: parseEther("0.05"), // Booking fee
      });

      await tx.wait();
      Alert.alert("Success", "Hotel booked successfully!");
    } catch (error) {
      console.error("Booking failed:", error.message);
      Alert.alert("Booking Error", error.message);
    }
  };

  // 🔹 Sign Message (Example for Wallet Interaction)
  const signMessage = async () => {
    try {
      if (!isConnected || !address) {
        throw new Error("Wallet not connected. Please connect your wallet first.");
      }

      const provider = new BrowserProvider(walletProvider);
      const signer = await provider.getSigner();
      const message = "Hello AppKit RN + Ethers";

      const signature = await signer.signMessage(message);
      Alert.alert("Signed Message", signature);
    } catch (error) {
      console.error("Signing failed:", error.message);
      Alert.alert("Signing Error", error.message);
    }
  };

  return {connectWallet,subscribeToPlatform,bookHotel,signMessage}

 
 
};


