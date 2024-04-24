# Universal Resolver Driver: did:itn

This is a [Universal Resolver](https://github.com/decentralized-identity/universal-resolver/) driver for **did:itn** identifiers.
This driver uses [ITN DID Resolver](https://github.com/itn-trust/itn-did-resolver) library to resolve DID.

## Specifications

* [Decentralized Identifiers](https://w3c.github.io/did-core/)
* [DID Method Specification](https://github.com/itn-trust/itn-did-spec)

## Example DIDs

```text
did:itn:PA7xLNkMAqzzrDp4UBnrZm
did:itn:EzfteTXcoHXh5W1PURHrS3
```

## Build and Run (Docker)

```shell
docker build . -t universalresolver/driver-did-itn
docker run -p 8080:8080 universalresolver/driver-did-itn
curl -X GET http://localhost:8080/1.0/identifiers/did:itn:PA7xLNkMAqzzrDp4UBnrZm
```

## Build and Run (Node.js)

```shell
npm install
npm start
```

## Driver Environment Variables

The driver recognizes the following environment variables:

### `uniresolver_driver_did_itn_resolverUrl`

* A DID Resolver url.
* Default value: (empty string)

## Driver Metadata

The driver returns the following metadata in addition to a DID document:

* `recoveryCommitment`: the `sha256` hash of the public key which controls the DID (recovery key)
* `hlfProof`: proof that DID is anchored in HLF network, including `dataHash`, `blockNumber` and `transactionId`
* `evmProof`: proof that DID is anchored in EVM network, including `blockHash`, `blockNumber` and `txHash`
