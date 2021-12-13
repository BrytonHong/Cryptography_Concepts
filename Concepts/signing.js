const { createSign, createVerify } = require('crypto');
const {privateKey, publicKey} = require('./key_pairs');

const message = 'Hello World!'

// Sign

const signer = createSign('rsa-sha256');

signer.update(message);

const signature = signer.sign(privateKey, 'hex');


// Verify

const verifier = createVerify('rsa-sha256');

verifier.update(message);

const isVerified = verifier.verify(publicKey, signature, 'hex');

console.log(isVerified)