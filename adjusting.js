const turnOnBallast = (dali, shortAddress) => {
	dali(shortAddress << 1, 254)
}

const turnOnGroup = (dali, group) => {
	dali(GROUP_BIT | (group << 1), 254)
}

const turnOffBallast = (dali, shortAddress) => {
	dali((shortAddress << 1) | 1, 0)
}

const turnOffGroup = (dali, group) => {
	dali(GROUP_BIT | (group << 1) | 1, 0)
}

const GROUP_BIT = (1 << 7)

module.exports = {
	turnOnBallast,
	turnOnGroup,
	turnOffBallast,
	turnOffGroup,
}