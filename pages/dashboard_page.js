'use strict';

let I;

module.exports = {

    _init() {
        I = require('../steps_file.js')();
    },


    dashboardHeader: '//h2[text()="Superadmin Dashboard"]',
    usernameSearchField: '//input[@placeholder="Name, username or e-mail"]',
    providerInTable(provider) {return `//div[@class="table"]//td[text()="${provider}"]`},
    editProviderButton(provider) {return `//td[text()="${provider}"]/parent::tr//a[@class="link"]`},

};
