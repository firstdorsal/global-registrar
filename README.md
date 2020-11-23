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
## Modules

<dl>
<dt><a href="#module_global-registrar">global-registrar</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Dnssec">Dnssec</a> : <code>Object</code></dt>
<dd><p>Object representing the dnssec data</p>
</dd>
<dt><a href="#Registrant">Registrant</a> : <code>Object</code></dt>
<dd><p>Object representing a registrant</p>
</dd>
</dl>

<a name="module_global-registrar"></a>

## global-registrar

* [global-registrar](#module_global-registrar)
    * [.GlobalRegistrar](#module_global-registrar.GlobalRegistrar)
        * [new module.exports.GlobalRegistrar(plugin)](#new_module_global-registrar.GlobalRegistrar_new)
        * [.listAvailableTLD()](#module_global-registrar.GlobalRegistrar+listAvailableTLD) ⇒ <code>Array</code>
        * [.checkAvailability(domain)](#module_global-registrar.GlobalRegistrar+checkAvailability) ⇒ <code>Boolean</code>
        * [.checkPrice(domain)](#module_global-registrar.GlobalRegistrar+checkPrice) ⇒ <code>Number</code> \| <code>Boolean</code>
        * [.registerDomain(domain, duration, registrant)](#module_global-registrar.GlobalRegistrar+registerDomain) ⇒ <code>Boolean</code>
        * [.renewDomain(domain, duration)](#module_global-registrar.GlobalRegistrar+renewDomain) ⇒ <code>Boolean</code>
        * [.getDomainInfo(domain)](#module_global-registrar.GlobalRegistrar+getDomainInfo) ⇒ <code>Object</code>
        * [.setNameServers(domain, nameservers)](#module_global-registrar.GlobalRegistrar+setNameServers) ⇒ <code>Boolean</code>
        * [.setDNSSEC(domain, dnssec)](#module_global-registrar.GlobalRegistrar+setDNSSEC) ⇒ <code>Boolean</code>

<a name="module_global-registrar.GlobalRegistrar"></a>

### global-registrar.GlobalRegistrar
Class representing the global registrar

**Kind**: static class of [<code>global-registrar</code>](#module_global-registrar)  

* [.GlobalRegistrar](#module_global-registrar.GlobalRegistrar)
    * [new module.exports.GlobalRegistrar(plugin)](#new_module_global-registrar.GlobalRegistrar_new)
    * [.listAvailableTLD()](#module_global-registrar.GlobalRegistrar+listAvailableTLD) ⇒ <code>Array</code>
    * [.checkAvailability(domain)](#module_global-registrar.GlobalRegistrar+checkAvailability) ⇒ <code>Boolean</code>
    * [.checkPrice(domain)](#module_global-registrar.GlobalRegistrar+checkPrice) ⇒ <code>Number</code> \| <code>Boolean</code>
    * [.registerDomain(domain, duration, registrant)](#module_global-registrar.GlobalRegistrar+registerDomain) ⇒ <code>Boolean</code>
    * [.renewDomain(domain, duration)](#module_global-registrar.GlobalRegistrar+renewDomain) ⇒ <code>Boolean</code>
    * [.getDomainInfo(domain)](#module_global-registrar.GlobalRegistrar+getDomainInfo) ⇒ <code>Object</code>
    * [.setNameServers(domain, nameservers)](#module_global-registrar.GlobalRegistrar+setNameServers) ⇒ <code>Boolean</code>
    * [.setDNSSEC(domain, dnssec)](#module_global-registrar.GlobalRegistrar+setDNSSEC) ⇒ <code>Boolean</code>

<a name="new_module_global-registrar.GlobalRegistrar_new"></a>

#### new module.exports.GlobalRegistrar(plugin)
Create a global registrar client


| Param | Type | Description |
| --- | --- | --- |
| plugin | <code>Object</code> | a plugin object with its name and required data |

**Example**  
```js
const gr = new GlobalRegistrar({
        pluginName: 'global-registrar-plugin-gandi',
        pluginData: {
            apikey: process.env.GANDI_API_KEY
        }
        });
```
<a name="module_global-registrar.GlobalRegistrar+listAvailableTLD"></a>

#### globalRegistrar.listAvailableTLD() ⇒ <code>Array</code>
Retrieves list of available tld names. Must return array with all available tld endings and nothing else.

**Kind**: instance method of [<code>GlobalRegistrar</code>](#module_global-registrar.GlobalRegistrar)  
**Returns**: <code>Array</code> - Array of top level domains  
**Example**  
```js
await gr.listAvailableTLD()
```
<a name="module_global-registrar.GlobalRegistrar+checkAvailability"></a>

#### globalRegistrar.checkAvailability(domain) ⇒ <code>Boolean</code>
Checks if domain is publicly available for registration at the registrar. Takes domain name as string. Has to return true if domain is available and false if not. Null will be returned if the check couldnt be performed or an error occurs.

**Kind**: instance method of [<code>GlobalRegistrar</code>](#module_global-registrar.GlobalRegistrar)  
**Returns**: <code>Boolean</code> - True if domain is available for registration  

| Param | Type | Description |
| --- | --- | --- |
| domain | <code>String</code> | The domain you want to check for |

**Example**  
```js
await gr.checkAvailability('example.com')
```
<a name="module_global-registrar.GlobalRegistrar+checkPrice"></a>

#### globalRegistrar.checkPrice(domain) ⇒ <code>Number</code> \| <code>Boolean</code>
Checks if domain is publicly available for registration at the registrar. Takes domain name as string. Returns the pricing information from the registrar or false if domain is not available for registration

**Kind**: instance method of [<code>GlobalRegistrar</code>](#module_global-registrar.GlobalRegistrar)  
**Returns**: <code>Number</code> \| <code>Boolean</code> - price in USD for one year without taxes, false or null  

| Param | Type | Description |
| --- | --- | --- |
| domain | <code>String</code> | The domain you want to check for |

**Example**  
```js
await gr.checkPrice('paulisttoll.eu')
```
<a name="module_global-registrar.GlobalRegistrar+registerDomain"></a>

#### globalRegistrar.registerDomain(domain, duration, registrant) ⇒ <code>Boolean</code>
Registers a domain

**Kind**: instance method of [<code>GlobalRegistrar</code>](#module_global-registrar.GlobalRegistrar)  

| Param | Type | Description |
| --- | --- | --- |
| domain | <code>String</code> | The domain you want to register |
| duration | <code>Number</code> | The duration to register the domain for in years. |
| registrant | [<code>Registrant</code>](#Registrant) | A Registrant object with information about the registrant must be provided |

**Example**  
```js
await gr.registerDomain("paulisttoll.eu", 1, {
        email: "mail@example.com",
        lastName: "Müller",
        firstName: "Karl",
        registrantType: 0,
        country: "Deutschland",
        countryCode: "DE",
        state: "Bayern",
        city: "Augsburg",
        zip: "86150",
        street: "Musterstraße",
        houseNumber: "42",
        phone: '+491234567890'
    })
```
<a name="module_global-registrar.GlobalRegistrar+renewDomain"></a>

#### globalRegistrar.renewDomain(domain, duration) ⇒ <code>Boolean</code>
Renews a domain.

**Kind**: instance method of [<code>GlobalRegistrar</code>](#module_global-registrar.GlobalRegistrar)  

| Param | Type | Description |
| --- | --- | --- |
| domain | <code>String</code> | The domain you want to renew |
| duration | <code>Number</code> | The duration to renew the domain for in years. |

**Example**  
```js
await gr.renewDomain("paulisttoll.eu", 2)
        //will prolong the registration of the domain paulisttoll.eu by 2 years
```
<a name="module_global-registrar.GlobalRegistrar+getDomainInfo"></a>

#### globalRegistrar.getDomainInfo(domain) ⇒ <code>Object</code>
Gives back information about the registration of a domain

**Kind**: instance method of [<code>GlobalRegistrar</code>](#module_global-registrar.GlobalRegistrar)  
**Returns**: <code>Object</code> - information about the domain  

| Param | Type | Description |
| --- | --- | --- |
| domain | <code>String</code> | The domain you want to get information about |

**Example**  
```js
await gr.getDomainInfo('paulisttoll.eu')
```
<a name="module_global-registrar.GlobalRegistrar+setNameServers"></a>

#### globalRegistrar.setNameServers(domain, nameservers) ⇒ <code>Boolean</code>
Sets the nameservers for a domain

**Kind**: instance method of [<code>GlobalRegistrar</code>](#module_global-registrar.GlobalRegistrar)  
**Returns**: <code>Boolean</code> - true on success  

| Param | Type | Description |
| --- | --- | --- |
| domain | <code>String</code> | The domain you want to set the nameservers for |
| nameservers | <code>Array</code> | Array with the domain names of all nameservers |

**Example**  
```js
await gr.setNameServers('paulisttoll.eu',["tick.y.gy","trick.y.gy","track.y.gy"])
```
<a name="module_global-registrar.GlobalRegistrar+setDNSSEC"></a>

#### globalRegistrar.setDNSSEC(domain, dnssec) ⇒ <code>Boolean</code>
Sets the dnssec parameters for a domain at the registrar

**Kind**: instance method of [<code>GlobalRegistrar</code>](#module_global-registrar.GlobalRegistrar)  
**Returns**: <code>Boolean</code> - true on success  

| Param | Type | Description |
| --- | --- | --- |
| domain | <code>String</code> | The domain you want to set the nameservers for |
| dnssec | [<code>Dnssec</code>](#Dnssec) | Dnssec object with the dnssec parameters |

**Example**  
```js
await gr.setNameServers('paulisttoll.eu',{
    "keyTag": 30909,
    "algorithm": 8,
    "digestType": 2,
    "digest": "E2D3C916F6DEEAC73294E8268FB5885044A833FC5459588F4A9184CFC41A5766"
})
```
<a name="Dnssec"></a>

## Dnssec : <code>Object</code>
Object representing the dnssec data

**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| keyTag | <code>Number</code> | 
| algorithm | <code>Number</code> | 
| digestType | <code>Number</code> | 
| digest | <code>String</code> | 

**Example**  
```js
{
    "keyTag": 30909,
    "algorithm": 8,
    "digestType": 2,
    "digest": "E2D3C916F6DEEAC73294E8268FB5885044A833FC5459588F4A9184CFC41A5766"
}
```
<a name="Registrant"></a>

## Registrant : <code>Object</code>
Object representing a registrant

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| email | <code>String</code> | The email address of the registrant |
| lastName | <code>String</code> | The last name/"family name" of the registrant |
| firstName | <code>String</code> | The first name/"given name" of the registrant |
| registrantType | <code>0</code> \| <code>1</code> \| <code>2</code> \| <code>3</code> \| <code>4</code> | the type of the registrant: 0=person, 1=company, 2=association, 3=public body, 4=reseller |
| country | <code>String</code> | The country the registrant is coming from |
| countryCode | <code>String</code> | The country the registrant is coming from provided as ISO-3166 country code |
| state | <code>String</code> | The province/state the registrant is coming from |
| city | <code>String</code> | The city the registrant is coming from |
| zip | <code>String</code> | The zip code the registrant is coming from |
| street | <code>String</code> | The street the registrant is coming from |
| houseNumber | <code>String</code> | The house number the registrant is coming from |
| phone | <code>String</code> | The registrants phone number |

**Example**  
```js
{
        email: "mail@example.com",
        lastName: "Müller",
        firstName: "Karl",
        registrantType: 0,
        country: "Deutschland",
        countryCode: "DE",
        state: "Bayern",
        city: "Augsburg",
        zip: "86150",
        street: "Musterstraße",
        houseNumber: "42",
        phone: '+491234567890'
    }
```
