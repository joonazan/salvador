const allOff = dali => {
	dali(0xFF, 0)
}

const allOn = dali => {
	dali(0xFE, 254)
}

module.exports = {
	allOn,
	allOff
}