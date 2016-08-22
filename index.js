var readdress = require('./addressing.js').readdress
var adjusting = require('./adjusting.js')
var grouping = require('./grouping.js')

var exps = Object.assign({
	readdress
}, adjusting, grouping)

module.exports = exps