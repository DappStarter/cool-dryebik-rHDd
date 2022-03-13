require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow food elbow device night essay hen light army general'; 
let testAccounts = [
"0x7d6b48d0654ea51f39591dd9a69522a1a013d15fb2a782565d735fc3683dae7b",
"0x31058b25bd14c32900000eced7817c8241e66858efb0baa9c7e7a8d2f9fd5432",
"0x097c931a03db3e6a62ed088c77a8b8eb9db1f15f96708162cf5b5644ae6fe55c",
"0x604b4e3d70e4add710d2e15c53f2a253d0dbfb37da2e2bb1d42b50143b8e5d9a",
"0x0da7f9e7bb28dc540995938b6485a2ea25d2912d2f7d1fc8ca7e4dcdfa7a005e",
"0x31c30006f79dd03ffca5b3bc19cdf7571927444433fe91bce343e150836b296f",
"0xd9fe3b97c5fa0c007bbe37da5afb1dfd710875141730458edb0998068345b279",
"0x923f678a1f8c5038056f8e698bdb66ed2de64fa30235ecc6c996b7c6def13f87",
"0x967df070846b0dfe01e07f8ed6921b0bd29268a82b812244b329015b6b1c89d0",
"0xcccb55203214aa8366f423220ea584817633aa45785d862f51cddf6ebfc607d1"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

