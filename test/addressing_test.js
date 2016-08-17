var salvador = require('..')
require('must/register')

describe('Addressing', () => {
	describe('address', () => {
		it('should find all addresses', () => {
			addresses = []
			const numAddresses = 64
			for (var i = 0; i < numAddresses; i++) {
				addresses.push(Math.floor(Math.random() * 16777216))
			}
			testWithAddresses(addresses)
		})
		it('should not break when address zero is in use', () => {
			testWithAddresses([0, 4, 90349, 21344])
		})
	})
})

const testWithAddresses = addresses => {
	var compareCalled = 0
	salvador.genericAddressing(
		(x, cb) => {
			compareCalled++
			for (var i in addresses) {
				if (addresses[i] <= x) {
					cb(true)
					return
				}
			}
			cb(false)
		},
		(x, cb) => {
			const i = addresses.indexOf(x)
			i.must.not.be(-1)
			addresses.splice(i, 1)
			cb()
		}
	)
	console.log('comparisons: ', compareCalled)
	addresses.must.be.empty()
}