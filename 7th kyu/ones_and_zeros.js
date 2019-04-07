// Given an array of one's and zero's convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// However, the arrays can have varying lengths, not just limited to 4.

// solutions
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

// tests
describe("One's and Zero's", () => {
	it('Example tests', () => {
		Test.assertEquals(binaryArrayToNumber([0, 0, 0, 1]), 1);
		Test.assertEquals(binaryArrayToNumber([0, 0, 1, 0]), 2);
		Test.assertEquals(binaryArrayToNumber([1, 1, 1, 1]), 15);
		Test.assertEquals(binaryArrayToNumber([0, 1, 1, 0]), 6);
	});
});
