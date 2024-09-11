
  import React from 'react'
  import ReactDOM from 'react-dom/client'
  import App from './App.tsx';
  import './index.css'

  import '@rainbow-me/rainbowkit/styles.css';
import {
  darkTheme,
  // getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
// import {
//   mainnet,
//   polygon,
//   optimism,
//   arbitrum,
//   base,
//   sepolia,
//   liskSepolia,
//   lisk
// } from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
// import { config } from "./lib/config.ts";
import { config } from './lib/config.ts';

const queryClient = new QueryClient();
  
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider theme={darkTheme({
            accentColor: "#FFFFFFE5",
            accentColorForeground: "#010104",
            fontStack: "system",
            borderRadius: "large"
          })}>
            <App />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </React.StrictMode>,
  )
  
