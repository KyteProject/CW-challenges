// Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// https://www.codewars.com/kata/even-or-odd/

// solution
function even_or_odd(number) {
	return number % 2 ? 'Odd' : 'Even';
}

// tests
Test.assertEquals(even_or_odd(2), 'Even');
Test.assertEquals(even_or_odd(0), 'Even');
Test.assertEquals(even_or_odd(7), 'Odd');
Test.assertEquals(even_or_odd(1), 'Odd');
