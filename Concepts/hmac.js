const {createHmac} = require('crypto');

const key_1 = 'hmac-key-2021#';
const messge_1 = 'Hello There!';

const hmac_1 = createHmac('sha256', key_1).update(messge_1).digest('hex');

console.log('hmac_1 = ',hmac_1)

const messge_2 = 'Hello World!';

const hmac_2 = createHmac('sha256', key_1).update(messge_2).digest('hex');

console.log('hmac_2 = ',hmac_2)
