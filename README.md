﻿# dWallet - Ethereum Wallet Application

A decentralized Ethereum wallet application that allows users to connect to their Ethereum accounts, check balances, and send ETH to other addresses.

## Project Overview

dWallet is a web-based Ethereum wallet interface built with React and Web3.js. It provides basic wallet functionality including:

- Account selection and balance checking
- Real-time ETH balance display
- Send ETH to other addresses
- Transaction receipt tracking

## Tech Stack

- **Frontend:**
  - React.js
  - Web3.js
  - CSS3
  - HTML5

- **Blockchain:**
  - Truffle Framework
  - Ganache (Local Ethereum network)

## Prerequisites

- Node.js (v12 or higher)
- Ganache - Local Ethereum network
- Truffle Framework
- Web browser (Chrome/Firefox/Brave)

## Getting Started

1. Clone the repository:
```sh
git clone https://github.com/zombie2299/D-Wallet-Ethereum-Wallet-Application
cd dWallet-Start-
```

2. Install dependencies:
```sh
# Install Truffle dependencies
cd truffle
npm install

# Install Client dependencies
cd ../client
npm install
```

3. Start Ganache and ensure it's running on port 7545

4. Start the React application:
```sh
cd client
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
dWallet-Start-/
├── client/                 # Frontend React application
│   ├── public/            # Public assets
│   └── src/
│       ├── components/    # React components
│       │   ├── Accounts.jsx
│       │   ├── SendEther.jsx
│       │   └── Welcome.jsx
│       ├── App.jsx        # Main application component
│       └── index.js       # Application entry point
│
└── truffle/               # Truffle configuration and contracts
    └── truffle-config.js  # Truffle deployment configuration
```

## Features

- Connect to local Ethereum network (Ganache)
- Select from available Ethereum accounts
- View account balance in real-time
- Send ETH to other addresses
- View transaction receipts
- Clean and intuitive user interface

## Development

For development purposes, the application connects to a local Ethereum network (Ganache) running on port 7545. Make sure Ganache is running before starting the application.
