
## SETUP

1. Typescript
```bash
npm install -g typescript
```

2. Install Dependencies
```bash
npm install
```

3. Compile
```bash
tsc
```

4. Prepare, start a monero daemon
```
./arqmad 
```

5. Create a wallet

6. Start Rpc to wallet
```bash
./arqma-wallet-rpc --wallet-file arqma --rpc-bind-port 19996 --password password [--disable-rpc-login] [--rpc-login test:1234]
```

7. configure wallet-thingy, change wallet and/or redis connection details.
```bash
nano config.json
```

8. Run
```bash
node dist/index.js
```

