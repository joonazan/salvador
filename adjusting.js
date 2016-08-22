const turnOffBallast = (dali, shortAddress) => dali((shortAddress << 1) | 1, 0)
const turnOnBallast = (dali, shortAddress) => setBallastLightLevel(dali, shortAddress, 254)
const setBallastLightLevel = (dali, shortAddress, x) => dali(shortAddress << 1, x)

const turnOffGroup = (dali, group) => groupify(turnOffBallast)
const turnOnGroup = (dali, group) => groupify(turnOnBallast)
const setGroupLightLevel = (dali, group, x) => groupify(setBallastLightLevel)

const groupify = f => (a, address, c) => f(a, (1 << 6) | address, c)



module.exports = {
	turnOnBallast,
	turnOffBallast,
	setBallastLightLevel,

	turnOnGroup,
	turnOffGroup,
	setGroupLightLevel
}