/* Return the number (count) of vowels in the given string.
  We will consider a, e, i, o, and u as vowels for this Kata.
 The input string will only consist of lower case letters and/or spaces. */

// Solution
const getCount = input => {
	const match = input.match(/[aeiou]/gi);

	return !match ? 0 : match.length;
};

// Tests
describe('Case 1', function() {
	it('should be defined', function() {
		Test.assertEquals(getCount('abracadabra'), 5);
	});
});
