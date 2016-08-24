var adj = require('./adjusting.js')

// Blinks the given ballast. Returns a function for stopping the blinking.
const blinkBallast = (dali, shortAddress) => {
	var next = adj.turnOnBallast
	
	var intervalID = setInterval(() => {
		next(dali, shortAddress)

		if (next == adj.turnOnBallast) {
			next = adj.turnOffBallast
		} else {
			next = adj.turnOnBallast
		}
	}, 2000)

	return () => {clearInterval(intervalID)}
}

module.exports = {blinkBallast}