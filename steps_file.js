// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    selectFromDropDown(selectLocator, itemToSelectLocator) {
      this.waitForVisible(selectLocator);
      this.click(selectLocator);
      this.waitForVisible(itemToSelectLocator);
      this.click(itemToSelectLocator);
    },

    getUniqueValue(length = 6) {
      const faker = require('faker');
      let unique_value = '';
      let i = 1;
      for (i; i <= length; i++) {
        unique_value = unique_value.concat(faker.random.alphaNumeric());
      }
      return unique_value
    },

    getUniqueNumber(length = 10) {
      const faker = require('faker');
      let unique_value = '';
      unique_value = unique_value.concat(faker.random.number({num: 0, min: 1, max: 9}));
      let i = 2;
      for (i; i <= length; i++) {
        unique_value = unique_value.concat(faker.random.number({num: 0, max: 9}));
      }
      return unique_value
    },

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
}
