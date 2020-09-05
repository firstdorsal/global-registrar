# Install
```
npm i global-registrar
```




## Links
[NPM](https://www.npmjs.com/package/global-registrar)

[Documentation](https://firstdorsal.eu/doc/global-registrar/)

[Code on Gitlab](https://git.firstdorsal.eu/firstdorsal/global-registrar)
## Modules

<dl>
<dt><a href="#module_global-registrar">global-registrar</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
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
        * [.checkPrice(domain, currency)](#module_global-registrar.GlobalRegistrar+checkPrice) ⇒ <code>Object</code> \| <code>Boolean</code>
        * [.registerDomain(domain, duration, registrant)](#module_global-registrar.GlobalRegistrar+registerDomain) ⇒ <code>Boolean</code>
        * [.renewDomain(domain, duration)](#module_global-registrar.GlobalRegistrar+renewDomain) ⇒ <code>Boolean</code>
        * [.getDomainInfo(domain)](#module_global-registrar.GlobalRegistrar+getDomainInfo) ⇒ <code>Object</code>
        * [.setNameServers(domain, nameservers)](#module_global-registrar.GlobalRegistrar+setNameServers) ⇒ <code>Boolean</code>

<a name="module_global-registrar.GlobalRegistrar"></a>

### global-registrar.GlobalRegistrar
Class representing the global registrar

**Kind**: static class of [<code>global-registrar</code>](#module_global-registrar)  

* [.GlobalRegistrar](#module_global-registrar.GlobalRegistrar)
    * [new module.exports.GlobalRegistrar(plugin)](#new_module_global-registrar.GlobalRegistrar_new)
    * [.listAvailableTLD()](#module_global-registrar.GlobalRegistrar+listAvailableTLD) ⇒ <code>Array</code>
    * [.checkAvailability(domain)](#module_global-registrar.GlobalRegistrar+checkAvailability) ⇒ <code>Boolean</code>
    * [.checkPrice(domain, currency)](#module_global-registrar.GlobalRegistrar+checkPrice) ⇒ <code>Object</code> \| <code>Boolean</code>
    * [.registerDomain(domain, duration, registrant)](#module_global-registrar.GlobalRegistrar+registerDomain) ⇒ <code>Boolean</code>
    * [.renewDomain(domain, duration)](#module_global-registrar.GlobalRegistrar+renewDomain) ⇒ <code>Boolean</code>
    * [.getDomainInfo(domain)](#module_global-registrar.GlobalRegistrar+getDomainInfo) ⇒ <code>Object</code>
    * [.setNameServers(domain, nameservers)](#module_global-registrar.GlobalRegistrar+setNameServers) ⇒ <code>Boolean</code>

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

#### globalRegistrar.checkPrice(domain, currency) ⇒ <code>Object</code> \| <code>Boolean</code>
Checks if domain is publicly available for registration at the registrar. Takes domain name as string. Returns the pricing information from the registrar or false if domain is not available for registration

**Kind**: instance method of [<code>GlobalRegistrar</code>](#module_global-registrar.GlobalRegistrar)  
**Returns**: <code>Object</code> \| <code>Boolean</code> - Pricing information, false or null  

| Param | Type | Description |
| --- | --- | --- |
| domain | <code>String</code> | The domain you want to check for |
| currency | <code>String</code> | The currency for which the price should be returned. Has to be ISO currency code. |

**Example**  
```js
await gr.checkPrice('paulisttoll.eu', 'EUR')
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