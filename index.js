
module.exports = {
	address: (hasLEQ, onFind) => {
		const MAX = 16777216
		var start = 0
		var end = MAX

		while (hasLEQ(MAX)) {
			while (start != end) {
				var mid = split(start, end)
				if (hasLEQ(mid)) {
					end = mid
				} else {
					start = mid+1
				}
			}

			onFind(start)
			start = start+1
			end = MAX
		}
	}
}

const split = (start, end) => {
	return Math.floor((start + end) / 2)
}