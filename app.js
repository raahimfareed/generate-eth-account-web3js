#! node
require("dotenv").config();
const Web3 = require("web3");
const url = process.env.ENDPOINT_ADDRESS;

const web3 = new Web3(url);

const arg = process.argv[2];

if (arg != "--help" && arg != "-h" && arg != "--file" && arg != "-f" && arg !== undefined) {
    console.log(`${process.argv[1]}: unrecognized option '${arg}'\nTry ${process.argv[1]} --help for more information.`);
    return null;
}

if (arg == "--help" || arg == "-h") {
    console.log("Generates a new eth account and displays the address and private key\n\nFlags:\n-h, --help\n\tDisplays this message\n\n-f, --file\n\tGenerates a new eth account and writes the details into a new file with a random name ending with .eth-account instead of dislaying it");
    return null;
}

const account = web3.eth.accounts.create();

const details = `IMPORTANT: DO NOT SHARE PRIVATE KEY WITH ANYONE!\nNew Account Created\nAddress: ${account.address}\nPrivate Key: ${account.privateKey}`;

if (arg == "--file" || arg == "-f") {
    const fs = require("fs");
    const v4 = require('uuid');
    fs.writeFileSync(`./${v4()}.eth-account`, details, { flag: "a+" }, err => {
        console.log(err);
    });
    return null;
}

console.log(details);
