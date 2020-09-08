# Install
```
npm i global-registrar
```

# Description
The goal of global-registrar is to create an easy reusable interface for multiple registrar APIs as most registrar APIs are poorly documented and/or difficult to access. 

The plugins for the different APIs shall recreate the same effects with the same functions.

# Supported APIs

Gandi - [global-registrar-plugin-gandi](https://www.npmjs.com/package/global-registrar-plugin-gandi)

- Missing setDNSSEC() - Not supported by Gandi

**Feel free to create your own and get it listed here!**

You can also search for "global-registrar-plugin" on npm.


# Basic Example
*test.js*
```js
(async () => {
    //get global variables
    require('dotenv').config();

    //import the module
    const {
        GlobalRegistrar
    } = require('global-registrar');

    //create a registrar using  the gandi plugin
    const gr = new GlobalRegistrar({
        pluginName: 'global-registrar-plugin-gandi',
        pluginData: {
            apikey: process.env.GANDI_API_KEY
        }
    });

    //get list of all available tld at gandi
    console.log(await gr.listAvailableTLD());
})();

```
## What is dotenv?
The line "require('dotenv').config();" gets the contents of a file called ".env" in which you should store your global and secret variables.

### 1. Install the module "dotenv" with
```
npm i dotenv
```
### 2. Create a file named ".env" in your applications root directory

*.env*
```c
GANDI_API_KEY='YOUR GANDI API KEY'
```
### 3. Use your secret variables 
```
process.env.GANDI_API_KEY
```

# Need help or missing a feature?
Feel free to contact me via [xl9jthv_7bvgakv9o9wg0jabn2ylm91xxrzzgt0e@firstdorsal.eu](mailto:xl9jthv_7bvgakv9o9wg0jabn2ylm91xxrzzgt0e@firstdorsal.eu) in english or german



## Links
[NPM](https://www.npmjs.com/package/global-registrar)

[Documentation](https://firstdorsal.eu/doc/global-registrar/)

[Code on Gitlab](https://git.firstdorsal.eu/firstdorsal/global-registrar)
