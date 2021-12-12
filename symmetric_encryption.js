const {createCipheriv, randomBytes, createDecipheriv} = require('crypto');

const message = 'Hello New World!';
const key = randomBytes(32);
const iv = randomBytes(16);

const cipher = createCipheriv('aes256', key, iv)

const encrypted_message = cipher.update(message,'utf8', 'hex')+cipher.final('hex');

const dechiper = createDecipheriv('aes256', key, iv)
const decrypted_message = dechiper.update(encrypted_message,'hex', 'utf-8')+dechiper.final('utf8');

console.log("Message = "+message)
console.log('Encrypted Message = '+encrypted_message);
console.log('Decrypted Message = '+decrypted_message.toString('utf-8'));