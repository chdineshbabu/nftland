"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type WalletContextType = {
  address: string | null
  balance: string
  isConnected: boolean
  isConnecting: boolean
  connectWallet: () => Promise<void>
  disconnectWallet: () => void
}

const WalletContext = createContext<WalletContextType>({
  address: null,
  balance: "0",
  isConnected: false,
  isConnecting: false,
  connectWallet: async () => {},
  disconnectWallet: () => {},
})

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [address, setAddress] = useState<string | null>(null)
  const [balance, setBalance] = useState("0")
  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)

  // Check if wallet was previously connected
  useEffect(() => {
    const savedAddress = localStorage.getItem("walletAddress")
    if (savedAddress) {
      setAddress(savedAddress)
      setBalance("2.5") // Mock balance
      setIsConnected(true)
    }
  }, [])

  const connectWallet = async () => {
    setIsConnecting(true)

    try {
      // Mock wallet connection
      // In a real app, you would use ethers.js or web3.js to connect to MetaMask or other wallets
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const mockAddress = "0x1234...5678"
      setAddress(mockAddress)
      setBalance("2.5")
      setIsConnected(true)

      // Save connection state
      localStorage.setItem("walletAddress", mockAddress)
    } catch (error) {
      console.error("Failed to connect wallet:", error)
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnectWallet = () => {
    setAddress(null)
    setBalance("0")
    setIsConnected(false)
    localStorage.removeItem("walletAddress")
  }

  return (
    <WalletContext.Provider
      value={{
        address,
        balance,
        isConnected,
        isConnecting,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export const useWallet = () => useContext(WalletContext)

