# Global Registrar
<img draggable="none" src="https://git.y.gy/firstdorsal/global-registrar/-/raw/master/logo.jpg" style="float:left; margin-right:10px;" height="100"> 

## The goal of global-registrar is to create an easy reusable interface for multiple registrar APIs as most registrar APIs are poorly documented and/or difficult to access. The plugins for the different APIs shall recreate the same effects with the same functions. Look at the plugins pages to see what data needs to be provided.

[![npm](https://ico.y.gy/npm/dm/global-registrar?style=flat-square&logo=npm)](https://www.npmjs.com/package/global-registrar)
[![NPM](https://ico.y.gy/npm/l/global-registrar?style=flat-square&color=brightgreen)](https://www.npmjs.com/package/global-registrar)
[![Snyk Vulnerabilities for npm package](https://ico.y.gy/snyk/vulnerabilities/npm/global-registrar?style=flat-square&logo=snyk)](https://snyk.io/test/npm/global-registrar)
[![Website](https://ico.y.gy/website?down_color=red&down_message=offline&label=documentation&up_color=success&up_message=online&url=https%3A%2F%2Fdoc.y.gy%2Fglobal-registrar&style=flat-square)](https://doc.y.gy/global-registrar/)
[![Website](https://ico.y.gy/website?down_color=red&down_message=offline&label=repository&up_color=success&up_message=online&url=https%3A%2F%2Fgit.y.gy%2Ffirstdorsal%2Fglobal-registrar&style=flat-square&logo=gitlab)](https://git.y.gy/firstdorsal/global-registrar/)


# Install
```
npm i global-registrar
```

# Supported APIs
**name<span>.</span>com** - [global-registrar-plugin-namecom](https://www.npmjs.com/package/global-registrar-plugin-namecom)

- Missing 
    - **listAvailableTLD()**  *Not supported by name<span>.</span>com*
- Provide following plugin data:
    - **apiToken**
    - **apiUsername**

**Gandi** - [global-registrar-plugin-gandi](https://www.npmjs.com/package/global-registrar-plugin-gandi)

- Missing 
    - **setDNSSEC()**  *Not supported by Gandi*
- Provide following plugin data:
    -  **apikey**

**Godaddy** - [global-registrar-plugin-godaddy](https://www.npmjs.com/package/global-registrar-plugin-godaddy)
- Missing 
    - **registerDomain()**  *Not implemented: overcomplicated*
    - **setDNSSEC()**  *Not supported by Godaddy*
- Provide following plugin data:
    - **apikey**
    - **apisecret**



**Feel free to create your own and get it listed here!**

You can also search for "global-registrar-plugin" on npm or click [here](https://www.npmjs.com/search?q=global-registrar-plugin).


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

    //create a registrar using  the name.com plugin
    const gr = new GlobalRegistrar({
        pluginName: 'global-registrar-plugin-namecom',
        pluginData: {
            apiToken: process.env.NAMECOM_API_TOKEN,
            apiUsername: process.env.NAMECOM_API_USERNAME,
        }
    });

    //check if a domain is available for registration at name.com
    console.log(await gr.checkAvailability('example.com'));
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
NAMECOM_API_TOKEN='YOUR NAMECOM API KEY'
NAMECOM_API_USERNAME='YOUR NAMECOM API USERNAME'
```
### 3. Use your secret variables 
```
process.env.NAMECOM_API_TOKEN
process.env.NAMECOM_API_USERNAME
```

# Create your own
You can use this template:
[global-registrar-plugin](https://git.y.gy/firstdorsal/global-registrar-plugin)

**1** - To get started create a folder named 'global-registrar-plugin-YOUR SERVICE NAME' and navigate inside it

**2** - Clone the repository by using this command (**WITH THE DOT AT THE END**)
```bash
git clone http://git.y.gy/firstdorsal/global-registrar-plugin.git .
```

**3** - If you have bash installed run: 

```bash
bash initGlobalRegistrarPlugin.sh 
```

If not: replace the string PLUGINNAME manually with the name of your service in the README<span>.</span>md and package.json

**4** - Replace the author field with your name

**4.1** - Replace the repository url with your own git repository url 

**5** - Create your plugin 

**6** - To get you plugin listed here

Check if all functions produce the effects required by the [documentation](https://doc.y.gy/global-registrar/).

Adapt your README accordingly.

Contact me.

# Need help or missing a feature?
Feel free to contact me via [xl9jthv_7bvgakv9o9wg0jabn2ylm91xxrzzgt0e@y.gy](mailto:xl9jthv_7bvgakv9o9wg0jabn2ylm91xxrzzgt0e@y.gy) in english or german



## Links
[NPM](https://www.npmjs.com/package/global-registrar)

[Documentation](https://doc.y.gy/global-registrar/)

[Code](https://git.y.gy/firstdorsal/global-registrar)
