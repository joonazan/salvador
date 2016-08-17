const address = (hasLEQ, onFind) => {
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

module.exports = {
	address
}