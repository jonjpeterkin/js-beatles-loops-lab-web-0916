function theBeatlesPlay(musicians, instruments) {
	var arry = []
	for(let i = 0; i < musicians.length; i++) {
		arry.push(`${musicians[i]} plays ${instruments[i]}`)
	}
	return arry
}

function johnLennonFacts(facts) {
	for(let i = 0; i < facts.length; i++) {
		facts.splice(i, 1, facts[i] + "!!!")
	}
	return facts
}

function iLoveTheBeatles(num) {
	var loveArry = []
	do {
		loveArry.push("I love the Beatles!")
		num++
	} while (	num < 15 )
	return loveArry
}