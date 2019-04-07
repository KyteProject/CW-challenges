// Create a class Ball.
// Ball objects should accept one argument for "ball type" when instantiated.
// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
// https://www.codewars.com/kata/regular-ball-super-ball/train/javascript

// solutuon
class Ball {
	constructor(ballType) {
		this.ballType = ballType || 'regular';
	}
}

//  tests
Test.assertEquals(new Ball().ballType, 'regular');
Test.assertEquals(new Ball('super').ballType, 'super');
