const {createHash} = require('crypto');

function hashValue(input){
    return createHash('sha256').update(input).digest('base64');
}

let test_data = 'Hello World!'
console.log('Before Hash',test_data)
let hash_data = hashValue(test_data)
console.log('After Hash',hash_data)

//Note: Attacker could use a rainbow table 