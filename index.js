"use strict";

/**
* Object representing a registrant
* @typedef Registrant
* @type {Object}
* @prop {String} email The email address of the registrant
* @prop {String} lastName The last name/"family name" of the registrant
* @prop {String} firstName The first name/"given name" of the registrant
* @prop {0|1|2|3|4} registrantType the type of the registrant: 0=person, 1=company, 2=association, 3=public body, 4=reseller 
* @prop {String} country The country the registrant is coming from
* @prop {String} countryCode The country the registrant is coming from provided as ISO-3166 country code
* @prop {String} state The province/state the registrant is coming from
* @prop {String} city The city the registrant is coming from
* @prop {String} zip The zip code the registrant is coming from
* @prop {String} street The street the registrant is coming from
* @prop {String} houseNumber The house number the registrant is coming from
* @prop {String} phone The registrants phone number

* @example
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
*/

/** @module global-registrar */
/** 
 * @class Class representing the global registrar
 *@example 
(async () => {
    //get global variables
    require('dotenv').config();

    const {
        GlobalRegistrar
    } = require('global-registrar');
    const gr = new GlobalRegistrar({
        pluginName: 'global-registrar-plugin-gandi',
        pluginData: {
            apikey: process.env.GANDI_API_KEY
        }
    });
    console.log(await gr.listAvailableTLD());
})();
*/
module.exports.GlobalRegistrar = class {
    /**
     * Create a global registrar client
     * @constructor
     * @param {Object} plugin a plugin object with its name and required data
     * @example
     * const gr = new GlobalRegistrar({
        pluginName: 'global-registrar-plugin-gandi',
        pluginData: {
            apikey: process.env.GANDI_API_KEY
        }
        });
     */
    constructor(plugin) {
        const Plugin = require(plugin.pluginName);
        this.plugin = new Plugin(plugin.pluginData);
    }
    /**
     * Retrieves list of available tld names. Must return array with all available tld endings and nothing else.
     * @returns {Array} Array of top level domains
     * @example
     await gr.listAvailableTLD()
     */
    listAvailableTLD() {
        return this.plugin.listAvailableTLD();
    }
    /**
     * Checks if domain is publicly available for registration at the registrar. Takes domain name as string. Has to return true if domain is available and false if not. Null will be returned if the check couldnt be performed or an error occurs.
     * @param {String} domain The domain you want to check for
     * @returns {Boolean} True if domain is available for registration
     * @example
     await gr.checkAvailability('example.com')
     */
    checkAvailability(domain) {
        return this.plugin.checkAvailability(domain);
    }
    /**
     * Checks if domain is publicly available for registration at the registrar. Takes domain name as string. Returns the pricing information from the registrar or false if domain is not available for registration
     * @param {String} domain The domain you want to check for
     * @param {String} currency The currency for which the price should be returned. Has to be ISO currency code.
     * @returns {Object|Boolean} Pricing information, false or null
     * @example
     await gr.checkPrice('paulisttoll.eu', 'EUR')
     */
    checkPrice(domain, currency) {
        return this.plugin.checkPrice(domain, currency);
        //TODO: pricing is not normed!
    }

    /**
     * Registers a domain
     * @param {String} domain The domain you want to register
     * @param {Number} duration The duration to register the domain for in years.
     * @param {Registrant} registrant A Registrant object with information about the registrant must be provided
     * @returns {Boolean}
     * @example
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
     */
    registerDomain(domain, duration, registrant) {
        return this.plugin.registerDomain(domain, duration, registrant);
    }
    /**
     * Renews a domain.
     * @param {String} domain The domain you want to renew
     * @param {Number}  duration The duration to renew the domain for in years.
     * @returns {Boolean} 
     * @example
        await gr.renewDomain("paulisttoll.eu", 2)
        //will prolong the registration of the domain paulisttoll.eu by 2 years
     */
    renewDomain(domain, duration) {
        return this.plugin.renewDomain(domain, duration);
    }
    /**
     * Gives back information about the registration of a domain
     * @param {String} domain The domain you want to get information about
     * @returns {Object} information about the domain
     * @example
        await gr.getDomainInfo('paulisttoll.eu')
     */
    getDomainInfo(domain) {
        return this.plugin.getDomainInfo(domain);
    }
    /**
     * Sets the nameservers for a domain
     * @param {String} domain The domain you want to set the nameservers for
     * @param {Array} nameservers Array with the domain names of all nameservers
     * @returns {Boolean} true on success
     * @example
        await gr.setNameServers('paulisttoll.eu',["tick.y.gy","trick.y.gy","track.y.gy"])
     */
    setNameServers(domain, nameservers) {
        return this.plugin.setNameServers(domain, nameservers);
    }






    transferDomain(...args) {
        return this.plugin.transferDomain(...args);
    } //transfer domain from one registrar to another

    setDNSSEC(...args) {
        return this.plugin.setDNSSEC(...args);
    } //sets dnssec parameters at registrar

}