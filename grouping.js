const addToGroup = (dali, shortAddress, group) => {
	dali((shortAddress << 1) | 1, 0x60 | group)
}

const removeFromGroup = (dali, shortAddress, group) => {
	dali((shortAddress << 1) | 1, 0x70 | group)
}

module.exports = {
	addToGroup,
	removeFromGroup
}