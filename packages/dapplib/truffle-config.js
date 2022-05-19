require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name raise saddle exchange good civil army gas'; 
let testAccounts = [
"0x7e618811d6cf3b63a49eec98a6b9090dcb323d51c6be6ea40ac162af2fd56322",
"0x013284f8e03d7d0abd9363edeceb22c881ee9a880939df91e674e23f7aa7a950",
"0xfbf4f71aeb5d55446f010261c24bde6a7755f6b40a944af4f0859353a30009a3",
"0x6f7ba55c013479e6169e3460f7e74523d495953ac2667652d3cf7fd561fe5701",
"0x6879dfe601ddcfd9f02c23522ee3ce99b7800d6e75a54378b6c52da3cd840fa0",
"0x2dd75655a8ecd64ff89c092c0bed2a090341effa4d3027c1aa2fc46cc21c904a",
"0xa2a436cb3162ad65b11a109ea24ac62a8ab688cd892a6c3b2c6b7cfdf5876849",
"0x500301d1409ec4c90ad5264d820aae1b08cfa8a5de5ffb36a5f7359e76d83d4f",
"0x47c3c482f88b78ab3ed91a79718ac08b037dc3f0f894e147e89852ef5d9492f1",
"0x87ca1b571114e6eedb88fab6ca904028064a2862f9bb1dcc29d5c45c886df94a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


