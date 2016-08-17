const addressSearch = (hasLEQ, onFind) => {
	const MAX = 16777216
	var start = 0
	var end = MAX

	const findOne = () => {
		const split = () => {
			var mid = selectMiddle(start, end)
			hasLEQ(mid, has => {
				if (has) {
					end = mid
				} else {
					start = mid+1
				}

				if (start != end) {
					split()
				} else {
					onFind(start, () => {
						start = start+1
						end = MAX
						findOne()
					})
				}
			})
		}
		hasLEQ(MAX, has => {
			if (has) {
				split()
			}
		})			
	}
	findOne()
}

const selectMiddle = (start, end) => {
	return Math.floor((start + end) / 2)
}

const address = dali => {
	var smallestFreeShortAddress = 0
	addressSearch(
		(x, cb) => {
			broadcastLongAddress(x)
			dali(0xA9, 0, resp => {cb(resp == 0xFF)})
		},
		(x, cb) => {
			const a = smallestFreeShortAddress
			smallestFreeShortAddress++
			broadcastLongAddress(x)
			dali(0xB7, a, cb)
		}
	)
}

const broadcastLongAddress = (dali, x) => {
	dali(0xB1, x >> 16)
	dali(0xB3, (x >> 8) & 0xFF)
	dali(0xB5, x & 0xFF)
}

module.exports = {
	addressSearch,
	address
}