import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, Alert } from "react-native";
import { BrowserProvider, Contract } from "ethers";
import { useAppKit, useAppKitAccount, useAppKitProvider } from "@reown/appkit-ethers-react-native";
import HotelReviewABI from "./useHotelReviewsABI.json";

const CONTRACT_ADDRESS = "0xe574C92e61579B3B77F5491a0C02C57157C915C1";

export function useHotelReviews() {
  const { open } = useAppKit();
  const { walletProvider } = useAppKitProvider();
  const { address, isConnected } = useAppKitAccount();

  async function getContract(): Promise<Contract | null> {
    try {
      if (!walletProvider) {
        throw new Error("No wallet provider available. Please connect your wallet.");
      }
      const ethersProvider = new BrowserProvider(walletProvider);
      const signer = await ethersProvider.getSigner();
      return new Contract(CONTRACT_ADDRESS, HotelReviewABI, signer);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error getting contract:", error.message);
      } else {
        console.error("Unknown error getting contract:", error);
      }
      return null;
    }
  }

  const connectWallet = async (): Promise<void> => {
    try {
      await open();
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Failed to connect wallet:", error.message);
        Alert.alert("Wallet Connection Error", "Could not connect to wallet. Please try again.");
      }
    }
  };

  const submitReview = async (hotelAddress: string, reviewText: string, ipfsHash: string, rating: number): Promise<void> => {
    try {
      if (!isConnected || !address) {
        throw new Error("Wallet not connected. Please connect your wallet first.");
      }
      if (!hotelAddress || !reviewText || !ipfsHash || rating < 1 || rating > 5) {
        throw new Error("Invalid input values.");
      }
      const contract = await getContract();
      if (!contract) return;
      const tx = await contract.submitReview(hotelAddress, reviewText, ipfsHash, rating);
      await tx.wait();
      Alert.alert("Success", "Review submitted successfully!");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Review submission failed:", error.message);
        Alert.alert("Review Submission Error", error.message);
      }
    }
  };

  const getAllReviews = async (): Promise<any> => {
    try {
      const contract = await getContract();
      if (!contract) return;
      return await contract.getAllReviews();
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error fetching reviews:", error.message);
      }
    }
  };

  const getHotelReviews = async (hotelAddress: string): Promise<any> => {
    try {
      const contract = await getContract();
      if (!contract) return;
      return await contract.getHotelReviews(hotelAddress);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error fetching hotel reviews:", error.message);
      }
    }
  };

  const getReviewsByReviewer = async (reviewerAddress: string): Promise<any> => {
    try {
      const contract = await getContract();
      if (!contract) return;
      return await contract.getReviewsByReviewer(reviewerAddress);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error fetching user reviews:", error.message);
      }
    }
  };

  const hasUserReviewedHotel = async (userAddress: string, hotelAddress: string): Promise<boolean> => {
    try {
      const contract = await getContract();
      if (!contract) return false;
      return await contract.hasUserReviewedHotel(userAddress, hotelAddress);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error checking review status:", error.message);
      }
      return false;
    }
  };

  return { connectWallet, submitReview, getAllReviews, getHotelReviews, getReviewsByReviewer, hasUserReviewedHotel };
}