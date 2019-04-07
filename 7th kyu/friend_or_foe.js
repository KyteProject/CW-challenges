// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// Note: keep the original order of the names in the output.

// solutions
const friend = friends => {
	const output = [];

	friends.forEach(name => {
		if (name.length === 4) {
			output.push(name);
		}
	});

	return output;
};

// typesafe filter version
function friend(friends) {
	return friends.filter(n => typeof n === 'string' && n.length === 4);
}

// tests
Test.assertSimilar(friend(['Ryan', 'Kieran', 'Mark']), ['Ryan', 'Mark']);
Test.assertSimilar(friend(['Ryan', 'Jimmy', '1234', '4', 'Cool Man']), ['Ryan']);
Test.assertSimilar(friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool']), ['Jimm', 'Cari', 'aret']);
Test.assertSimilar(friend(['Love', 'Your', 'Face', '1']), ['Love', 'Your', 'Face']);
