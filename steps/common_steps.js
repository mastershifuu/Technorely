
'use strict';

let I, navigationBar;

module.exports = {
    _init() {
        I = require('../steps_file.js')();
        navigationBar = require('../pages/fragments/navigationBar.js');
        navigationBar._init();
    },

    async clickOnProviderNavigationButton() {
        I.waitForVisible(navigationBar.providerNavigationButton);
        I.click(navigationBar.providerNavigationButton);
    },

};
