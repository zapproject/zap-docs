---
id: overview
title: Zap Ethereum API 
sidebar_label: Overview 
---

Check the [repo](https://github.com/zapproject/zap-ethereum-api/tree/master) here.

*Note: Currently under active development. Contact project's maintainers at development@zap.org* 


## Overview

Zap is a platform for tokenizing services and curating service providers with a focus oracle services. 

Data providers are incentivized to publish secure data feeds from a variety of endpoints which are monetized via resource-specific bonding markets. 

In these bonding markets, data-consumers and/or speculators stake ZAP tokens to data-providers in exchange for data-provider-specific access tokens, ‘dots’.

Dots are redeemable as :
- query requests to the data-provider in request endpoints(ex. smart contract endpoint)
- subscription periods to data-provider streams in subscription endpoints (ex. ipfs pubsub socket endpoint)
- an amount of ZAP token determined by data-provider-specific bond market price

The purpose of the API is to allow developers to register accounts, set bond market parameters and expose their tokenized service to both offchain subscribers and onchain user-contracts

The API allows developers to achieve the following:
- register data-providers on our backend via the Registry class
- write feed-specific data-provider daemons to serve both queries and subscription requests
- operate ETH/ZAP-token wallets in their scripts
- interact with our data-provider-specific bonding curves for data monetization and data-provider speculation 
- Incorporate data streams into their scripts
- develop endpoint-specific feed handlers 

What the API does not handle
- account management
- subscription storage
- command line interface

## Contract Overview

The ZAP platform currently exists as as a collection of contracts on the Kovan testnet.  A list of the five main contracts and their purposes follows. 


![ZAP DFD](https://raw.githubusercontent.com/zapproject/zap-ethereum-api/master/dataflow.png "ZAP DFD")


**ZapToken**: serves as a ledger for the zap tokens which may be bound to any data provider in return for finite access to a provider's data. The amount of access granted per token is based on provider defined supply/cost curve.


**Registry**: where data providers themselves are represented as structures in which public keys for data/query encryption, account addresses, bond pricing parameters and endpoint-specific parameters are housed. 

**Bondage**: data-provider endpoint specific bonding is performed via this contract.

defines the available pricing curves in plots of access-cost(dot-cost) versus access-supply(dot-supply) based on provider defined parameters
calculates request/subscription prices for given data providers via 'dot' prices. 
holds dots in escrow between user and provider during subscriptions and pending transactions 
allows ZAP to be bound for dots at price defined by point on provider specific curve
allows dots to be burned for ZAP at  price defined by point on provider specific curve

**Dispatch**: handles delivery and bond-market interface for smart contract endpoints (ex. a smart contract-powered futures contract for crypto-exchange prices which queries a data-provider, or "oracle", for BTC-ETH spot price at a timestamp)

**Arbiter**: handles data delivery and bond-market interface for temporal subscriptions. The first temporal subscription endpoint we are building out consists of IPFS Publisher/Subscriber socket subscriptions. (ex. user wishes to subscribe to a real time data feed for 2 hours)

Registry, Bondage, Dispatch, and Arbiter storage is decoupled from their logic, allowing these contracts to be securely updatable.


