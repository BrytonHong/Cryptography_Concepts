const {scryptSync, randomBytes, timingSafeEqual} = require('crypto');

//--->Test Samples - users
let users = [
    {email: 'testingemail_1@gmail.com',password:'64a17999d72b82acc0b07c8eb9cdb167:193a393d7cd774a1ec3e4ceecb23f26c0370d54f66af2870db4dccb061022cb8a7b12ef80cf129d03401de039f582c0bea58be9794a3cbdae6eaa11e2b1bffb1'},
    {email: 'testingemail_2@gmail.com',password:'08fc748525a6222b0dbdbeaad4e0b283:ca999e107c13509ff6092ff7138024c928ac9a72ab557f360575c18c3bb2c04054bd6227dacfda1d7d867f0b856f70b1f40693eac87a3c39b4e03275e990aae6'},
    {email: 'testingemail_3@gmail.com',password:'b7f696308ffe4420e68fd85c64cc2206:071701ce4874130c47b366781d032fc3df8fef4569fc6f942e03c9eb899c9b4a3cdd6198fb8be7feb84905f2273922db2aea2cda5d3aacdc0507c8450f1ff1ff'}
]

function register(email, password){
    const salt = randomBytes(16).toString('hex');
    const hashed_password = scryptSync(password, salt, 64).toString('hex');

    const user = {email, password: `${salt}:${hashed_password}`}
    return user;
}

function login(email, password){
    const user = users.find(v => v.email === email);

    const [salt, key] = user.password.split(':');
    const hashed_buffer = scryptSync(password, salt, 64)

    const key_buffer = Buffer.from(key, 'hex');
    const match = timingSafeEqual(hashed_buffer, key_buffer);//Prevents timing attack (NodeJs Doc: Prevents leaking timing information that would allow an attacker to guess one of the values)

    if(match){
        return true;
    }
    else{
        return false
    }
}



// --->Register
// let userSample = register('testingemail_1@gmail.com', 'CryptoCts1996#')
// console.log(userSample.password);

// --->Login
// let loginStatus = login('testingemail_1@gmail.com', 'CryptoConcepts2021#')
// console.log(loginStatus)