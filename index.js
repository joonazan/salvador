var readdress = require('./addressing.js').readdress
var adjusting = require('./adjusting.js')
var grouping = require('./grouping.js')
var broadcast = require('./broadcast.js')
var blinking = require('./blinking.js')

var exps = Object.assign({
	readdress
}, adjusting, grouping, broadcast, blinking)

const injectBackend = dali => {
	mapped = {}
	for (var name in exps) {
		const n = name
		mapped[n] = function() {
			return exps[n](dali, ...arguments)
		}
	}
	return mapped
} 

module.exports = {exps, injectBackend}