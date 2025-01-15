// TODO: Import the Validate class.
const Validate = require('../validate'); // assuming validate.js is one level up in the directory.
// TODO: Describe a testing suite for checking the functionality of the Validate class.
describe('Validate', () => {
    // test block for the isPassword method
    describe('isPassword', () => {
      // TODO: Write a test that asserts that isPassword() returns false when passed an empty string.
      it('should return false when passed an empty string', () => {
        const validator = new Validate(); // create an instance of Validate class
        expect(validator.isPassword("")).toBe(false); // assert that empty string returns false
      });
    });
  });