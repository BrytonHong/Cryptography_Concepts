const {generateKeyPairSync} = require('crypto');

const {publicKey, privateKey} = generateKeyPairSync('rsa',{
    modulusLength: 2048, // Length of key in bits
    publicKeyEncoding:{
        type: 'spki', // Recommended by NodeJs docs
        format: 'pem'
    },
    privateKeyEncoding:{
        type: 'pkcs8', // Recommended by NodeJs docs
        format: 'pem'
        // cipher:'aes-256-cbc',
        // passphrase: 'top-secret'
    }
});

// console.log("Private Key = ",privateKey)
// console.log("Public Key = ",publicKey)

module.exports = {privateKey, publicKey}