const getTeamHelper = require('./get')

module.exports = mediator => {
	const getTeam = getTeamHelper(mediator)

	return (teamId, team) => {
		return getTeam(teamId)
			.then(databaseTeam => {
				if (team.version < databaseTeam.version) {
					throw new Error('somebody updated it before you')
				} else {
					return mediator.call('mysql:query', generateQuery(teamId, team))
				}
			})
	}
}

function generateQuery(teamId, team) {
	// using some better tool, of course
	return `UPDATE stuff FROM team WHERE team.id = ${teamId}`
}
