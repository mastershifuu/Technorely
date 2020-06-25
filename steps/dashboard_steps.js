
'use strict';

let I, dashboardPage;

module.exports = {
    _init() {
        I = require('../steps_file.js')();
        dashboardPage = require('../pages/dashboard_page.js');
        dashboardPage._init();
    },

    async verifyDashboardPageIsDisplayed() {
        I.seeInCurrentUrl('/dashboard');
        I.waitForVisible(dashboardPage.dashboardHeader);
    },

    async searchProvider(provider) {
        I.waitForVisible(dashboardPage.usernameSearchField);
        I.fillField(dashboardPage.usernameSearchField, provider);
    },

    async verifyProviderInTable(provider) {
        I.waitForVisible(dashboardPage.providerInTable(provider));
    },

    async openProviderProfile(provider) {
        I.moveCursorTo(dashboardPage.providerInTable(provider));
        I.click(dashboardPage.editProviderButton(provider))
    },


};
