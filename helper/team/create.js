module.exports = mediator => dirtyTeam => {
	const team = transform(dirtyTeam)
	return mediator.call('mysql:query', generateQuery(team))
}

function generateQuery(team) {
	// using some better tool, of course
	return `INSERT stuff`
}

function transform(dirtyTeam) {
	return {}
}
