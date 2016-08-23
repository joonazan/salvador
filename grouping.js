const addToGroup = (dali, shortAddress, group) => {
	dali((shortAddress << 1) | 1, 0x60 | group, null, true)
}

const removeFromGroup = (dali, shortAddress, group) => {
	dali((shortAddress << 1) | 1, 0x70 | group, null, true)
}

module.exports = {
	addToGroup,
	removeFromGroup
}