const {publicEncrypt, privateDecrypt} = require('crypto');
const {privateKey, publicKey} = require('./key_pairs');

const message = 'Hello New World!';

const encrypted_message = publicEncrypt(
    publicKey, Buffer.from(message)
);

console.log('Encrypted Message = ',encrypted_message.toString('hex'))

const decrypted_message = privateDecrypt(
    privateKey, encrypted_message
);


console.log('Decrypted Message = ',decrypted_message.toString('utf-8'))