'use strict';

let I;

module.exports = {

    _init() {
        I = require('../steps_file.js')();
    },


    fields: {
        username: '//input[@name="username"]',
        password: '//input[@name="password"]'
    },
    submitButton: '//button[contains(.,"LOG IN")]',

};
