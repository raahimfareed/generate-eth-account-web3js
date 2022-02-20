#! node
require("dotenv").config();
let Web3 = require("web3");
let url = process.env.ENDPOINT_ADDRESS;

let web3 = new Web3(url);
let account = web3.eth.accounts.create();

console.log(`IMPORTANT: DO NOT SHARE PRIVATE KEY WITH ANYONE!\nNew Account Created\nAddress: ${account.address}\nPrivate Key: ${account.privateKey}`);
