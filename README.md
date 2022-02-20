# Generate Eth Blockchain Account
This app will generate a blockchain address on ethereum blockchain. It uses web3.js

## Prerequisites
 - Nodejs should be installed
 - npm should be installed for installing dependencies

## Installation

```bash
# linux/mac
# copy contents from .env-example to .env
cp .env-example .env

# windows
# create a copy of .env-example and rename it to .env

# enter your endpoint address in `.env` file

# install package dependencies
$ npm i

# run the program
$ node app.js
```

## Commands
```bash
# generate address and display on terminal
$ node app.js

# show information about the app
$ node app.js -h
$ node app.js --help

# generate address and write it in a file with a random name ending with .eth-account
$ node app.js -f
$ node app.js --file
```

## Misc
(Only on Mac/Linux) Shebang is included in `app.js` so the file can be run directly from terminal without `node` command.
