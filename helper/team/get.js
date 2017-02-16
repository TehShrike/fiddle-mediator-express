module.exports = mediator => teamId => {
	return mediator.call('mysql:query', generateQuery(teamId))
}

function generateQuery(teamId) {
	// using some better tool, of course
	return `SELECT * FROM team WHERE team.id = ${teamId}`
}
