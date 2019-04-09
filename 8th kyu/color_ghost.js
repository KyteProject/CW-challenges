// Create a class Ghost
// Ghost objects are instantiated without any arguments.
// Ghost objects are given a random color attribute of white" or "yellow" or "purple" or "red" when instantiated

// solution
class Ghost {
	constructor() {
		this.colors = ['white', 'yellow', 'red', 'purple'];
		this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
	}
}

// tests
describe('Solution', function() {
	it('should test for something', function() {
		// Test.assertEquals(1 + 1, 2);
		// assert.strictEqual(1 + 1, 2);
	});
});
