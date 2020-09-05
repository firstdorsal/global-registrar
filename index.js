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

*/


module.exports.GlobalRegistrar = class {

    constructor(plugin) {
        const Plugin = require(plugin.pluginName);
        this.plugin = new Plugin(plugin.pluginData);
    }


    listAvailableTLD(...args) {
        return this.plugin.listAvailableTLD(...args);
    } //retrieves list of available tld names with basic pricing information must return array if all available tld endings and nothing else

    checkAvailability(...args) {
        return this.plugin.checkAvailability(...args);
    } //checks if domain is publicly available; takes domain name as string has to return true if domain is available; false if not; null if check couldnt be performed and log error

    checkPrice(...args) {
        return this.plugin.checkPrice(...args);
    } //checks availability and price for a specific domain name provided as string; returns object with price on success; returns false if domain ist not available; returns null and logs error if something failed

    registerDomain(...args) {
        return this.plugin.registerDomain(...args);
    } //registers a domain takes domain name as string; takes information about the registrant as Registrant object returns true on success 

    renewDomain(...args) {
        return this.plugin.renewDomain(...args);
    } //renews a domain at the present registrar
    /*
        transferDomain(...args) {
            return this.plugin.transferDomain(...args);
        } //transfer domain from one registrar to another
    */
    getDomainInfo(...args) {
        return this.plugin.getDomainInfo(...args);
    } //gets the information about a domain: is registered? where? what price? nameservers? etc.

    setNameServers(...args) {
        return this.plugin.setNameServers(...args);
    } //sets name server for domain takes domain name and array of name servers to apply 
    setDNSSEC(...args) {
        return this.plugin.setDNSSEC(...args);
    } //sets dnssec parameters at registrar 
}